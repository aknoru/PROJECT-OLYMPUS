"""Shared validation and analytics primitives for Project Olympus.

The module intentionally uses only the Python standard library so repository
validation works in clean local environments and CI before optional docs tools
are installed.
"""

from __future__ import annotations

import hashlib
import json
import re
from collections import Counter, defaultdict
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Callable, Iterable
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
IGNORED_DIRS = {".git", ".venv", "node_modules", "site", "__pycache__"}
FRONT_MATTER_KEYS = ("id", "title", "type", "status", "version", "owner")
LINK_RE = re.compile(r"(?<!!)\[[^\]]*\]\(([^)]+)\)")
SOURCE_ID_RE = re.compile(r"`(SRC-[A-Z0-9-]+)`")
HEADING_RE = re.compile(r"^(#{1,6})\s+(.+?)\s*$", re.MULTILINE)
MERMAID_RE = re.compile(r"```mermaid\s*\n(.*?)```", re.DOTALL)


@dataclass(frozen=True)
class Issue:
    code: str
    path: str
    message: str
    severity: str = "error"


@dataclass
class CheckResult:
    name: str
    issues: list[Issue]
    metrics: dict[str, int | float | str]

    @property
    def passed(self) -> bool:
        return not any(issue.severity == "error" for issue in self.issues)

    def serializable(self) -> dict:
        return {
            "name": self.name,
            "passed": self.passed,
            "issues": [asdict(issue) for issue in self.issues],
            "metrics": self.metrics,
        }


def repository_files(root: Path = ROOT, suffixes: tuple[str, ...] | None = None) -> list[Path]:
    files = []
    for path in root.rglob("*"):
        if not path.is_file() or any(part in IGNORED_DIRS for part in path.parts):
            continue
        if suffixes and path.suffix.lower() not in suffixes:
            continue
        files.append(path)
    return sorted(files)


def markdown_files(root: Path = ROOT) -> list[Path]:
    return repository_files(root, (".md",))


def relative(path: Path, root: Path = ROOT) -> str:
    return path.resolve().relative_to(root.resolve()).as_posix()


def read(path: Path) -> str:
    # Use utf-8-sig to strip the UTF-8 BOM (EF BB BF) that some Windows editors write.
    return path.read_text(encoding="utf-8-sig", errors="replace")


def without_fences(text: str) -> str:
    return re.sub(r"```.*?```", "", text, flags=re.DOTALL)


def front_matter(text: str) -> tuple[dict[str, str], str]:
    if not text.startswith("---\n"):
        return {}, text
    end = text.find("\n---\n", 4)
    if end < 0:
        return {}, text
    block = text[4:end]
    values: dict[str, str] = {}
    for line in block.splitlines():
        match = re.match(r"^([A-Za-z_][\w-]*):\s*(.*?)\s*$", line)
        if match:
            values[match.group(1)] = match.group(2).strip("\"'")
    return values, text[end + 5 :]


def github_slug(value: str) -> str:
    value = re.sub(r"<[^>]+>", "", value).strip().lower()
    value = re.sub(r"[^\w\- ]", "", value)
    return re.sub(r"\s+", "-", value)


def check_frontmatter(root: Path = ROOT) -> CheckResult:
    issues: list[Issue] = []
    identifiers: dict[str, list[str]] = defaultdict(list)
    for path in markdown_files(root):
        text = read(path)
        metadata, _ = front_matter(text)
        rel = relative(path, root)
        if not metadata:
            issues.append(Issue("FM001", rel, "Missing or unclosed YAML front matter."))
            continue
        for key in FRONT_MATTER_KEYS:
            if not metadata.get(key):
                issues.append(Issue("FM002", rel, f"Missing required front matter key: {key}."))
        if metadata.get("id"):
            identifiers[metadata["id"]].append(rel)
    for identifier, paths in identifiers.items():
        if len(paths) > 1:
            for path in paths:
                issues.append(Issue("FM003", path, f"Duplicate document id: {identifier}."))
    return CheckResult("frontmatter", issues, {"files": len(markdown_files(root)), "unique_ids": len(identifiers)})


def check_markdown(root: Path = ROOT) -> CheckResult:
    issues: list[Issue] = []
    table_count = 0
    for path in markdown_files(root):
        text = read(path)
        _, body = front_matter(text)
        rel = relative(path, root)
        scan = without_fences(body)
        headings = [(len(m.group(1)), m.group(2).strip()) for m in HEADING_RE.finditer(scan)]
        if sum(level == 1 for level, _ in headings) != 1:
            issues.append(Issue("MD001", rel, "Document must contain exactly one H1."))
        if any(current > previous + 1 for (previous, _), (current, _) in zip(headings, headings[1:])):
            issues.append(Issue("MD002", rel, "Heading hierarchy skips a level."))
        duplicates = [heading for heading, count in Counter(label for _, label in headings).items() if count > 1]
        for heading in duplicates:
            issues.append(Issue("MD003", rel, f"Duplicate heading label: {heading}."))
        if text.count("```") % 2:
            issues.append(Issue("MD004", rel, "Unbalanced fenced code block."))
        if "\t" in text:
            issues.append(Issue("MD005", rel, "Tab character found; use spaces."))
        for lineno, line in enumerate(text.splitlines(), 1):
            trailing = len(line) - len(line.rstrip(" "))
            if trailing not in (0, 2):
                issues.append(Issue("MD006", rel, f"Invalid trailing whitespace on line {lineno}."))
        table_count += len(re.findall(r"^\|\s*:?-{3,}", text, re.MULTILINE))
    return CheckResult("markdown", issues, {"files": len(markdown_files(root)), "tables": table_count})


def check_links(root: Path = ROOT) -> CheckResult:
    issues: list[Issue] = []
    checked = 0
    anchor_cache: dict[Path, set[str]] = {}
    for path in markdown_files(root):
        text = read(path)
        rel = relative(path, root)
        for target in LINK_RE.findall(text):
            if "://" in target or target.startswith(("mailto:", "#")):
                continue
            checked += 1
            parts = unquote(target).split("#", 1)
            destination = (path.parent / parts[0]).resolve()
            if not destination.exists():
                issues.append(Issue("LINK001", rel, f"Broken relative link: {target}."))
                continue
            if len(parts) == 2 and parts[1] and destination.suffix.lower() == ".md":
                anchors = anchor_cache.setdefault(
                    destination,
                    {github_slug(match.group(2)) for match in HEADING_RE.finditer(without_fences(read(destination)))},
                )
                if parts[1].lower() not in anchors:
                    issues.append(Issue("LINK002", rel, f"Broken anchor: {target}."))
    return CheckResult("links", issues, {"internal_links": checked})


def check_mermaid(root: Path = ROOT) -> CheckResult:
    issues: list[Issue] = []
    diagrams = 0
    declarations = re.compile(
        r"^(flowchart|graph|stateDiagram|sequenceDiagram|classDiagram|erDiagram|"
        r"mindmap|timeline|gantt|pie|journey|gitGraph)"
    )
    for path in markdown_files(root):
        text = read(path)
        rel = relative(path, root)
        diagrams += text.count("```mermaid")
        blocks = MERMAID_RE.findall(text)
        if len(blocks) != text.count("```mermaid"):
            issues.append(Issue("MER001", rel, "Unclosed Mermaid fence."))
        for block in blocks:
            first = next((line.strip() for line in block.splitlines() if line.strip()), "")
            if not declarations.match(first):
                issues.append(Issue("MER002", rel, f"Unsupported Mermaid declaration: {first!r}."))
            if re.search(r"^## Decision Tree(?:s)?\s*$", without_fences(text), re.MULTILINE):
                if "-->" not in block and " --> " not in block:
                    issues.append(Issue("MER003", rel, "Decision diagram has no directed branch."))
    return CheckResult("mermaid", issues, {"diagrams": diagrams})


def check_yaml(root: Path = ROOT) -> CheckResult:
    """Perform dependency-free structural checks on YAML/YML files.

    CI additionally installs PyYAML and can parse these files strictly when it is
    available; local operation remains dependency-free.
    """
    issues: list[Issue] = []
    files = repository_files(root, (".yml", ".yaml"))
    for path in files:
        rel = relative(path, root)
        text = read(path)
        if "\t" in text:
            issues.append(Issue("YAML001", rel, "YAML contains tab indentation."))
    try:
        import yaml  # type: ignore
    except ImportError:
        pass
    else:
        class OlympusYamlLoader(yaml.SafeLoader):
            """Safe loader that treats MkDocs Python-name tags as strings."""

        OlympusYamlLoader.add_multi_constructor(
            "tag:yaml.org,2002:python/name:",
            lambda loader, suffix, node: suffix,
        )
        for path in files:
            try:
                yaml.load(read(path), Loader=OlympusYamlLoader)
            except Exception as exc:  # pragma: no cover - dependency-specific
                issues.append(Issue("YAML003", relative(path, root), f"Parser error: {exc}."))
    return CheckResult("yaml", issues, {"files": len(files)})


def check_json(root: Path = ROOT) -> CheckResult:
    """Validate JSON syntax and JSON Schema metaschemas when available."""
    issues: list[Issue] = []
    files = repository_files(root, (".json",))
    values: dict[Path, object] = {}
    for path in files:
        try:
            values[path] = json.loads(read(path))
        except json.JSONDecodeError as exc:
            issues.append(Issue("JSON001", relative(path, root), f"JSON parser error: {exc}."))
    try:
        from jsonschema import Draft202012Validator  # type: ignore
    except ImportError:
        pass
    else:
        for path, value in values.items():
            if path.name.endswith(".schema.json") and isinstance(value, dict):
                try:
                    Draft202012Validator.check_schema(value)
                except Exception as exc:  # pragma: no cover - dependency-specific
                    issues.append(Issue("JSON002", relative(path, root), f"Invalid JSON Schema: {exc}."))
    return CheckResult("json", issues, {"files": len(files)})


def check_tree(root: Path = ROOT) -> CheckResult:
    """Verify architecture-critical paths without changing the canonical tree."""
    required = (
        "MASTER_ARCHITECTURE.md",
        "README.md",
        "governance",
        "docs",
        "01-operation-renaissance",
        "scripts",
        "tests",
        "data/registries",
        "data/schemas",
        "references",
        "templates",
        ".github/workflows",
    )
    issues = [
        Issue("TREE001", item, "Required architecture path is missing.")
        for item in required
        if not (root / item).exists()
    ]
    return CheckResult("tree", issues, {"required_paths": len(required)})


def _registry_entries(path: Path) -> list[dict[str, str | list[str]]]:
    text = read(path)
    entries: list[dict[str, str | list[str]]] = []
    for block in re.split(r"\n\s*- id:\s+", text)[1:]:
        identifier = block.splitlines()[0].strip()
        path_match = re.search(r"\n\s+path:\s*(\S+)", block)
        deps_match = re.search(r"\n\s+depends_on:\s*\[([^\]]*)\]", block)
        entries.append(
            {
                "id": identifier,
                "path": path_match.group(1) if path_match else "",
                "depends_on": [part.strip() for part in deps_match.group(1).split(",") if part.strip()]
                if deps_match
                else [],
            }
        )
    return entries


def check_dependencies(root: Path = ROOT) -> CheckResult:
    issues: list[Issue] = []
    path = root / "data/registries/dependency-registry.yml"
    entries = _registry_entries(path)
    identifiers = {str(entry["id"]) for entry in entries}
    graph = {str(entry["id"]): list(entry["depends_on"]) for entry in entries}
    for entry in entries:
        item_path = str(entry["path"])
        if item_path and not (root / item_path).exists():
            issues.append(Issue("DEP001", relative(path, root), f"Missing registered path: {item_path}."))
        for dependency in entry["depends_on"]:
            if dependency not in identifiers and dependency != "MASTER-ARCHITECTURE":
                issues.append(
                    Issue("DEP002", relative(path, root), f"Unresolved dependency {entry['id']} -> {dependency}.")
                )
    visiting: set[str] = set()
    visited: set[str] = set()

    def visit(node: str, trail: list[str]) -> None:
        if node in visiting:
            issues.append(Issue("DEP003", relative(path, root), f"Dependency cycle: {' -> '.join(trail + [node])}."))
            return
        if node in visited:
            return
        visiting.add(node)
        for dependency in graph.get(node, []):
            if dependency in graph:
                visit(dependency, trail + [node])
        visiting.remove(node)
        visited.add(node)

    for identifier in graph:
        visit(identifier, [])
    return CheckResult("dependencies", issues, {"records": len(entries)})


def check_sources(root: Path = ROOT) -> CheckResult:
    issues: list[Issue] = []
    registry_path = root / "references/source-register.yml"
    registered = set(re.findall(r"^\s*- id:\s*(SRC-[A-Z0-9-]+)", read(registry_path), re.MULTILINE))
    used: dict[str, list[str]] = defaultdict(list)
    for path in markdown_files(root):
        for source_id in SOURCE_ID_RE.findall(read(path)):
            used[source_id].append(relative(path, root))
    for source_id, paths in used.items():
        if source_id not in registered:
            for path in paths:
                issues.append(Issue("SRC001", path, f"Unregistered source id: {source_id}."))
    return CheckResult("sources", issues, {"registered": len(registered), "referenced": len(used)})


def check_navigation(root: Path = ROOT) -> CheckResult:
    issues: list[Issue] = []
    markdown = markdown_files(root)
    inbound: Counter[Path] = Counter()
    for path in markdown:
        for target in LINK_RE.findall(read(path)):
            if "://" in target or target.startswith(("mailto:", "#")):
                continue
            destination = (path.parent / unquote(target).split("#", 1)[0]).resolve()
            if destination.exists() and destination.suffix.lower() == ".md":
                inbound[destination] += 1
    scope = root / "01-operation-renaissance"
    scoped = [path for path in markdown if scope in path.parents]
    for path in scoped:
        if path.name != "README.md" and inbound[path.resolve()] == 0:
            issues.append(Issue("NAV001", relative(path, root), "Operation Renaissance file has no inbound link."))
    return CheckResult("navigation", issues, {"operation_files": len(scoped), "orphans": len(issues)})


def check_duplicates(root: Path = ROOT) -> CheckResult:
    issues: list[Issue] = []
    hashes: dict[str, list[str]] = defaultdict(list)
    identifiers: dict[str, list[str]] = defaultdict(list)
    for path in markdown_files(root):
        text = read(path)
        metadata, _ = front_matter(text)
        if metadata.get("id"):
            identifiers[metadata["id"]].append(relative(path, root))
        normalized = re.sub(r"\s+", " ", text).strip()
        hashes[hashlib.sha256(normalized.encode("utf-8")).hexdigest()].append(relative(path, root))
    for identifier, paths in identifiers.items():
        if len(paths) > 1:
            issues.append(Issue("DUP001", ",".join(paths), f"Duplicate id: {identifier}."))
    exact_groups = [paths for paths in hashes.values() if len(paths) > 1]
    # Planned scaffolds may share a contract but should not be byte-identical
    # because front matter and navigation are path-specific.
    for paths in exact_groups:
        issues.append(Issue("DUP002", ",".join(paths), "Byte-equivalent Markdown files.", "warning"))
    return CheckResult("duplicates", issues, {"duplicate_ids": 0, "duplicate_content_groups": len(exact_groups)})


def repository_statistics(root: Path = ROOT) -> dict[str, int | float | str]:
    markdown = markdown_files(root)
    texts = [read(path) for path in markdown]
    statuses = Counter()
    for text in texts:
        metadata, _ = front_matter(text)
        statuses[metadata.get("status", "missing")] += 1
    approved = sum(statuses[key] for key in ("approved", "published", "complete", "released", "candidate", "active", "generated", "example"))
    total = len(markdown)
    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "markdown_files": len(markdown),
        "word_count": sum(len(re.findall(r"\b[\w'-]+\b", text)) for text in texts),
        "tables": sum(len(re.findall(r"^\|\s*:?-{3,}", text, re.MULTILINE)) for text in texts),
        "mermaid_diagrams": sum(text.count("```mermaid") for text in texts),
        "decision_trees": sum(
            len(re.findall(r"^## Decision Tree(?:s)?\s*$", text, re.MULTILINE)) for text in texts
        ),
        "markdown_links": sum(len(LINK_RE.findall(text)) for text in texts),
        "readme_files": sum(path.name.lower() == "readme.md" for path in markdown),
        "approved_or_released": approved,
        "planned": statuses["planned"],
        "completion_percentage": round((approved / total * 100) if total else 0.0, 2),
    }


CHECKS: tuple[Callable[[Path], CheckResult], ...] = (
    check_tree,
    check_frontmatter,
    check_markdown,
    check_links,
    check_mermaid,
    check_yaml,
    check_json,
    check_dependencies,
    check_sources,
    check_navigation,
    check_duplicates,
)


def validate_repository(root: Path = ROOT) -> list[CheckResult]:
    return [check(root) for check in CHECKS]


def write_json(path: Path, value: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    content = json.dumps(value, indent=2, sort_keys=True) + "\n"
    # Use open() with newline="" for Python 3.9 compatibility (write_text newline= added in 3.10)
    with path.open("w", encoding="utf-8", newline="") as fh:
        fh.write(content)


def render_summary(results: Iterable[CheckResult]) -> str:
    rows = []
    for result in results:
        errors = sum(issue.severity == "error" for issue in result.issues)
        warnings = sum(issue.severity == "warning" for issue in result.issues)
        rows.append(f"{result.name:14} {'PASS' if result.passed else 'FAIL':4} errors={errors} warnings={warnings}")
    return "\n".join(rows)


def command(check: Callable[[Path], CheckResult], root: Path = ROOT) -> int:
    result = check(root)
    print(render_summary([result]))
    for issue in result.issues:
        print(f"{issue.severity.upper()} {issue.code} {issue.path}: {issue.message}")
    return 0 if result.passed else 1

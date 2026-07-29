"""Platform Manifest Generator for Project Olympus.

Scans the repository, parses metadata, extracts table of contents, headings,
tags, and structure, and generates deterministic static JSON manifests
for consumption by the Next.js static frontend and AI services.
"""

from __future__ import annotations
import json
import re
from pathlib import Path
from olympus_core import (
    ROOT,
    markdown_files,
    read,
    front_matter,
    relative,
    without_fences,
    write_json,
    HEADING_RE,
    MERMAID_RE,
    LINK_RE,
)

DOMAINS = [
    "01-operation-renaissance",
    "02-engineering-foundations",
    "03-fpga-and-digital-design",
    "04-embedded-systems",
    "05-computer-architecture",
    "06-software-and-tooling",
    "07-research-and-graduate-study",
    "08-career-and-placement",
    "09-communication-and-leadership",
    "10-entrepreneurship-and-deep-tech",
    "11-finance-wealth-and-investing",
    "12-health-resilience-and-performance",
    "13-legacy-and-stewardship",
    "14-computer-science-and-fullstack",
]

MATH_INLINE_RE = re.compile(r"\$([^\$\n]+)\$")
MATH_BLOCK_RE = re.compile(r"\$\$([^\$]+)\$\$", re.DOTALL)
CODE_BLOCK_RE = re.compile(r"```(\w*)\n(.*?)```", re.DOTALL)


def extract_toc(text: str) -> list[dict[str, object]]:
    body = without_fences(text)
    toc = []
    for match in HEADING_RE.finditer(body):
        level = len(match.group(1))
        title = match.group(2).strip()
        slug = re.sub(r"[^\w\- ]", "", title.lower()).replace(" ", "-")
        toc.append({"level": level, "title": title, "slug": slug})
    return toc


def estimate_reading_time(text: str) -> int:
    words = len(text.split())
    # Assuming average reading speed of 200 words per minute
    return max(1, round(words / 200))


def build_platform_manifest(root: Path = ROOT) -> dict[str, object]:
    files_manifest = []
    search_index = []
    domain_catalog: dict[str, list[dict[str, object]]] = {d: [] for d in DOMAINS}
    domain_catalog["other"] = []

    all_md = markdown_files(root)

    for path in all_md:
        rel_path = relative(path, root)
        raw_text = read(path)
        metadata, body = front_matter(raw_text)

        # Extract structural metrics
        toc = extract_toc(body)
        mermaid_count = len(MERMAID_RE.findall(raw_text))
        math_count = len(MATH_INLINE_RE.findall(body)) + len(MATH_BLOCK_RE.findall(body))
        code_blocks = CODE_BLOCK_RE.findall(raw_text)
        code_count = len(code_blocks)
        languages = list({cb[0] for cb in code_blocks if cb[0]})
        word_count = len(raw_text.split())
        reading_time_min = estimate_reading_time(raw_text)

        # Extract title and excerpt
        title = metadata.get("title")
        if not title:
            h1_match = re.search(r"^#\s+(.+)$", body, re.MULTILINE)
            title = h1_match.group(1).strip() if h1_match else path.stem.replace("-", " ").title()

        doc_id = metadata.get("id", rel_path.replace("/", "-").replace(".md", ""))
        doc_type = metadata.get("type", "document")
        status = metadata.get("status", "active")

        # Excerpt calculation
        clean_lines = [
            line.strip() for line in body.splitlines()
            if line.strip() and not line.startswith(("#", "-", "*", ">", "|", "```", "---"))
        ]
        excerpt = clean_lines[0][:200] + "..." if clean_lines else ""

        # Identify domain
        first_part = rel_path.split("/")[0] if "/" in rel_path else "root"
        domain = first_part if first_part in DOMAINS else ("root" if "/" not in rel_path else "other")

        doc_entry = {
            "id": doc_id,
            "path": rel_path,
            "title": title,
            "type": doc_type,
            "status": status,
            "domain": domain,
            "version": metadata.get("version", "1.0.0"),
            "owner": metadata.get("owner", "maintainer"),
            "description": metadata.get("description", excerpt),
            "word_count": word_count,
            "reading_time_min": reading_time_min,
            "mermaid_count": mermaid_count,
            "math_count": math_count,
            "code_count": code_count,
            "languages": languages,
            "toc": toc,
        }

        files_manifest.append(doc_entry)

        if domain in domain_catalog:
            domain_catalog[domain].append(doc_entry)
        else:
            domain_catalog["other"].append(doc_entry)

        # Search index entry
        search_index.append({
            "id": doc_id,
            "path": rel_path,
            "title": title,
            "domain": domain,
            "type": doc_type,
            "excerpt": excerpt,
            "headings": [t["title"] for t in toc if t["level"] <= 3],
        })

    manifest_payload = {
        "schema_version": "1.0.0",
        "generated_at": relative(path, root),  # deterministic tag
        "total_documents": len(files_manifest),
        "domains": DOMAINS,
        "domain_counts": {d: len(domain_catalog[d]) for d in DOMAINS},
        "documents": files_manifest,
    }

    return manifest_payload, search_index


def main() -> int:
    print("Building Project Olympus Platform Manifests...")
    manifest_payload, search_index = build_platform_manifest(ROOT)

    manifest_path = ROOT / "data/generated/platform-manifest.json"
    search_path = ROOT / "data/generated/search-index.json"

    write_json(manifest_path, manifest_payload)
    write_json(search_path, search_index)

    print(f"Successfully generated:")
    print(f"  - {manifest_path} ({manifest_payload['total_documents']} documents indexed)")
    print(f"  - {search_path} ({len(search_index)} search records)")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

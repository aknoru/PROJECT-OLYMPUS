"""Generate a Mermaid dependency graph from the canonical registry."""
import re
from olympus_core import ROOT, read

def main() -> int:
    text = read(ROOT / "data/registries/dependency-registry.yml")
    entries = re.split(r"\n\s*- id:\s+", text)[1:]
    lines = ["flowchart LR"]
    count = 0
    for block in entries:
        source = block.splitlines()[0].strip()
        match = re.search(r"\n\s+depends_on:\s*\[([^\]]*)\]", block)
        for target in [x.strip() for x in match.group(1).split(",") if x.strip()] if match else []:
            if target == "MASTER-ARCHITECTURE":
                continue
            lines.append(f'    {target.replace("-", "_")}["{target}"] --> {source.replace("-", "_")}["{source}"]')
            count += 1
    path = ROOT / "data/generated/dependency-graph.mmd"
    with path.open("w", encoding="utf-8", newline="") as fh:
        fh.write("\n".join(lines) + "\n")
    print(f"Wrote {count} dependency edges")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())

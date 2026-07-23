"""Verify architecture-critical repository paths."""
from pathlib import Path
from olympus_core import ROOT

REQUIRED = [
    "MASTER_ARCHITECTURE.md", "README.md", "governance", "docs",
    "01-operation-renaissance", "scripts", "tests", "data/registries",
    "data/schemas", "references", "templates", ".github/workflows",
]

def main(root: Path = ROOT) -> int:
    missing = [item for item in REQUIRED if not (root / item).exists()]
    for item in missing:
        print(f"ERROR TREE001 missing: {item}")
    print(f"tree {'PASS' if not missing else 'FAIL'} required={len(REQUIRED)} missing={len(missing)}")
    return 0 if not missing else 1

if __name__ == "__main__":
    raise SystemExit(main())

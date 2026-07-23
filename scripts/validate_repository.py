"""Run every Project Olympus repository quality gate."""
from pathlib import Path
import argparse
from olympus_core import ROOT, render_summary, validate_repository, write_json

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=ROOT)
    parser.add_argument("--json", type=Path)
    args = parser.parse_args()
    results = validate_repository(args.root.resolve())
    print(render_summary(results))
    if args.json:
        write_json(args.json, {"checks": [result.serializable() for result in results]})
    return 0 if all(result.passed for result in results) else 1

if __name__ == "__main__":
    raise SystemExit(main())

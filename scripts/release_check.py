"""Run the release gate and require a clean repository validation result."""
from olympus_core import render_summary, validate_repository

if __name__ == "__main__":
    results = validate_repository()
    print(render_summary(results))
    raise SystemExit(0 if all(result.passed for result in results) else 1)

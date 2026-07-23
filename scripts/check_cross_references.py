"""Validate source IDs and internal cross references."""
from olympus_core import check_links, check_sources, render_summary
if __name__ == "__main__":
    results = [check_links(), check_sources()]
    print(render_summary(results))
    raise SystemExit(0 if all(result.passed for result in results) else 1)

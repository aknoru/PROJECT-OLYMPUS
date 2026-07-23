"""Backward-compatible internal link validator."""
from olympus_core import check_links, command
if __name__ == "__main__":
    raise SystemExit(command(check_links))

"""Detect duplicate document IDs and equivalent Markdown artifacts."""
from olympus_core import check_duplicates, command
if __name__ == "__main__":
    raise SystemExit(command(check_duplicates))

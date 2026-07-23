"""Validate required front matter and unique document identifiers."""
from olympus_core import check_frontmatter, command
if __name__ == "__main__":
    raise SystemExit(command(check_frontmatter))

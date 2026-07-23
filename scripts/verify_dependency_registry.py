"""Validate dependency registry paths, IDs, and acyclicity."""
from olympus_core import check_dependencies, command
if __name__ == "__main__":
    raise SystemExit(command(check_dependencies))

"""Validate repository YAML structurally and with PyYAML when installed."""
from olympus_core import check_yaml, command
if __name__ == "__main__":
    raise SystemExit(command(check_yaml))

"""Refresh generated repository observability reports."""
from generate_statistics import main as statistics
from repository_health import main as health

if __name__ == "__main__":
    statistics()
    raise SystemExit(health())

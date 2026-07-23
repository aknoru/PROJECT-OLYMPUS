"""Generate the configurable 184-day campaign calendar as CSV."""
from __future__ import annotations
import argparse
import csv
import re
from datetime import date, timedelta
from pathlib import Path
from olympus_core import ROOT, read

PHASES = [(1, 7, "mobilize"), (8, 49, "foundations"), (50, 98, "build"),
          (99, 133, "integrate"), (134, 168, "demonstrate"), (169, 184, "consolidate")]

def value(text: str, key: str) -> str:
    match = re.search(rf"^\s*{re.escape(key)}:\s*[\"']?([^\"'\n]+)", text, re.MULTILINE)
    if not match:
        raise ValueError(f"Missing configuration key: {key}")
    return match.group(1).strip()

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", type=Path, default=ROOT / "config/renaissance.example.yml")
    parser.add_argument("--output", type=Path, default=ROOT / "data/generated/renaissance-calendar.csv")
    args = parser.parse_args()
    text = read(args.config)
    start = date.fromisoformat(value(text, "start_date"))
    end = date.fromisoformat(value(text, "end_date"))
    if (end - start).days + 1 != 184:
        raise SystemExit("Configured campaign must contain exactly 184 inclusive days.")
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=["day", "date", "phase", "classification"])
        writer.writeheader()
        for index in range(184):
            day = index + 1
            phase = next(name for low, high, name in PHASES if low <= day <= high)
            writer.writerow({"day": day, "date": start + timedelta(days=index), "phase": phase,
                             "classification": "synthetic"})
    print(f"Wrote 184 days to {args.output}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())

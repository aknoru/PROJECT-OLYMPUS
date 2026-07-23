"""Generated artifact contract tests."""
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

class GeneratedFileTests(unittest.TestCase):
    def test_validation_report_is_machine_readable_when_present(self):
        path = ROOT / "data/generated/validation-report.json"
        if path.exists():
            payload = json.loads(path.read_text(encoding="utf-8"))
            self.assertIn("checks", payload)

    def test_synthetic_fixture_manifest(self):
        path = ROOT / "data/examples/manifest.json"
        payload = json.loads(path.read_text(encoding="utf-8"))
        self.assertEqual(payload["data_classification"], "synthetic")
        for item in payload["files"]:
            self.assertTrue((path.parent / item).exists(), item)

if __name__ == "__main__":
    unittest.main()

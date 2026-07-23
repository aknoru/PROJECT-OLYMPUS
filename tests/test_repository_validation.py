"""Integrated repository validation tests."""
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from olympus_core import validate_repository  # noqa: E402

class RepositoryValidationTests(unittest.TestCase):
    def test_all_quality_gates(self):
        failed = [result for result in validate_repository(ROOT) if not result.passed]
        self.assertEqual(failed, [], [(r.name, r.issues[:5]) for r in failed])

if __name__ == "__main__":
    unittest.main()

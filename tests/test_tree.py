"""Architecture-critical tree tests."""
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from check_tree import REQUIRED  # noqa: E402

class TreeTests(unittest.TestCase):
    def test_required_paths_exist(self):
        missing = [item for item in REQUIRED if not (ROOT / item).exists()]
        self.assertEqual(missing, [])

if __name__ == "__main__":
    unittest.main()

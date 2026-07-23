"""Internal link and anchor tests."""
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from olympus_core import check_links  # noqa: E402

class LinkTests(unittest.TestCase):
    def test_internal_links(self):
        result = check_links(ROOT)
        self.assertTrue(result.passed, result.issues[:10])

if __name__ == "__main__":
    unittest.main()

"""Front matter validation tests."""
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from olympus_core import check_frontmatter  # noqa: E402

class FrontMatterTests(unittest.TestCase):
    def test_repository_frontmatter(self):
        result = check_frontmatter(ROOT)
        self.assertTrue(result.passed, result.issues[:10])

if __name__ == "__main__":
    unittest.main()

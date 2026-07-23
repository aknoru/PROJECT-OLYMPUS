"""JSON Schema syntax tests."""
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

class SchemaTests(unittest.TestCase):
    def test_all_json_files_parse(self):
        files = list(ROOT.rglob("*.json"))
        self.assertGreater(len(files), 0)
        for path in files:
            with self.subTest(path=path):
                json.loads(path.read_text(encoding="utf-8"))

    def test_schema_drafts_are_declared(self):
        for path in (ROOT / "data/schemas").glob("*.schema.json"):
            with self.subTest(path=path):
                value = json.loads(path.read_text(encoding="utf-8"))
                self.assertEqual(value.get("$schema"), "https://json-schema.org/draft/2020-12/schema")

if __name__ == "__main__":
    unittest.main()

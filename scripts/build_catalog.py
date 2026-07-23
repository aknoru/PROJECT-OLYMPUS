"""Build a machine-readable catalog from Markdown front matter."""
from olympus_core import ROOT, front_matter, markdown_files, read, relative, write_json

def main() -> int:
    items = []
    for path in markdown_files():
        metadata, _ = front_matter(read(path))
        items.append({"path": relative(path), **metadata})
    write_json(ROOT / "data/generated/content-catalog.json", {"schema_version": "1.0.0", "items": items})
    print(f"Cataloged {len(items)} Markdown files")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())

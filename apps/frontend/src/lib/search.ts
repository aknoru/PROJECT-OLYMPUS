import { getSearchIndex } from './manifest';
import { SearchRecord } from './types';

export function searchDocuments(query: string): SearchRecord[] {
  if (!query || query.trim().length < 2) return [];

  const searchIndex = getSearchIndex();
  const q = query.toLowerCase().trim();

  return searchIndex
    .filter((doc) => {
      const inTitle = doc.title.toLowerCase().includes(q);
      const inExcerpt = doc.excerpt.toLowerCase().includes(q);
      const inPath = doc.path.toLowerCase().includes(q);
      const inHeadings = doc.headings.some((h) => h.toLowerCase().includes(q));

      return inTitle || inExcerpt || inPath || inHeadings;
    })
    .slice(0, 20); // Limit to top 20 results
}

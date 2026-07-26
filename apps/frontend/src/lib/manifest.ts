import { PlatformManifest, SearchRecord } from './types';
import manifestData from '../../../data/generated/platform-manifest.json';
import searchIndexData from '../../../data/generated/search-index.json';

export function getPlatformManifest(): PlatformManifest {
  return manifestData as unknown as PlatformManifest;
}

export function getSearchIndex(): SearchRecord[] {
  return searchIndexData as unknown as SearchRecord[];
}

export function getDocumentByPath(path: string) {
  const manifest = getPlatformManifest();
  const normalized = path.replace(/\\/g, '/');
  return manifest.documents.find(
    (d) => d.path === normalized || d.path.endsWith(normalized) || d.id === path
  );
}

export function getDocumentsByDomain(domain: string) {
  const manifest = getPlatformManifest();
  return manifest.documents.filter((d) => d.domain === domain);
}

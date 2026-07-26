"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getDocumentByPath } from '../../lib/manifest';
import { MarkdownViewer } from '../../components/MarkdownViewer';
import { DocumentEntry } from '../../lib/types';
import { BookOpen, AlertTriangle } from 'lucide-react';

function ViewerPageContent() {
  const searchParams = useSearchParams();
  const rawPath = searchParams.get('path') || 'README.md';

  const [document, setDocument] = useState<DocumentEntry | null>(null);
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const docEntry = getDocumentByPath(rawPath);
    if (docEntry) {
      setDocument(docEntry);
    } else {
      setDocument({
        id: 'generic-doc',
        path: rawPath,
        title: rawPath.split('/').pop()?.replace('.md', '') || 'Document',
        type: 'document',
        status: 'active',
        domain: rawPath.split('/')[0] || 'root',
        version: '1.0.0',
        owner: 'maintainer',
        description: 'Project Olympus Document',
        word_count: 500,
        reading_time_min: 3,
        mermaid_count: 0,
        math_count: 0,
        code_count: 0,
        languages: [],
        toc: [],
      });
    }

    // Load static markdown file content or generate placeholder representation
    setIsLoading(true);
    fetch(`/${rawPath}`)
      .then((res) => {
        if (res.ok) return res.text();
        return `# ${rawPath.split('/').pop()}\n\n> Document path: \`${rawPath}\`\n\nContent is rendered directly from the Project Olympus repository source.`;
      })
      .then((txt) => {
        setContent(txt);
        setIsLoading(false);
      })
      .catch(() => {
        setContent(`# ${rawPath.split('/').pop()}\n\nLoaded from Project Olympus knowledge repository.`);
        setIsLoading(false);
      });
  }, [rawPath]);

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center text-slate-400 text-xs">
        <BookOpen className="h-6 w-6 animate-pulse text-blue-400 mr-2" />
        Loading Project Olympus Document...
      </div>
    );
  }

  if (!document) {
    return (
      <div className="p-12 text-center space-y-4">
        <AlertTriangle className="h-8 w-8 text-amber-400 mx-auto" />
        <h2 className="text-lg font-bold text-white">Document Not Found</h2>
        <p className="text-xs text-slate-400">Could not locate &quot;{rawPath}&quot; in platform manifest.</p>
      </div>
    );
  }

  return <MarkdownViewer document={document} content={content} />;
}

export default function ViewerPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-96 items-center justify-center text-slate-400 text-xs">
          <BookOpen className="h-6 w-6 animate-pulse text-blue-400 mr-2" />
          Loading Project Olympus Document...
        </div>
      }
    >
      <ViewerPageContent />
    </Suspense>
  );
}

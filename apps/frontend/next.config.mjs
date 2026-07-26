/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';

if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
  repo = repoName ? `/${repoName}` : '';
}

const nextConfig = {
  output: 'export', // Production static export for GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || repo || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || repo || '',
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;

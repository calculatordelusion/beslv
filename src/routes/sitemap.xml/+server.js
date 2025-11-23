import { puzzleDatabase } from '$lib/puzzleData.js';

const BASE_URL = 'https://spellingbeesolver.net';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
  const staticPaths = [
    '/',
    '/answers',
    '/hints',
    '/pangram',
    '/yesterday/answers',
    '/yesterday/pangram',
    '/archive',
    '/faq',
    '/faq/levels',
    '/faq/queen-bee',
    '/faq/score',
    '/faq/when',
    '/privacy',
    '/contact'
  ];

  const datePaths = [];
  try {
    const dates = Object.keys(puzzleDatabase || {});
    for (const date of dates) {
      datePaths.push(`/${date}/answers`);
      datePaths.push(`/${date}/hints`);
      datePaths.push(`/${date}/pangram`);
    }
  } catch (e) {
    // Fallback: if anything goes wrong, just use static paths
  }

  const urls = [...staticPaths, ...datePaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((path) => `  <url><loc>${BASE_URL}${path}</loc></url>`)
      .join('\n') +
    '\n</urlset>';

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}


// Downloads the site's photography from Squarespace into public/media/ and
// repoints app/media.ts at the local copies, so the site no longer depends on
// the Squarespace CDN staying online.
//
// Run once from the project root (needs Node 18+):
//   node scripts/download-media.mjs
//   — or —
//   npm run download-media
//
// Then commit the changes (the new public/media/ files and the updated
// app/media.ts) and let Vercel redeploy.

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'media');

// name -> { url, ext }. These are the same sources listed in app/media.ts.
const SOURCES = {
  hero: {
    url: 'https://images.squarespace-cdn.com/content/v1/622b8abf63588217b8e5622f/1649986645791-NFLD08JGPQGN2IGRCCRW/pexels-francesco-ungaro-2835436.jpg?format=2500w',
    ext: 'jpg',
  },
  portrait: {
    url: 'https://images.squarespace-cdn.com/content/v1/622b8abf63588217b8e5622f/f082e19b-bfca-4ed0-b8ad-15fa7d34cd26/ZAW_1324-f-b.jpg?format=1500w',
    ext: 'jpg',
  },
  trees: {
    url: 'https://images.squarespace-cdn.com/content/v1/622b8abf63588217b8e5622f/1649985952195-A75YY3I6NFMYEJC3CDLU/trees+-+pexels-lukas-574190.jpg?format=1500w',
    ext: 'jpg',
  },
  thomas: {
    url: 'https://images.squarespace-cdn.com/content/v1/622b8abf63588217b8e5622f/fd8ddf9e-d023-4eb0-9bb1-85ef6354460e/Thomas+S.jpeg?format=600w',
    ext: 'jpeg',
  },
  chelsea: {
    url: 'https://images.squarespace-cdn.com/content/v1/622b8abf63588217b8e5622f/262ad50e-4b8d-4793-8308-5efba7399028/Chelsea+Taele.jpeg?format=600w',
    ext: 'jpeg',
  },
  harris: {
    url: 'https://images.squarespace-cdn.com/content/v1/622b8abf63588217b8e5622f/12b52bd8-e904-4bcc-bef9-1587f689d5f5/Harris.jpeg?format=600w',
    ext: 'jpeg',
  },
};

// media.ts key names mapped to source names.
const KEY_FOR = { heroBg: 'hero', portrait: 'portrait', trees: 'trees', thomas: 'thomas', chelsea: 'chelsea', harris: 'harris' };

await mkdir(outDir, { recursive: true });

const localPath = {};
let failures = 0;

for (const [name, { url, ext }] of Object.entries(SOURCES)) {
  process.stdout.write(`Downloading ${name} ... `);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const file = `${name}.${ext}`;
    await writeFile(join(outDir, file), buf);
    localPath[name] = `/media/${file}`;
    console.log(`ok (${Math.round(buf.length / 1024)} KB)`);
  } catch (err) {
    failures++;
    console.log(`FAILED (${err.message}) — keeping the remote URL for this one`);
  }
}

// Rebuild app/media.ts. Anything that downloaded becomes a local path; anything
// that failed keeps its original remote URL so nothing breaks.
const entries = Object.entries(KEY_FOR).map(([key, name]) => {
  const value = localPath[name] ?? SOURCES[name].url;
  return `  ${key}: '${value}',`;
});

const out = `// Media references. Local paths point at /public/media (populated by
// scripts/download-media.mjs); any remaining https URLs are still hot-linked.
export const MEDIA = {
${entries.join('\n')}
};
`;

await writeFile(join(root, 'app', 'media.ts'), out);

console.log(
  `\nDone${failures ? ` with ${failures} failure(s)` : ''}. Updated app/media.ts. ` +
    'Commit public/media/ and app/media.ts, then redeploy.'
);

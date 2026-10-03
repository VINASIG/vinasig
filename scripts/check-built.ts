import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { FileSystemConfigLoader, HtmlValidate } from 'html-validate';
import { tools, foundations, siteUrl } from '../src/data/projects.ts';
import {
  digest,
  readLocal,
  record,
  parseJson,
  text,
  repositoryRoot,
  writeOutput,
} from './local.ts';

const validator = new HtmlValidate(new FileSystemConfigLoader());
for (const file of ['index.html', '404.html']) {
  const html = (await readLocal(repositoryRoot, `dist/${file}`)).toString(
    'utf8',
  );
  const validation = await validator.validateString(html, `dist/${file}`);
  assert(
    validation.valid,
    JSON.stringify(
      validation.results.flatMap((result) => result.messages),
      null,
      2,
    ),
  );
  assert(html.includes('<html lang="en"'));
  assert(html.includes('name="description"'));
  assert(html.includes('property="og:image"'));
  assert(
    !/<script[^>]*\bsrc=/.test(html),
    'Essential site navigation needs no browser JavaScript',
  );
  for (const match of html.matchAll(
    /(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g,
  )) {
    const url = match[1];
    assert(typeof url === 'string');
    assert(
      !url.startsWith('//') && !url.startsWith('/vinasig/'),
      `Asset/link must use the custom-domain root: ${url}`,
    );
    const relative = url.slice(1);
    const filename = path.join(
      repositoryRoot,
      'dist',
      relative || 'index.html',
    );
    assert((await stat(filename)).isFile(), `Missing built resource ${url}`);
  }
  if (file === '404.html') {
    assert(html.includes('name="robots" content="noindex"'));
    assert(!html.includes('rel="canonical"'));
  } else {
    assert(html.includes(`rel="canonical" href="${siteUrl}"`));
    const schema = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    )?.[1];
    assert(schema);
    const graph = record(parseJson(Buffer.from(schema)))['@graph'];
    assert(Array.isArray(graph) && graph.length === 3);
    for (const project of [...tools, ...foundations]) {
      assert(html.includes(project.name));
      assert(html.includes(project.url));
    }
  }
}
const sitemap = (
  await readLocal(repositoryRoot, 'dist/sitemap.xml')
).toString();
assert(sitemap.includes(`<loc>${siteUrl}</loc>`));
assert(!sitemap.includes('404'));
assert(
  (await readLocal(repositoryRoot, 'dist/robots.txt'))
    .toString()
    .includes(`${siteUrl}sitemap.xml`),
);
const assets = Object.entries(
  record(
    record(
      parseJson(await readLocal(repositoryRoot, 'docs/asset-manifest.json')),
    )['files'],
  ),
);
// Add only the reviewed Reversed export. Every existing digest stays fixed.
assert.equal(assets.length, 10);
for (const [file, checksum] of assets) {
  assert(file.startsWith('public/'));
  const bytes = await readLocal(repositoryRoot, file);
  assert.equal(digest(bytes), text(checksum), `Changed asset ${file}`);
  assert.deepEqual(
    await readLocal(repositoryRoot, `dist/${file.slice(7)}`),
    bytes,
  );
}
const notice = await readFile(
  path.join(repositoryRoot, 'node_modules/@lucide/astro/LICENSE'),
);
assert.deepEqual(
  await readLocal(repositoryRoot, 'public/licenses/lucide.txt'),
  notice,
);
assert.deepEqual(
  await readLocal(repositoryRoot, 'dist/licenses/lucide.txt'),
  notice,
);
await writeOutput(
  repositoryRoot,
  'output/checks/built.json',
  `${JSON.stringify({ status: 'PASS', routes: ['index.html', '404.html'], preservedAssets: assets.length, preservedNotices: ['Space Grotesk OFL', 'Lucide ISC'] }, null, 2)}\n`,
);
console.log(
  'Homepage, custom 404, HTML, metadata, deployment base and preserved assets passed.',
);

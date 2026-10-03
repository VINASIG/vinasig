import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  tools,
  foundations,
  projectSource,
  siteUrl,
  siteDescription,
} from '../src/data/projects.ts';

for (const project of [...tools, ...foundations]) {
  await test(`${project.name} has a safe, canonical VINASIG repository reference`, () => {
    assert.equal(
      'source' in project ? project.source : project.url,
      projectSource(project.slug),
    );
    assert(project.description.length > 30);
    assert(!/[\u2013\u2014]/u.test(project.description));
  });
}
for (const tool of tools) {
  await test(`${tool.name} opens its own HTTPS project site`, () => {
    assert.equal(tool.url, `https://vinasig.github.io/${tool.slug}/`);
    assert(tool.detail.length > 20);
  });
}
await test('The curated inventory has distinct public project identities', () => {
  const slugs = [...tools, ...foundations].map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(tools.length, 4);
  assert.equal(foundations.length, 4);
});
await test('Site identity points to this repository Pages deployment', () => {
  assert.equal(siteUrl, 'https://vinasig.github.io/vinasig/');
  assert(siteDescription.includes('VINASIG'));
  assert(!siteDescription.includes('vinasig.io.vn'));
});
for (const slug of [
  '',
  '../private',
  'a/b',
  'name?query',
  'name#fragment',
  ' x ',
  'Upper',
  '%2e%2e',
  'name_underscore',
]) {
  await test(`Repository path builder rejects invalid slug ${JSON.stringify(slug)}`, () => {
    assert.throws(() => projectSource(slug), /Invalid project slug/);
  });
}

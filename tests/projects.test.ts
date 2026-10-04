import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  tools,
  foundations,
  projectSource,
  siteUrl,
  siteDescription,
  toolDestination,
} from '../src/data/projects.ts';

for (const tool of tools) {
  await test(`${tool.name} keeps the correct language destination`, () => {
    const vietnameseFirst = [
      'bmi-calculator',
      'qr-scanner',
      'totp-generator',
    ].includes(tool.slug);
    assert.equal(
      toolDestination(tool, 'vi'),
      tool.url + (vietnameseFirst ? '' : 'vi/'),
    );
    assert.equal(
      toolDestination(tool, 'en'),
      tool.url + (vietnameseFirst ? 'en/' : ''),
    );
  });
}

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
    const sites: Record<string, string> = {
      'bmi-calculator': 'https://bmi.vinasig.io.vn/',
      'qr-generator': 'https://qr.vinasig.io.vn/',
      'favicon-forge': 'https://favicon.vinasig.io.vn/',
      unphar: 'https://unphar.vinasig.io.vn/',
      'qr-scanner': 'https://scan.vinasig.io.vn/',
      'totp-generator': 'https://totp.vinasig.io.vn/',
    };
    assert.equal(tool.url, sites[tool.slug]);
    assert(tool.detail.length > 20);
  });
}
await test('The curated inventory has distinct public project identities', () => {
  const slugs = [...tools, ...foundations].map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(tools.length, 6);
  assert.equal(foundations.length, 4);
});
await test('Site identity points to the primary VINASIG domain', () => {
  assert.equal(siteUrl, 'https://vinasig.io.vn/');
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

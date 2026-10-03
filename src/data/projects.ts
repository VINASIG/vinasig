export const tools = [
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    description:
      "Check Vietnam's military-service BMI criterion or standard adult categories.",
    detail: 'Direct height and weight inputs. Clear, sourced results.',
    url: 'https://vinasig.github.io/bmi-calculator/',
    source: projectSource('bmi-calculator'),
    icon: 'calculator',
  },
  {
    slug: 'qr-generator',
    name: 'QR Generator',
    description:
      'Create QR codes for links, text and Wi-Fi. Download PNG or SVG.',
    detail: 'Your content goes into the code. No redirect service.',
    url: 'https://vinasig.github.io/qr-generator/',
    source: projectSource('qr-generator'),
    icon: 'qr-code',
  },
  {
    slug: 'favicon-forge',
    name: 'Favicon Forge',
    description:
      'Turn one image into a favicon package, ready to add to your website.',
    detail: 'Preview the sizes and download a complete ZIP.',
    url: 'https://vinasig.github.io/favicon-forge/',
    source: projectSource('favicon-forge'),
    icon: 'image',
  },
  {
    slug: 'unphar',
    name: 'Unphar',
    description: 'Convert PHAR and ZIP archives directly in your browser.',
    detail: 'Inspect the archive and convert without uploading files.',
    url: 'https://vinasig.github.io/unphar/',
    source: projectSource('unphar'),
    icon: 'archive',
  },
] as const;

export const foundations = [
  {
    slug: 'agent-standards',
    name: 'Agent Standards',
    description:
      'Shared workflows, quality checks and conduct for VINASIG SI agents.',
    url: projectSource('agent-standards'),
  },
  {
    slug: 'web-design-system',
    name: 'Web Design System',
    description:
      'Interface guidance, tokens and working examples for consistent websites.',
    url: projectSource('web-design-system'),
  },
  {
    slug: 'vinasig-brand-assets',
    name: 'Brand Assets',
    description:
      'VINASIG artwork, identity colors and Space Grotesk typography.',
    url: projectSource('vinasig-brand-assets'),
  },
  {
    slug: 'vinasig-org-directory',
    name: 'Organization Directory',
    description:
      'Public organization profiles, community links and contact channels.',
    url: projectSource('vinasig-org-directory'),
  },
] as const;

export const siteUrl = 'https://vinasig.github.io/vinasig/';
export const siteDescription =
  'Discover VINASIG browser tools for BMI, QR codes, favicons and archives, alongside the standards and resources behind our projects.';

export function projectSource(slug: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    throw new Error('Invalid project slug');
  return `https://github.com/VINASIG/${slug}`;
}

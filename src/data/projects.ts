export const tools = [
  {
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    description:
      'Check standard adult BMI categories and a healthy weight reference.',
    detail: 'Direct height and weight inputs. Clear, sourced results.',
    url: 'https://bmi.vinasig.io.vn/',
    source: projectSource('bmi-calculator'),
    icon: 'calculator',
    searchTerms: [
      'body mass index',
      'chi so khoi co the',
      'suc khoe',
      'can nang',
      'chieu cao',
    ],
  },
  {
    slug: 'qr-generator',
    name: 'QR Generator',
    description:
      'Create QR codes for links, text and Wi-Fi. Download PNG or SVG.',
    detail: 'Your content goes into the code. No redirect service.',
    url: 'https://qr.vinasig.io.vn/',
    source: projectSource('qr-generator'),
    icon: 'qr-code',
    searchTerms: [
      'create qr',
      'tao ma qr',
      'wifi',
      'contact',
      'email',
      'sms',
      'lien ket',
    ],
  },
  {
    slug: 'qr-scanner',
    name: 'QR Scanner',
    description:
      'Read QR codes from pasted images, files, image links or cameras.',
    detail:
      'See the complete content and available code details. Images stay on your device.',
    url: 'https://scan.vinasig.io.vn/',
    source: projectSource('qr-scanner'),
    icon: 'scan-line',
    searchTerms: [
      'decode qr',
      'quet qr',
      'doc qr',
      'webcam',
      'clipboard',
      'ctrl v',
      'dan anh',
    ],
  },
  {
    slug: 'totp-generator',
    name: 'TOTP Generator',
    description: 'Generate time-based verification codes from your secret key.',
    detail:
      'Codes update automatically. Your key stays in this browser session.',
    url: 'https://totp.vinasig.io.vn/',
    source: projectSource('totp-generator'),
    icon: 'key-round',
    searchTerms: [
      'otp',
      '2fa',
      'authenticator',
      'authentication',
      'ma xac thuc',
      'bao mat',
    ],
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    description:
      'Generate passwords and English or Vietnamese passphrases on your device.',
    detail:
      'Research preview. Automatic countdown and standalone offline files.',
    url: 'https://password.vinasig.io.vn/',
    source: projectSource('password-generator'),
    icon: 'key-round',
    searchTerms: [
      'password',
      'passphrase',
      'random',
      'wordlist',
      'eff',
      'mat khau',
      'tao mat khau',
      'cum tu',
      'tieng viet',
      'bao mat',
      'offline',
    ],
  },
  {
    slug: 'metadata-cleaner',
    name: 'Metadata Cleaner',
    description:
      'Remove optional image metadata without re-encoding JPEG, PNG, WebP or GIF.',
    detail: 'Choose metadata blocks and see the exact bytes removed.',
    url: 'https://clean.vinasig.io.vn/',
    source: projectSource('metadata-cleaner'),
    icon: 'image',
    searchTerms: [
      'remove metadata',
      'exif',
      'gps',
      'privacy',
      'xoa metadata',
      'xoa thong tin anh',
      'vi tri',
      'camera',
      'giam dung luong',
    ],
  },
  {
    slug: 'metadata-reader',
    name: 'Metadata Reader',
    description:
      'Inspect metadata in images, PDF, media and Office files locally.',
    detail: 'Read supported C2PA origin claims, search fields and export JSON.',
    url: 'https://metadata.vinasig.io.vn/',
    source: projectSource('metadata-reader'),
    icon: 'file-search',
    searchTerms: [
      'read metadata',
      'c2pa',
      'content credentials',
      'nguon goc anh',
      'exif',
      'pdf',
      'audio',
      'office',
      'zip',
      'doc metadata',
      'xem thong tin file',
      'kiem tra tep',
    ],
  },
  {
    slug: 'metadata-editor',
    name: 'Metadata Editor',
    description:
      'Edit XMP metadata in JPEG, PNG and WebP locally without re-encoding.',
    detail:
      'Keep, replace or remove fields and inspect the new image before downloading.',
    url: 'https://edit.vinasig.io.vn/',
    source: projectSource('metadata-editor'),
    icon: 'image',
    searchTerms: [
      'edit metadata',
      'xmp',
      'author',
      'copyright',
      'keywords',
      'chinh sua metadata',
      'sua thong tin anh',
      'tac gia',
      'ban quyen',
      'tu khoa',
    ],
  },
  {
    slug: 'favicon-forge',
    name: 'Favicon Forge',
    description:
      'Turn one image into a favicon package, ready to add to your website.',
    detail: 'Preview the sizes and download a complete ZIP.',
    url: 'https://favicon.vinasig.io.vn/',
    source: projectSource('favicon-forge'),
    icon: 'image',
    searchTerms: ['ico', 'icon', 'logo', 'bieu tuong', 'anh', 'website'],
  },
  {
    slug: 'unphar',
    name: 'Unphar',
    description: 'Convert PHAR and ZIP archives directly in your browser.',
    detail: 'Inspect the archive and convert without uploading files.',
    url: 'https://unphar.vinasig.io.vn/',
    source: projectSource('unphar'),
    icon: 'archive',
    searchTerms: ['archive', 'convert', 'tep nen', 'chuyen doi'],
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

export const dataAndLibraries = [
  {
    slug: 'vietnamese-passphrase',
    name: 'Vietnamese Passphrase',
    description:
      'Vietnamese wordlists for passphrases, with source evidence and a local reference generator. Research preview.',
    url: projectSource('vietnamese-passphrase'),
  },
] as const;

export const siteUrl = 'https://vinasig.io.vn/';
export const siteDescription =
  'Discover VINASIG browser tools for passwords, passphrases, metadata, BMI, QR codes, verification codes, favicons and archives, alongside shared project resources.';

export function toolDestination(
  tool: (typeof tools)[number],
  lang: 'en' | 'vi',
): string {
  return (
    tool.url +
    (tool.slug === 'bmi-calculator' ||
    tool.slug === 'qr-scanner' ||
    tool.slug === 'totp-generator' ||
    tool.slug === 'password-generator' ||
    tool.slug === 'metadata-cleaner' ||
    tool.slug === 'metadata-reader' ||
    tool.slug === 'metadata-editor'
      ? lang === 'en'
        ? 'en/'
        : ''
      : lang === 'vi'
        ? 'vi/'
        : '')
  );
}

export function projectSource(slug: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    throw new Error('Invalid project slug');
  return `https://github.com/VINASIG/${slug}`;
}

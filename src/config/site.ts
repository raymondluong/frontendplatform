import type { SiteConfig } from '@/types';

export const twitterHandle = 'fe_platform';
export const mainUrl = 'https://frontendplatform.dev';

export const siteConfig: SiteConfig = {
  name: 'Front End Platform Engineering',
  description:
    'Digital hub for the changing landscape of front end platform engineering.',
  url: mainUrl,
  ogImage: '',
  links: {
    twitter: `https://twitter.com/${twitterHandle}`,
    github: '',
    newsletter: 'https://buttondown.email/frontendplatform',
    archive: 'https://buttondown.email/frontendplatform/archive/',
  },
};

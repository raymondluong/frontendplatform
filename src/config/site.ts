import type { SiteConfig } from '@/types';
import { TWITTER_HANDLE } from './constants';

export const siteConfig: SiteConfig = {
  name: 'Front End Platform Engineering',
  description: 'Digital home for front end platform engineering.',
  url: 'https://astro-nomy.vercel.app',
  ogImage: 'https://astro-nomy.vercel.app/og.jpg',
  links: {
    twitter: `https://twitter.com/${TWITTER_HANDLE}`,
    github: '',
    newsletter: 'https://buttondown.email/frontendplatform',
    archive: 'https://buttondown.email/frontendplatform/archive/',
  },
};

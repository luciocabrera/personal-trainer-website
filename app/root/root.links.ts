import { BRAND } from '@/constants/brand';

import type { Route } from '../+types/root';

export const links: Route.LinksFunction = () => [
  // Canonical URL
  { href: BRAND.url, rel: 'canonical' },

  // StyleX generated styles
  { href: '/stylex.css', rel: 'stylesheet' },

  // Favicon - Multiple formats for maximum compatibility
  { href: '/favicon.ico', rel: 'icon', sizes: '48x48' },
  { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
  {
    href: '/favicon-96x96.png',
    rel: 'icon',
    sizes: '96x96',
    type: 'image/png',
  },
  { href: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },

  // PWA Manifest
  { href: '/manifest.json', rel: 'manifest' },

  // Resource hints for better performance
  { href: 'https://www.google.com', rel: 'preconnect' },
  { href: 'https://www.googletagmanager.com', rel: 'preconnect' },
  { href: 'https://maps.googleapis.com', rel: 'preconnect' },
  { href: 'https://maps.gstatic.com', rel: 'preconnect' },

  // Preload critical resources - LCP Image with high priority
  {
    as: 'image',
    fetchPriority: 'high',
    href: '/images/hero.jpeg',
    rel: 'preload',
  },
];

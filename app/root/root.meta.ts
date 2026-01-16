import { BRAND } from '@/constants/brand';

import type { Route } from '../+types/root';

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: `Outdoor Personal Training Voorburg | ${BRAND.name} - Personal Trainer Near You`,
    },
    { content: 'notranslate', name: 'google' },
    {
      content: `Outdoor Personal Training Voorburg | ${BRAND.name} - Personal Trainer Near You`,
      name: 'title',
    },
    {
      content:
        'Professional outdoor personal training in Voorburg and Den Haag. Small group training, duo training, and individual coaching. Weather-resistant covered location. Strength, conditioning, HIIT training. 💪 Personal trainer near you! | Professionele buitentraining in Voorburg en Den Haag | Entrenamiento personal al aire libre en Voorburg.',
      name: 'description',
    },
    {
      content: `personal trainer near me, personal trainer Voorburg, personal training Voorburg, outdoor fitness Voorburg, outdoor training near Voorburg, buitentraining Voorburg, personal trainer Den Haag, outdoor fitness Den Haag, personal training near me, outdoor training near me, fitness Voorburg, fitness Den Haag, personal trainer, personal training, outdoor training, outdoor fitness, krachttraining, HIIT, ouder kind training, outdoor personal trainer, buitentraining, Duo Training, Small Group Training, training in kleine groepen, kracht en conditie, weerbestendige trainingen, fitness doelen, professionele begeleiding, maatwerk trainingsprogramma's, entrenador personal Voorburg, entrenamiento al aire libre Voorburg, fitness al aire libre, entrenamiento personal cerca de mí, entrenador personal cerca de mí, buitensport, sporttraining buiten, outdoor bootcamp, functionele training, conditietraining, personal coaching, fitness trainer, groepstraining buiten`,
      name: 'keywords',
    },
    { content: 'index, follow', name: 'robots' },
    { content: 'Dutch', name: 'language' },
    { content: BRAND.name, name: 'author' },

    // Open Graph / Facebook
    { content: 'website', property: 'og:type' },
    { content: BRAND.url, property: 'og:url' },
    {
      content: `Outdoor Personal Training Voorburg | ${BRAND.name} - Personal Trainer Near You`,
      property: 'og:title',
    },
    {
      content:
        'Professional outdoor personal training in Voorburg and Den Haag. Small group training, duo training, and individual coaching. Weather-resistant covered location. 💪 Personal trainer near you!',
      property: 'og:description',
    },
    { content: `${BRAND.url}/og-image.jpg`, property: 'og:image' },
    { content: '1200', property: 'og:image:width' },
    { content: '630', property: 'og:image:height' },
    { content: 'image/jpeg', property: 'og:image:type' },
    {
      content: `${BRAND.name} - Outdoor fitness training session`,
      property: 'og:image:alt',
    },
    { content: BRAND.name, property: 'og:site_name' },
    { content: 'nl_NL', property: 'og:locale' },
    { content: 'en_US', property: 'og:locale:alternate' },
    { content: 'es_ES', property: 'og:locale:alternate' },

    // Twitter Card
    { content: 'summary_large_image', name: 'twitter:card' },
    { content: BRAND.url, name: 'twitter:url' },
    {
      content: `Outdoor Personal Training Voorburg | ${BRAND.name} - Personal Trainer Near You`,
      name: 'twitter:title',
    },
    {
      content:
        'Professional outdoor personal training in Voorburg and Den Haag. Small group training, duo training, and individual coaching. 💪 Personal trainer near you!',
      name: 'twitter:description',
    },
    { content: `${BRAND.url}/og-image.jpg`, name: 'twitter:image' },
    {
      content: `${BRAND.name} - Outdoor fitness training session`,
      name: 'twitter:image:alt',
    },

    // Additional Meta Tags
    { content: '#4ecdc4', name: 'theme-color' },
    { content: '#4ecdc4', name: 'msapplication-TileColor' },
    {
      content: '/web-app-manifest-512x512.png',
      name: 'msapplication-TileImage',
    },
    { content: 'yes', name: 'mobile-web-app-capable' },
    { content: 'yes', name: 'apple-mobile-web-app-capable' },
    { content: 'default', name: 'apple-mobile-web-app-status-bar-style' },
    { content: BRAND.name, name: 'apple-mobile-web-app-title' },
  ];
};

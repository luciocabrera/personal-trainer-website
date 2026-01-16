import * as stylex from '@stylexjs/stylex';
import { Links, Meta, Scripts, ScrollRestoration, useLoaderData } from 'react-router';

import type { LayoutProps } from '@/types/ui.types';

import { DevStyleXInject } from '@/components/DevStyleXInject';
import { BRAND } from '@/constants/brand';

import type { loader } from './root.loader';

import stylexCssHref from '../stylex.css?url';
import { styles } from './Root.stylex';

export const Layout = ({ children }: LayoutProps) => {
  const loaderData = useLoaderData<typeof loader>();
  // loaderData can be undefined in error boundary scenarios
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const language = loaderData?.language ?? 'nl';

  return (
    <html lang={language} translate='no' {...stylex.props(styles.html)}>
      <head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />

        {/* Bing Webmaster Verification - Get your code from https://www.bing.com/webmasters */}
        {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}

        <Meta />
        <DevStyleXInject cssHref={stylexCssHref} />
        <Links />

        {/* Google Analytics - Production Only */}
        {import.meta.env.PROD && import.meta.env.VITE_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${import.meta.env.VITE_GA_MEASUREMENT_ID}');
            `,
              }}
            />
          </>
        )}

        {/* Structured Data for Local Business */}
        <script type='application/ld+json'>
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${BRAND.name}",
            "description": "Professional outdoor personal training in Voorburg and Den Haag. Small group training, duo training, and individual coaching. Weather-resistant covered location.",
            "url": "${BRAND.url}",
            "telephone": "+31-123-456-789",
            "email": "${BRAND.email}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Verschillende outdoor locaties",
              "addressLocality": "Voorburg",
              "addressRegion": "Zuid-Holland",
              "postalCode": "2271",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.0705",
              "longitude": "4.3007"
            },
            "openingHours": [
              "Mo 20:00-21:10",
              "Fr 08:00-09:00",
              "Su 09:00-10:00",
              "We 09:00-10:00"
            ],
            "priceRange": "€15-€240",
            "paymentAccepted": "Cash, Bank Transfer",
            "currenciesAccepted": "EUR",
            "areaServed": [
              {
                "@type": "City",
                "name": "Voorburg"
              },
              {
                "@type": "City",
                "name": "Den Haag"
              },
              {
                "@type": "City",
                "name": "Rijswijk"
              }
            ],
            "serviceType": ["Personal Training", "Outdoor Fitness", "Group Training", "HIIT Training", "Strength Training"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Training Programma's",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Personal Training",
                    "description": "Eén-op-één gepersonaliseerde trainingen op maat van jouw specifieke doelen"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Duo Training",
                    "description": "Train samen met een vriend, partner of familielid"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Small Group Training",
                    "description": "Kleine groep van 3-10 personen voor dynamische outdoor workouts"
                  }
                }
              ]
            }
          }`}
        </script>

        <style>{`
          .skip-link { 
            position: absolute; 
            top: -40px; 
            left: 6px; 
            background: #4ecdc4; 
            color: white; 
            padding: 8px; 
            text-decoration: none; 
            border-radius: 0 0 8px 8px;
            z-index: 1000;
          }
          .skip-link:focus { 
            top: 0; 
          }
        `}</style>
      </head>
      <body {...stylex.props(styles.body)}>
        <a className='skip-link' href='#main-content'>
          Skip to main content
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

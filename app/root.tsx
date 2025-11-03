import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import * as stylex from "@stylexjs/stylex";

import { BRAND } from "@/constants/brand";

import { styles } from "./root.stylex";

import "./root.css";

// Initialize i18n
import "@/i18n";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" {...stylex.props(styles.html)}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* Primary Meta Tags */}
        <title>{`${BRAND.name} - ${BRAND.tagline}`}</title>
        <meta content={`${BRAND.name} - ${BRAND.tagline}`} name="title" />
        <meta content={BRAND.description} name="description" />
        <meta
          content="outdoor training near me, personal training, personal trainer near me, personal training near me, outdoor fitness near Voorburg, personal training Voorburg, outdoor training, fitness, krachttraining, HIIT, ouder kind training, outdoor personal trainer, buitentraining, Voorburg, Duo Training, Small Group Training, training in kleine groepen, kracht en conditie, weerbestendige trainingen, fitness doelen, professionele begeleiding, maatwerk trainingsprogramma's"
          name="keywords"
        />
        <meta content="index, follow" name="robots" />
        <meta content="Dutch" name="language" />
        <meta content={BRAND.name} name="author" />
        <link href={BRAND.url} rel="canonical" />

        {/* Bing Webmaster Verification - Get your code from https://www.bing.com/webmasters */}
        {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}

        {/* Open Graph / Facebook */}
        <meta content="website" property="og:type" />
        <meta content={BRAND.url} property="og:url" />
        <meta
          content={`${BRAND.name} - ${BRAND.tagline}`}
          property="og:title"
        />
        <meta content={BRAND.description} property="og:description" />
        <meta content={`${BRAND.url}/og-image.jpg`} property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="image/jpeg" property="og:image:type" />
        <meta
          content={`${BRAND.name} - Outdoor fitness training session`}
          property="og:image:alt"
        />
        <meta content={BRAND.name} property="og:site_name" />
        <meta content="nl_NL" property="og:locale" />
        <meta content="en_US" property="og:locale:alternate" />
        <meta content="es_ES" property="og:locale:alternate" />

        {/* Twitter Card */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={BRAND.url} name="twitter:url" />
        <meta
          content={`${BRAND.name} - ${BRAND.tagline}`}
          name="twitter:title"
        />
        <meta content={BRAND.description} name="twitter:description" />
        <meta content={`${BRAND.url}/og-image.jpg`} name="twitter:image" />
        <meta
          content={`${BRAND.name} - Outdoor fitness training session`}
          name="twitter:image:alt"
        />

        {/* Additional Meta Tags */}
        <meta content="#4ecdc4" name="theme-color" />
        <meta content="#4ecdc4" name="msapplication-TileColor" />
        <meta
          content="/web-app-manifest-512x512.png"
          name="msapplication-TileImage"
        />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content={BRAND.name} name="apple-mobile-web-app-title" />

        {/* Favicon - Multiple formats for maximum compatibility */}
        <link href="/favicon.ico" rel="icon" sizes="48x48" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link
          href="/favicon-96x96.png"
          rel="icon"
          sizes="96x96"
          type="image/png"
        />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />

        {/* PWA Manifest */}
        <link href="/manifest.json" rel="manifest" />

        {/* Resource hints for better performance */}
        <link href="https://www.google.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <link href="https://maps.googleapis.com" rel="preconnect" />
        <link href="https://maps.gstatic.com" rel="preconnect" />

        {/* Preload critical resources - LCP Image with high priority */}
        <link
          as="image"
          fetchPriority="high"
          href="/images/hero.jpeg"
          rel="preload"
        />

        <Meta />
        <Links />

        {/* Google Analytics */}
        {import.meta.env.VITE_GA_MEASUREMENT_ID && (
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
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${BRAND.name}",
            "description": "${BRAND.description}",
            "url": "${BRAND.url}",
            "telephone": "+31-123-456-789",
            "email": "${BRAND.email}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Verschillende outdoor locaties",
              "addressLocality": "Voorburg",
              "addressCountry": "Nederland"
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
            "areaServed": "Voorburg, Nederland",
            "serviceType": "Personal Training",
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
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: Error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404 ?
        "The requested page could not be found."
      : error.statusText || details;
  } else if (error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre
          style={{
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            maxWidth: "100%",
            overflow: "auto",
            padding: "2rem",
          }}
        >
          {stack}
        </pre>
      )}
    </main>
  );
}

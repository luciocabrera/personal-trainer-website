import {
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  Meta,
  Links,
} from "react-router";
import { BRAND } from "@/constants/brand";
import "./root.css";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./root.stylex";
// Initialize i18n
import "@/i18n";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...stylex.props(styles.html)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary Meta Tags */}
        <title>{`${BRAND.name} - ${BRAND.tagline}`}</title>
        <meta name="title" content={`${BRAND.name} - ${BRAND.tagline}`} />
        <meta name="description" content={BRAND.description} />
        <meta
          name="keywords"
          content="personal training, outdoor training, fitness, The Hague, Netherlands, strength training, HIIT, parent child training"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content={BRAND.name} />
        <link rel="canonical" href={BRAND.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BRAND.url} />
        <meta
          property="og:title"
          content={`${BRAND.name} - ${BRAND.tagline}`}
        />
        <meta property="og:description" content={BRAND.description} />
        <meta property="og:image" content={`${BRAND.url}/og-image.jpg`} />
        <meta
          property="og:image:alt"
          content={`${BRAND.name} - Outdoor fitness training session`}
        />
        <meta property="og:site_name" content={BRAND.name} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="nl_NL" />
        <meta property="og:locale:alternate" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={BRAND.url} />
        <meta
          name="twitter:title"
          content={`${BRAND.name} - ${BRAND.tagline}`}
        />
        <meta name="twitter:description" content={BRAND.description} />
        <meta name="twitter:image" content={`${BRAND.url}/og-image.jpg`} />
        <meta
          name="twitter:image:alt"
          content={`${BRAND.name} - Outdoor fitness training session`}
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#4ecdc4" />
        <meta name="msapplication-TileColor" content="#4ecdc4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={BRAND.name} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Resource hints for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.google.com" />

        {/* Preload critical resources - LCP Image with high priority */}
        <link
          rel="preload"
          href="/images/hero.jpeg"
          as="image"
          fetchPriority="high"
        />

        <Meta />
        <Links />

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
              "streetAddress": "Various outdoor locations",
              "addressLocality": "The Hague",
              "addressCountry": "Netherlands"
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
            "areaServed": "The Hague, Netherlands",
            "serviceType": "Personal Training",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Training Programs",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Level 1: Strength, Condition & Flexibility",
                    "description": "HIIT, strength training and mobility exercises"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Level 2: Strength & Run",
                    "description": "Running combined with strength training"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Level 3: Parent+Child Training",
                    "description": "Family fitness with focus on fun and cooperation"
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
        <a href="#main-content" className="skip-link">
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
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
            maxWidth: "100%",
          }}
        >
          {stack}
        </pre>
      )}
    </main>
  );
}

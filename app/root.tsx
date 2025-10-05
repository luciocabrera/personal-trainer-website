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
        <meta name="theme-color" content="#4ecdc4" />
        <meta name="description" content={BRAND.description} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${BRAND.name} - ${BRAND.tagline}`}
        />
        <meta property="og:description" content={BRAND.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={BRAND.url} />

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

        {/* Preload critical resources - LCP Image with high priority */}
        <link
          rel="preload"
          href="/images/strength-training.jpg"
          as="image"
          fetchPriority="high"
        />

        <Meta />
        <Links />
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

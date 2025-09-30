import { createSecureServer } from "node:http2";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import express from "express";
import { createRequestHandler } from "@react-router/express";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Enhanced static file serving with better caching headers
app.use(
  "/assets",
  express.static(join(__dirname, "build/client/assets"), {
    maxAge: "1y", // Cache assets for 1 year
    immutable: true,
    setHeaders: (res, path) => {
      // Add cache-control headers for better performance
      if (path.endsWith(".js") || path.endsWith(".css")) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  })
);

app.use(
  express.static(join(__dirname, "public"), {
    maxAge: "1d", // Cache public files for 1 day
  })
);

// Add security and performance headers
app.use((req, res, next) => {
  // Security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");

  // Performance headers
  res.setHeader("Accept-Encoding", "gzip, deflate, br");

  // HTTP/2 Server Push hints (for browsers that support it)
  if (req.url === "/") {
    res.setHeader(
      "Link",
      [
        "</assets/entry.client-CtO-VVj0.js>; rel=preload; as=script",
        "</assets/chunk-NISHYRIK-ZbW7QuV4.js>; rel=preload; as=script",
        "</assets/main-BeEpN_fr.css>; rel=preload; as=style",
      ].join(", ")
    );
  }

  next();
});

// Handle all other requests with React Router
app.get(
  "*",
  createRequestHandler({
    build: () => import("./build/server/index.js"),
  })
);

const PORT = process.env.PORT || 3000;

// Try to use HTTP/2 with HTTPS, fallback to HTTP/1.1
try {
  const key = readFileSync(join(__dirname, "ssl/server.key"));
  const cert = readFileSync(join(__dirname, "ssl/server.crt"));

  const server = createSecureServer(
    {
      key,
      cert,
      allowHTTP1: true, // Allow HTTP/1.1 fallback for compatibility
    },
    app
  );

  server.listen(PORT, () => {
    console.log(`🚀 HTTP/2 server running at https://localhost:${PORT}`);
    console.log(
      `💡 Note: Accept the self-signed certificate warning in your browser`
    );
  });
} catch (error) {
  console.log("⚠️  SSL certificates not found or invalid, using HTTP/1.1");
  console.log("� For HTTP/2 support, ensure SSL certificates are available");

  app.listen(PORT, () => {
    console.log(`🚀 HTTP/1.1 server running at http://localhost:${PORT}`);
  });
}

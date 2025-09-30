import { createSecureServer } from "node:http2";
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// Import the React Router server build
const serverBuild = await import("./build/server/index.js");

// Create a request handler
const handleRequest = async (req, res) => {
  try {
    // Serve static files
    if (req.url?.startsWith("/assets/")) {
      const filePath = join(__dirname, "build/client", req.url);
      if (existsSync(filePath)) {
        const content = readFileSync(filePath);
        const ext = req.url.split(".").pop();

        // Set appropriate content types and caching headers
        const contentTypes = {
          js: "application/javascript",
          css: "text/css",
          json: "application/json",
        };

        res.setHeader(
          "Content-Type",
          contentTypes[ext] || "application/octet-stream"
        );
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        res.setHeader("Content-Encoding", "gzip");
        res.writeHead(200);
        res.end(content);
        return;
      }
    }

    // Serve public files
    if (
      req.url?.startsWith("/images/") ||
      req.url === "/manifest.json" ||
      req.url === "/robots.txt"
    ) {
      const filePath = join(__dirname, "public", req.url);
      if (existsSync(filePath)) {
        const content = readFileSync(filePath);
        res.setHeader("Cache-Control", "public, max-age=86400");
        res.writeHead(200);
        res.end(content);
        return;
      }
    }

    // Handle with React Router
    const request = new Request(`http://localhost:${PORT}${req.url}`, {
      method: req.method,
      headers: req.headers,
    });

    const response = await serverBuild.default.fetch(request);

    // Copy response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Add performance headers
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-XSS-Protection", "1; mode=block");

    res.writeHead(response.status);

    if (response.body) {
      const reader = response.body.getReader();
      const pump = async () => {
        const { done, value } = await reader.read();
        if (done) {
          res.end();
          return;
        }
        res.write(value);
        return pump();
      };
      await pump();
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Server error:", error);
    res.writeHead(500);
    res.end("Internal Server Error");
  }
};

// Try to use HTTP/2 with HTTPS, fallback to HTTP/1.1
if (
  existsSync(join(__dirname, "ssl/server.key")) &&
  existsSync(join(__dirname, "ssl/server.crt"))
) {
  try {
    const key = readFileSync(join(__dirname, "ssl/server.key"));
    const cert = readFileSync(join(__dirname, "ssl/server.crt"));

    const server = createSecureServer({
      key,
      cert,
      allowHTTP1: true,
    });

    server.on("stream", (stream, headers) => {
      const req = {
        url: headers[":path"],
        method: headers[":method"],
        headers,
      };
      const res = {
        setHeader: (name, value) =>
          (stream.additionalHeaders = {
            ...stream.additionalHeaders,
            [name]: value,
          }),
        writeHead: (status) =>
          stream.respond({ ":status": status, ...stream.additionalHeaders }),
        write: (chunk) => stream.write(chunk),
        end: (chunk) => {
          if (chunk) stream.write(chunk);
          stream.end();
        },
      };

      handleRequest(req, res);
    });

    server.listen(PORT, () => {
      console.log(`🚀 HTTP/2 server running at https://localhost:${PORT}`);
      console.log(
        `💡 Note: Accept the self-signed certificate warning in your browser`
      );
    });
  } catch (error) {
    console.error("Failed to start HTTP/2 server:", error);
    startHTTP1Server();
  }
} else {
  console.log("⚠️  SSL certificates not found, using HTTP/1.1");
  startHTTP1Server();
}

function startHTTP1Server() {
  const server = createServer(handleRequest);

  server.listen(PORT, () => {
    console.log(`🚀 HTTP/1.1 server running at http://localhost:${PORT}`);
    console.log(`💡 For HTTP/2 support, generate SSL certificates with:`);
    console.log(
      `   mkdir -p ssl && openssl req -x509 -newkey rsa:2048 -keyout ssl/server.key -out ssl/server.crt -days 365 -nodes -subj "/CN=localhost"`
    );
  });
}

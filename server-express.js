import { createRequestHandler } from "@react-router/express";
import compression from "compression";
import express from "express";
import morgan from "morgan";

const BUILD_PATH = "./build/server/index.js";
const PORT = Number.parseInt(process.env.PORT || "3000");

const app = express();

app.use(compression());
app.disable("x-powered-by");

console.log("Starting production server");

// Serve static files
app.use(
  "/assets",
  express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
);
app.use(morgan("tiny"));
app.use(express.static("build/client", { maxAge: "1h" }));
app.use(express.static("public", { maxAge: "1d" }));

// React Router handler
app.use(
  createRequestHandler({
    build: () => import(BUILD_PATH),
  }),
);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

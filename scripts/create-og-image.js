#!/usr/bin/env node

/**
 * Create Open Graph image from hero image
 * This script creates a 1200x630px OG image with text overlay
 */

import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, "public");
const heroImagePath = join(publicDir, "images", "hero.jpeg");
const ogImagePath = join(publicDir, "og-image.jpg");

// OG Image dimensions
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

async function createOGImage() {
  try {
    console.log("🎨 Creating Open Graph image...");
    console.log(`📷 Source: ${heroImagePath}`);
    console.log(`💾 Output: ${ogImagePath}`);

    // Read and process the hero image
    await sharp(heroImagePath)
      .resize(OG_WIDTH, OG_HEIGHT, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 85,
        progressive: true,
      })
      .toFile(ogImagePath);

    console.log("✅ Open Graph image created successfully!");
    console.log(`📐 Size: ${OG_WIDTH}x${OG_HEIGHT}px`);
    console.log(`📍 Location: ${ogImagePath}`);
    console.log("\n🧪 Test your OG image:");
    console.log("   Facebook: https://developers.facebook.com/tools/debug/");
    console.log("   Twitter: https://cards-dev.twitter.com/validator");
    console.log("   LinkedIn: https://www.linkedin.com/post-inspector/");
  } catch (error) {
    console.error("❌ Error creating OG image:", error);
    process.exit(1);
  }
}

createOGImage();

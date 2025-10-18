#!/bin/bash

# Create Open Graph image from hero image
# This script creates a 1200x630px OG image

echo "🎨 Creating Open Graph image from hero.jpeg..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Installing..."
    echo "Run: sudo apt-get install imagemagick"
    exit 1
fi

# Input and output paths
INPUT="public/images/hero.jpeg"
OUTPUT="public/og-image.jpg"

# Check if input exists
if [ ! -f "$INPUT" ]; then
    echo "❌ Hero image not found at: $INPUT"
    exit 1
fi

# Create OG image (1200x630px) with cover fit
convert "$INPUT" \
    -resize 1200x630^ \
    -gravity center \
    -extent 1200x630 \
    -quality 85 \
    "$OUTPUT"

if [ -f "$OUTPUT" ]; then
    echo "✅ Open Graph image created successfully!"
    echo "📐 Size: 1200x630px"
    echo "📍 Location: $OUTPUT"
    echo ""
    echo "🧪 Test your OG image:"
    echo "   Facebook: https://developers.facebook.com/tools/debug/"
    echo "   Twitter: https://cards-dev.twitter.com/validator"
    echo "   LinkedIn: https://www.linkedin.com/post-inspector/"
    echo ""
    echo "📦 Next steps:"
    echo "   git add $OUTPUT"
    echo "   git commit -m 'Add Open Graph social share image'"
    echo "   git push origin main"
else
    echo "❌ Failed to create OG image"
    exit 1
fi

#!/bin/bash

# Favicon Generation Script
# Generates all favicon formats from favicon.svg

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🎨 Favicon Generation Script${NC}\n"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo -e "${YELLOW}⚠️  ImageMagick is not installed.${NC}"
    echo -e "${YELLOW}Please use the online tool instead:${NC}"
    echo -e "${BLUE}https://realfavicongenerator.net/${NC}\n"
    echo "Or install ImageMagick:"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "  macOS: brew install imagemagick"
    exit 1
fi

# Source file
SOURCE="public/favicon.svg"

if [ ! -f "$SOURCE" ]; then
    echo -e "${YELLOW}⚠️  Source file not found: $SOURCE${NC}"
    exit 1
fi

echo -e "${BLUE}📦 Generating favicons from: $SOURCE${NC}\n"

# Generate PNG formats
echo "Generating favicon-16x16.png..."
convert "$SOURCE" -resize 16x16 public/favicon-16x16.png

echo "Generating favicon-32x32.png..."
convert "$SOURCE" -resize 32x32 public/favicon-32x32.png

echo "Generating apple-touch-icon.png (180x180)..."
convert "$SOURCE" -resize 180x180 public/apple-touch-icon.png

echo "Generating android-chrome-192x192.png..."
convert "$SOURCE" -resize 192x192 public/android-chrome-192x192.png

echo "Generating android-chrome-512x512.png..."
convert "$SOURCE" -resize 512x512 public/android-chrome-512x512.png

echo "Generating favicon.ico..."
convert "$SOURCE" -define icon:auto-resize=16,32,48 public/favicon.ico

echo -e "\n${GREEN}✅ All favicons generated successfully!${NC}\n"

echo "Generated files:"
ls -lh public/favicon* public/apple-touch-icon.png public/android-chrome-*.png 2>/dev/null || true

echo -e "\n${BLUE}Next steps:${NC}"
echo "1. Check the generated files in public/ folder"
echo "2. Commit and push to git"
echo "3. Deploy your site"
echo "4. Clear browser cache to see new favicons"

echo -e "\n${GREEN}🎉 Done!${NC}\n"

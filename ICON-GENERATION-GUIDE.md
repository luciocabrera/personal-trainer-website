# PWA Icon Generation Guide

## Icons Needed for PWA

The manifest.json references several icon sizes. Here's how to create them:

### Required Icon Sizes:

- 72x72px
- 96x96px
- 128x128px
- 144x144px
- 152x152px
- 192x192px
- 384x384px
- 512x512px

### Creating Icons:

#### Option 1: Online Tools

1. Use https://realfavicongenerator.net/
2. Upload your logo/design
3. Download the generated icons
4. Place them in `/public/icons/` folder

#### Option 2: Using Design Software

1. Create a 512x512px design with your logo
2. Export at different sizes listed above
3. Use PNG format for best compatibility
4. Ensure icons work on both light and dark backgrounds

#### Option 3: Command Line (ImageMagick)

```bash
# If you have a 512x512 source image called logo.png
convert logo.png -resize 72x72 public/icons/icon-72x72.png
convert logo.png -resize 96x96 public/icons/icon-96x96.png
convert logo.png -resize 128x128 public/icons/icon-128x128.png
convert logo.png -resize 144x144 public/icons/icon-144x144.png
convert logo.png -resize 152x152 public/icons/icon-152x152.png
convert logo.png -resize 192x192 public/icons/icon-192x192.png
convert logo.png -resize 384x384 public/icons/icon-384x384.png
convert logo.png -resize 512x512 public/icons/icon-512x512.png
```

### Design Tips:

- Use simple, bold designs that work at small sizes
- Ensure good contrast
- Consider maskable icons (safe area in center)
- Test on various devices and backgrounds

### Current Status:

- favicon.svg is created ✅
- PWA manifest.json is ready ✅
- Need to generate PNG icons for full PWA support

### Temporary Solution:

You can use the favicon.svg as a base and convert it to PNG at different sizes, or use a placeholder until you have proper brand icons.

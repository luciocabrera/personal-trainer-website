# Open Graph Image Guide for Desi4Fit

## 🎨 Creating Your Social Media Share Image

When someone shares your website link on social media (Facebook, Twitter, LinkedIn, WhatsApp), they'll see a nice preview with an image, title, and description.

## 📐 Image Specifications

### Required Dimensions:

- **Optimal Size:** 1200px × 630px
- **Aspect Ratio:** 1.91:1
- **Format:** JPG (recommended) or PNG
- **File Size:** Keep under 300KB for fast loading
- **File Name:** `og-image.jpg` (already configured in your code)

### What to Include in the Image:

1. **Desi4Fit logo/branding**
2. **Eye-catching fitness imagery** (outdoor training, people exercising)
3. **Brand colors:** Use your gradient (#667eea, #764ba2, #ff6b6b, #4ecdc4)
4. **Minimal text:** "Desi4Fit - Outdoor Personal Training" or similar
5. **High quality:** Professional looking, not pixelated

## 🛠️ Tools to Create OG Image:

### Free Online Tools:

1. **Canva** (https://canva.com)
   - Template: "Facebook Post" or "Twitter Post"
   - Resize to 1200x630px
   - Free templates available

2. **Figma** (https://figma.com)
   - Create a frame: 1200x630px
   - Design your image
   - Export as JPG

3. **Photopea** (https://photopea.com)
   - Free Photoshop alternative in browser
   - Create new project: 1200x630px

### AI Tools:

- **Midjourney** or **DALL-E**: Generate with prompt like:
  "Professional outdoor fitness training banner, people exercising outdoors, modern gradient colors purple and teal, 1200x630 aspect ratio, high quality"

## 📍 Where to Place the Image:

Once you have your `og-image.jpg`:

```bash
# Place it in the public folder:
/home/lcabrera/code/vibe/personal-trainer/public/og-image.jpg
```

## ✅ Current Configuration (Already Set Up!)

Your website already has these meta tags configured:

```html
<!-- Open Graph -->
<meta property="og:image" content="https://desi4fit.nl/og-image.jpg" />
<meta
  property="og:image:alt"
  content="Desi4Fit - Outdoor fitness training session"
/>

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://desi4fit.nl/og-image.jpg" />
```

## 🧪 Testing Your OG Image:

After adding the image, test it with these tools:

1. **Facebook Sharing Debugger:**
   https://developers.facebook.com/tools/debug/
   - Enter: https://desi4fit.nl
   - Click "Scrape Again" to refresh cache

2. **Twitter Card Validator:**
   https://cards-dev.twitter.com/validator
   - Enter: https://desi4fit.nl
   - Preview how it looks

3. **LinkedIn Post Inspector:**
   https://www.linkedin.com/post-inspector/
   - Enter: https://desi4fit.nl
   - Inspect the preview

4. **WhatsApp:**
   - Just send the link to yourself
   - WhatsApp will automatically show the preview

## 📝 Design Ideas for Desi4Fit:

### Layout Suggestion:

```
┌─────────────────────────────────────────────┐
│  Background: Gradient or outdoor photo      │
│                                             │
│         🏋️  DESI4FIT  🏋️                   │
│                                             │
│    Outdoor Personal Training                │
│    Kracht • Conditie • Flexibiliteit       │
│                                             │
│    📍 Voorburg  💪 Small Groups             │
└─────────────────────────────────────────────┘
```

### Color Palette to Use:

- Primary Gradient: `#667eea` → `#764ba2`
- Accent Colors: `#ff6b6b`, `#4ecdc4`
- Text: White or dark for contrast

## 🚀 Quick Steps:

1. Create image (1200x630px) using Canva or Figma
2. Export as `og-image.jpg`
3. Place in `public/` folder
4. Push to production
5. Test with Facebook Debugger
6. Share your link and see the magic! ✨

## 📸 Need Help?

If you want, you can:

1. Use a photo from your training sessions
2. Add text overlay with your logo
3. Make it vibrant and eye-catching
4. Ensure faces/action are visible (if using photos)

Remember: This image represents your brand when shared, so make it professional and appealing!

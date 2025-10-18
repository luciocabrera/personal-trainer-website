#!/usr/bin/env python3

"""
Create Open Graph image from hero image
This script creates a 1200x630px OG image
"""

from PIL import Image
import os

# Paths
INPUT = 'public/images/hero.jpeg'
OUTPUT = 'public/og-image.jpg'

# OG dimensions
OG_WIDTH = 1200
OG_HEIGHT = 630

def create_og_image():
    print('🎨 Creating Open Graph image from hero.jpeg...')
    
    if not os.path.exists(INPUT):
        print(f'❌ Hero image not found at: {INPUT}')
        return False
    
    try:
        # Open the image
        img = Image.open(INPUT)
        
        # Calculate dimensions to crop to 1.91:1 aspect ratio
        img_width, img_height = img.size
        target_ratio = OG_WIDTH / OG_HEIGHT  # 1.91:1
        img_ratio = img_width / img_height
        
        if img_ratio > target_ratio:
            # Image is wider, crop width
            new_width = int(img_height * target_ratio)
            left = (img_width - new_width) // 2
            img = img.crop((left, 0, left + new_width, img_height))
        else:
            # Image is taller, crop height
            new_height = int(img_width / target_ratio)
            top = (img_height - new_height) // 2
            img = img.crop((0, top, img_width, top + new_height))
        
        # Resize to OG dimensions
        img = img.resize((OG_WIDTH, OG_HEIGHT), Image.Resampling.LANCZOS)
        
        # Convert to RGB if necessary (remove alpha channel)
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        
        # Save as JPEG
        img.save(OUTPUT, 'JPEG', quality=85, optimize=True, progressive=True)
        
        print('✅ Open Graph image created successfully!')
        print(f'📐 Size: {OG_WIDTH}x{OG_HEIGHT}px')
        print(f'📍 Location: {OUTPUT}')
        print()
        print('🧪 Test your OG image:')
        print('   Facebook: https://developers.facebook.com/tools/debug/')
        print('   Twitter: https://cards-dev.twitter.com/validator')
        print('   LinkedIn: https://www.linkedin.com/post-inspector/')
        print()
        print('📦 Next steps:')
        print(f'   git add {OUTPUT}')
        print('   git commit -m "Add Open Graph social share image"')
        print('   git push origin main')
        
        return True
        
    except Exception as e:
        print(f'❌ Error creating OG image: {e}')
        print()
        print('💡 Install Pillow with: pip3 install Pillow')
        return False

if __name__ == '__main__':
    create_og_image()

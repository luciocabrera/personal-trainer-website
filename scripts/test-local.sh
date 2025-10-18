#!/bin/bash

# 🧪 Local Build & Test Script for desi4fit.nl
# Test your application locally before deployment

echo "🧪 Testing desi4fit.nl Application Locally"
echo "=========================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

echo ""
echo "1️⃣  Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi

echo ""
echo "2️⃣  Running build test..."
if command -v yarn &> /dev/null; then
    yarn build
else
    npm run build
fi

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "3️⃣  Testing Dutch language setup..."
if grep -q '"lng": "nl"' app/i18n.ts; then
    echo "✅ Dutch set as default language"
else
    echo "❌ Dutch not set as default language"
fi

echo ""
echo "4️⃣  Checking image assets..."
if [ -f "public/images/hero.jpeg" ] && [ -f "public/images/single_training.jpeg" ] && [ -f "public/images/duo_training.jpeg" ] && [ -f "public/images/small_group_training.jpeg" ]; then
    echo "✅ All training images present"
else
    echo "❌ Some training images missing"
fi

echo ""
echo "5️⃣  Checking OG image..."
if [ -L "public/og-image.jpg" ] && [ -f "public/og-image.jpg" ]; then
    echo "✅ OG image properly linked"
else
    echo "❌ OG image not properly configured"
fi

echo ""
echo "6️⃣  Testing Docker build..."
if command -v docker &> /dev/null; then
    echo "Building Docker image..."
    docker-compose build
    if [ $? -eq 0 ]; then
        echo "✅ Docker build successful!"
        
        echo ""
        echo "7️⃣  Starting services for local test..."
        docker-compose up -d
        
        echo "Waiting for application to start..."
        sleep 10
        
        # Test local access
        if curl -s http://localhost:80 > /dev/null; then
            echo "✅ Application accessible on port 80"
        else
            echo "⚠️  Application not accessible on port 80"
        fi
        
        echo ""
        echo "🔗 Test your application:"
        echo "   http://localhost:80 (should redirect to HTTPS)"
        echo "   https://localhost:443 (with self-signed cert warning)"
        echo ""
        echo "📊 View running containers:"
        docker-compose ps
        echo ""
        echo "📋 View logs:"
        echo "   docker-compose logs -f"
        echo ""
        echo "🛑 Stop services:"
        echo "   docker-compose down"
        
    else
        echo "❌ Docker build failed!"
    fi
else
    echo "⚠️  Docker not available for testing"
fi

echo ""
echo "8️⃣  Configuration summary:"
echo "   Domain: desi4fit.nl"
echo "   Language: Dutch (nl) as default"
echo "   SSL: Ready for Let's Encrypt"
echo "   Images: Updated outdoor training images"
echo "   Email: desi4fit@gmail.com"

echo ""
echo "✅ Local testing complete!"
echo ""
echo "📋 Next steps for production deployment:"
echo "   1. Register desi4fit.nl domain"
echo "   2. Setup DigitalOcean droplet in Amsterdam"
echo "   3. Configure DNS records"
echo "   4. Run: ./check-domain.sh"
echo "   5. Run: sudo ./deploy.sh"
echo ""
echo "📚 Full guide available in: DOMAIN_SETUP_GUIDE.md"
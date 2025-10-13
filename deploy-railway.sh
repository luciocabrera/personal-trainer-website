#!/bin/bash

# 🚂 Railway Deployment Script for desi4fit.nl
# Quick deployment to Railway with custom domain setup

set -e

DOMAIN="desi4fit.nl"
PROJECT_NAME="desi4fit-personal-trainer"

echo "🚂 Railway Deployment for desi4fit.nl"
echo "====================================="

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "📦 Installing Railway CLI..."
    npm install -g @railway/cli
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Railway CLI"
        echo "💡 Try: curl -fsSL https://railway.app/install.sh | sh"
        exit 1
    fi
fi

echo ""
echo "🔐 Logging into Railway..."
echo "💡 This will open a browser window for authentication"
railway login

echo ""
echo "🏗️  Building application locally first..."
if command -v yarn &> /dev/null; then
    yarn build
else
    npm run build
fi

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix build errors before deploying."
    exit 1
fi

echo ""
echo "✅ Build successful! Ready for Railway deployment."

echo ""
echo "🚀 Initializing Railway project..."
echo "💡 When prompted:"
echo "   - Choose: 'Create a new project'"
echo "   - Project name: '$PROJECT_NAME'"
echo "   - IMPORTANT: Select 'Frankfurt' region for EU users"
echo ""
read -p "Press Enter when ready to continue..."

railway init

echo ""
echo "📦 Deploying to Railway..."
railway up

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    
    # Get the Railway URL
    echo ""
    echo "🌐 Getting your Railway URL..."
    RAILWAY_URL=$(railway status --json | jq -r '.deployments[0].url' 2>/dev/null || echo "Check Railway dashboard")
    
    if [ "$RAILWAY_URL" != "null" ] && [ "$RAILWAY_URL" != "" ]; then
        echo "📋 Your app is deployed at: $RAILWAY_URL"
        echo ""
        echo "🧪 Testing deployment..."
        if curl -s -o /dev/null -w "%{http_code}" "$RAILWAY_URL" | grep -q "200"; then
            echo "✅ App is responding correctly!"
        else
            echo "⚠️  App might still be starting up. Check Railway dashboard."
        fi
    else
        echo "📋 Check your Railway dashboard for the deployment URL"
    fi
    
    echo ""
    echo "🌐 Next: Custom Domain Setup"
    echo "============================"
    echo ""
    echo "1️⃣  Register domain: $DOMAIN"
    echo "2️⃣  In Railway Dashboard:"
    echo "   - Go to your project settings"
    echo "   - Click 'Domains' → 'Add Domain'"
    echo "   - Add: $DOMAIN"
    echo "   - Add: www.$DOMAIN"
    echo ""
    echo "3️⃣  Configure DNS at your registrar:"
    echo "   - Add CNAME record: www → [your-railway-url]"
    echo "   - Add CNAME record: @ → [your-railway-url]"
    echo "   - Or use A record if CNAME @ not supported"
    echo ""
    echo "4️⃣  Wait for SSL certificate (15-30 minutes)"
    echo ""
    echo "🔗 Useful commands:"
    echo "   railway logs        # View live logs"
    echo "   railway open        # Open in browser"
    echo "   railway status      # Check deployment status"
    echo "   railway dashboard   # Open Railway dashboard"
    echo ""
    echo "🎉 Your desi4fit.nl app is deployed! Next step: custom domain setup."
    
else
    echo "❌ Deployment failed!"
    echo ""
    echo "🚨 Troubleshooting steps:"
    echo "1. Check Railway logs: railway logs"
    echo "2. Ensure package.json has correct start script"
    echo "3. Verify Node.js version compatibility"
    echo "4. Check Railway dashboard for detailed error info"
    exit 1
fi

echo ""
echo "📚 Full Railway guide available in: RAILWAY_DEPLOYMENT_GUIDE.md"
#!/bin/bash

# 🚂 Railway Domain Setup Checker for desi4fit.nl
# Verify your domain is ready for Railway custom domain setup

DOMAIN="desi4fit.nl"

echo "🚂 Railway Domain Setup Checker"
echo "==============================="
echo "Domain: $DOMAIN"
echo ""

# Check if Railway CLI is available
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Install with:"
    echo "   npm install -g @railway/cli"
    exit 1
fi

# Check Railway project status
echo "1️⃣  Checking Railway project status..."
if railway status > /dev/null 2>&1; then
    echo "✅ Railway project linked and active"
    
    # Get Railway URL
    RAILWAY_URL=$(railway status --json 2>/dev/null | grep -o 'https://[^"]*\.up\.railway\.app' | head -1)
    if [ -n "$RAILWAY_URL" ]; then
        echo "📋 Railway URL: $RAILWAY_URL"
        
        # Test Railway app
        if curl -s -o /dev/null -w "%{http_code}" "$RAILWAY_URL" | grep -q "200"; then
            echo "✅ Railway app is responding"
        else
            echo "⚠️  Railway app not responding - check deployment"
        fi
    fi
else
    echo "❌ Railway project not found or not linked"
    echo "💡 Run: railway link [project-id] or railway init"
    exit 1
fi

echo ""

# Check domain registration
echo "2️⃣  Checking domain registration..."
if whois $DOMAIN 2>/dev/null | grep -i "No entries found" > /dev/null; then
    echo "❌ Domain $DOMAIN is not registered yet"
    echo "💡 Register at: TransIP, Namecheap, or Cloudflare"
else
    echo "✅ Domain $DOMAIN is registered"
fi

echo ""

# Check DNS configuration
echo "3️⃣  Checking DNS configuration..."
if nslookup $DOMAIN > /dev/null 2>&1; then
    RESOLVED_IP=$(nslookup $DOMAIN | grep -A1 "Name:" | tail -1 | awk '{print $2}' 2>/dev/null)
    echo "✅ DNS resolves to: $RESOLVED_IP"
    
    # Check if it points to Railway (this won't work until domain is added to Railway)
    if [[ "$RESOLVED_IP" =~ railway ]]; then
        echo "✅ DNS points to Railway infrastructure"
    else
        echo "ℹ️  DNS doesn't point to Railway yet (normal before setup)"
    fi
else
    echo "❌ DNS not resolving yet"
fi

# Check www subdomain
if nslookup www.$DOMAIN > /dev/null 2>&1; then
    WWW_IP=$(nslookup www.$DOMAIN | grep -A1 "Name:" | tail -1 | awk '{print $2}' 2>/dev/null)
    echo "✅ www subdomain resolves to: $WWW_IP"
else
    echo "⚠️  www subdomain not configured"
fi

echo ""

# Check DNS propagation from different servers
echo "4️⃣  Checking DNS propagation..."
echo "Google DNS (8.8.8.8):"
dig +short $DOMAIN @8.8.8.8 2>/dev/null || echo "  No response"

echo "Cloudflare DNS (1.1.1.1):"
dig +short $DOMAIN @1.1.1.1 2>/dev/null || echo "  No response"

echo ""

# Railway-specific instructions
echo "🚂 Railway Custom Domain Setup Steps"
echo "===================================="
echo ""
echo "1️⃣  In Railway Dashboard:"
echo "   - Go to: https://railway.com/project/[your-project-id]"
echo "   - Click: Settings → Domains"
echo "   - Add custom domain: $DOMAIN"
echo "   - Add www subdomain: www.$DOMAIN"
echo ""
echo "2️⃣  Railway will provide DNS instructions like:"
echo "   CNAME  www  →  your-app.up.railway.app"
echo "   CNAME  @    →  your-app.up.railway.app"
echo ""
echo "3️⃣  In your domain registrar DNS settings:"
echo "   - Add the CNAME records Railway provides"
echo "   - Or use A record if CNAME @ not supported"
echo ""
echo "4️⃣  Wait for SSL certificate (15-30 minutes)"
echo "   - Railway automatically provisions SSL"
echo "   - No manual SSL setup needed!"
echo ""

# Current status summary
echo "📊 Current Status Summary"
echo "========================"
if railway status > /dev/null 2>&1; then
    echo "✅ Railway app: Deployed and running"
else
    echo "❌ Railway app: Not deployed or linked"
fi

if whois $DOMAIN 2>/dev/null | grep -v -i "No entries found" > /dev/null; then
    echo "✅ Domain: Registered"
else
    echo "❌ Domain: Not registered"
fi

if nslookup $DOMAIN > /dev/null 2>&1; then
    echo "✅ DNS: Configured"
else
    echo "❌ DNS: Not configured"  
fi

echo ""
echo "🔗 Helpful Links:"
echo "   - Railway Dashboard: https://railway.com/dashboard"
echo "   - DNS Checker: https://dnschecker.org"
echo "   - SSL Test: https://www.ssllabs.com/ssltest/"
echo ""
echo "💡 Questions? Check: RAILWAY_DEPLOYMENT_GUIDE.md"
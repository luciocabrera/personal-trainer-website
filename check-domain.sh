#!/bin/bash

# 🔍 Domain Setup Verification Script for desi4fit.nl
# Run this script to check if your domain is ready for deployment

DOMAIN="desi4fit.nl"
SERVER_IP=$(curl -s ifconfig.me)

echo "🔍 desi4fit.nl Domain Setup Verification"
echo "========================================"
echo ""

# Check 1: DNS Resolution
echo "1️⃣  Checking DNS resolution..."
if nslookup $DOMAIN > /dev/null 2>&1; then
    RESOLVED_IP=$(nslookup $DOMAIN | grep -A1 "Name:" | tail -1 | awk '{print $2}')
    echo "✅ DNS resolves to: $RESOLVED_IP"
    
    if [[ "$RESOLVED_IP" == "$SERVER_IP" ]]; then
        echo "✅ DNS points to this server!"
    else
        echo "⚠️  DNS points to different IP. Current server: $SERVER_IP"
    fi
else
    echo "❌ DNS not resolving yet"
fi

echo ""

# Check 2: WWW subdomain
echo "2️⃣  Checking www subdomain..."
if nslookup www.$DOMAIN > /dev/null 2>&1; then
    WWW_IP=$(nslookup www.$DOMAIN | grep -A1 "Name:" | tail -1 | awk '{print $2}')
    echo "✅ www subdomain resolves to: $WWW_IP"
else
    echo "⚠️  www subdomain not configured"
fi

echo ""

# Check 3: Port accessibility
echo "3️⃣  Checking port accessibility..."
if nc -z -w5 $DOMAIN 80 2>/dev/null; then
    echo "✅ Port 80 accessible"
else
    echo "❌ Port 80 not accessible"
fi

if nc -z -w5 $DOMAIN 443 2>/dev/null; then
    echo "✅ Port 443 accessible"
else
    echo "⚠️  Port 443 not accessible (normal if SSL not setup yet)"
fi

echo ""

# Check 4: Domain availability check
echo "4️⃣  Checking domain registration status..."
if whois $DOMAIN | grep -i "No entries found" > /dev/null; then
    echo "⚠️  Domain might not be registered yet"
else
    echo "✅ Domain is registered"
fi

echo ""

# DNS Propagation check from multiple servers
echo "5️⃣  Checking DNS propagation..."
echo "Google DNS (8.8.8.8):"
dig +short $DOMAIN @8.8.8.8 | head -1

echo "Cloudflare DNS (1.1.1.1):"
dig +short $DOMAIN @1.1.1.1 | head -1

echo "Quad9 DNS (9.9.9.9):"
dig +short $DOMAIN @9.9.9.9 | head -1

echo ""

# Summary and recommendations
echo "📋 Setup Summary"
echo "================"
echo "Domain: $DOMAIN"
echo "Server IP: $SERVER_IP"
echo ""

# Readiness check
if nslookup $DOMAIN | grep -q "$SERVER_IP"; then
    echo "🎉 Your domain is ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Run: sudo ./deploy.sh"
    echo "2. Or follow the manual steps in DOMAIN_SETUP_GUIDE.md"
else
    echo "⏳ Domain setup needed:"
    echo ""
    echo "📝 In your domain registrar, add these DNS records:"
    echo "   Type: A     Name: @     Value: $SERVER_IP"
    echo "   Type: A     Name: www   Value: $SERVER_IP"
    echo ""
    echo "⏰ DNS propagation can take up to 48 hours"
    echo "🔄 Run this script again after DNS changes"
fi

echo ""
echo "🔗 Useful links:"
echo "   - Check DNS propagation: https://dnschecker.org"
echo "   - DNS lookup tool: https://whatsmydns.net"
echo "   - SSL test: https://www.ssllabs.com/ssltest/"
#!/bin/bash

# SSL Certificate Renewal Script for desi4fit.nl
# Run this on your production server to renew expired SSL certificates

set -e

echo "🔐 SSL Certificate Renewal for desi4fit.nl"
echo "=========================================="
echo ""

# Check if running on production server
if [ ! -d "/root/personal-trainer-website" ]; then
    echo "⚠️  This script should be run on the production server"
    echo "📋 To renew SSL, SSH into your server and run:"
    echo ""
    echo "   ssh root@142.93.139.242"
    echo "   cd /root/personal-trainer-website"
    echo "   bash scripts/renew-ssl.sh"
    echo ""
    exit 1
fi

cd /root/personal-trainer-website

echo "1️⃣  Checking current certificate status..."
docker compose -f docker/docker-compose.prod.yml run --rm certbot certificates || true
echo ""

echo "2️⃣  Stopping services..."
docker compose -f docker/docker-compose.prod.yml down
echo ""

echo "3️⃣  Starting nginx for certificate renewal..."
docker compose -f docker/docker-compose.prod.yml up -d nginx
sleep 5
echo ""

echo "4️⃣  Renewing SSL certificate..."
docker compose -f docker/docker-compose.prod.yml run --rm certbot renew --force-renewal
echo ""

echo "5️⃣  Reloading nginx with new certificate..."
docker compose -f docker/docker-compose.prod.yml exec nginx nginx -s reload
echo ""

echo "6️⃣  Starting all services..."
docker compose -f docker/docker-compose.prod.yml up -d
echo ""

echo "7️⃣  Verifying new certificate..."
sleep 3
docker compose -f docker/docker-compose.prod.yml run --rm certbot certificates
echo ""

echo "✅ SSL Certificate Renewal Complete!"
echo ""
echo "🌐 Your website should now be accessible at:"
echo "   https://desi4fit.nl"
echo "   https://www.desi4fit.nl"
echo ""
echo "🔍 To verify the certificate:"
echo "   curl -I https://desi4fit.nl"
echo ""
echo "📊 To view logs:"
echo "   docker compose -f docker/docker-compose.prod.yml logs -f"

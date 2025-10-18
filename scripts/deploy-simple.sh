#!/bin/bash
# Quick deployment script that adds swap to server and builds there

SERVER="root@142.93.139.242"

echo "🚀 Deploying to production server..."
echo ""

ssh ${SERVER} << 'ENDSSH'
set -e

echo "📊 Checking swap space..."
if ! swapon --show | grep -q "/swapfile"; then
    echo "📝 Creating 2GB swap file..."
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
    echo "✅ Swap enabled!"
else
    echo "✅ Swap already exists"
fi

echo ""
echo "📦 Memory status:"
free -h
echo ""

cd /root/personal-trainer-website

echo "📥 Pulling latest code..."
git pull origin main

echo "🔨 Building app (with swap, should not freeze)..."
docker compose -f docker/docker-compose.prod.yml build app

echo "🔄 Restarting containers..."
docker compose -f docker/docker-compose.prod.yml up -d

echo "⏳ Waiting for app to start..."
sleep 10

echo "🧪 Testing deployment..."
curl -f https://desi4fit.nl/ > /dev/null 2>&1 && echo "✅ Website is up!" || echo "⚠️  Website check failed"
curl -f https://desi4fit.nl/sitemap.xml > /dev/null 2>&1 && echo "✅ Sitemap is accessible!" || echo "⚠️  Sitemap not found"

echo ""
echo "✅ Deployment complete!"
ENDSSH

echo ""
echo "🌐 Your site: https://desi4fit.nl"
echo "📄 Sitemap: https://desi4fit.nl/sitemap.xml"

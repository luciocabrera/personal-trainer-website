#!/bin/bash

# Simple SSL Renewal - Just the essential commands
# Run this on your production server (root@142.93.139.242)

set -e

cd /root/personal-trainer-website || exit 1

echo "🔐 Renewing SSL certificate for desi4fit.nl..."

# Renew certificate
docker compose -f docker/docker-compose.prod.yml run --rm certbot renew --force-renewal

# Reload nginx
docker compose -f docker/docker-compose.prod.yml exec nginx nginx -s reload

echo "✅ Done! Certificate renewed."

#!/bin/bash

# Step-by-step Let's Encrypt SSL Setup
# Run this script on the production server

set -e

echo "===== Let's Encrypt SSL Setup for desi4fit.nl ====="
echo ""

# Step 1: Ensure nginx is running to serve HTTP challenge
echo "Step 1: Ensuring nginx is running..."
docker compose -f docker/docker-compose.prod.yml up -d nginx
sleep 2
echo "✓ Nginx running"
echo ""

# Step 2: Create certbot directories
echo "Step 2: Creating certbot directories..."
mkdir -p certbot/conf certbot/www
echo "✓ Directories created"
echo ""

# Step 3: Download recommended TLS parameters
echo "Step 3: Downloading recommended TLS parameters..."
if [ ! -e "certbot/conf/options-ssl-nginx.conf" ] || [ ! -e "certbot/conf/ssl-dhparams.pem" ]; then
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "certbot/conf/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "certbot/conf/ssl-dhparams.pem"
  echo "✓ TLS parameters downloaded"
else
  echo "✓ TLS parameters already exist"
fi
echo ""

# Step 4: Request Let's Encrypt certificate
echo "Step 4: Requesting Let's Encrypt certificate..."
docker compose -f docker/docker-compose.prod.yml run --rm certbot certonly --webroot \
  -w /var/www/certbot \
  -d desi4fit.nl \
  -d www.desi4fit.nl \
  --email luciocabrera1978@gmail.com \
  --rsa-key-size 4096 \
  --agree-tos \
  --non-interactive \
  --force-renewal

if [ $? -eq 0 ]; then
  echo "✓ SSL certificate obtained successfully!"
else
  echo "✗ Failed to obtain SSL certificate"
  echo "Restarting nginx..."
  docker compose -f docker/docker-compose.prod.yml restart nginx
  exit 1
fi
echo ""

# Step 5: Restore full nginx configuration with HTTPS
echo "Step 5: Restoring full nginx configuration with HTTPS..."
docker compose -f docker/docker-compose.prod.yml restart nginx
sleep 5
echo "✓ Nginx now running with HTTPS"
echo ""

# Step 6: Test the certificate
echo "Step 6: Testing the SSL certificate..."
docker compose -f docker/docker-compose.prod.yml run --rm certbot certificates

echo ""
echo "===== Setup Complete! ====="
echo "Your website should now be accessible at https://desi4fit.nl"
echo "Certificates will auto-renew every 90 days"
echo ""
echo "To manually renew: docker compose -f docker/docker-compose.prod.yml run --rm certbot renew"
echo "To check certificate expiry: docker compose -f docker/docker-compose.prod.yml run --rm certbot certificates"

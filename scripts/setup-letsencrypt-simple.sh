#!/bin/bash

# Step-by-step Let's Encrypt SSL Setup
# Run this script on the production server

set -e

echo "===== Let's Encrypt SSL Setup for desi4fit.nl ====="
echo ""

# Step 1: Use HTTP-only nginx configuration
echo "Step 1: Switching to HTTP-only nginx configuration..."
cp nginx.conf nginx.conf.backup
cp nginx-http-only.conf nginx.conf
docker compose restart nginx
sleep 5
echo "✓ Nginx now running in HTTP-only mode"
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
docker compose run --rm certbot certonly --webroot \
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
  echo "Restoring original nginx configuration..."
  cp nginx.conf.backup nginx.conf
  docker compose restart nginx
  exit 1
fi
echo ""

# Step 5: Restore full nginx configuration with HTTPS
echo "Step 5: Restoring full nginx configuration with HTTPS..."
cp nginx.conf.backup nginx.conf
docker compose restart nginx
sleep 5
echo "✓ Nginx now running with HTTPS"
echo ""

# Step 6: Test the certificate
echo "Step 6: Testing the SSL certificate..."
docker compose run --rm certbot certificates

echo ""
echo "===== Setup Complete! ====="
echo "Your website should now be accessible at https://desi4fit.nl"
echo "Certificates will auto-renew every 90 days"
echo ""
echo "To manually renew: docker compose run --rm certbot renew"
echo "To check certificate expiry: docker compose run --rm certbot certificates"

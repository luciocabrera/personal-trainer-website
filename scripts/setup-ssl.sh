#!/bin/bash

# SSL Setup Script for Personal Trainer Website
# This script helps you set up SSL certificates for your Docker Compose setup

set -e

DOMAIN=${1:-"localhost"}
EMAIL=${2:-"admin@example.com"}

echo "🔐 Setting up SSL for domain: $DOMAIN"

# Create directories
mkdir -p ssl logs/nginx logs/letsencrypt nginx/html

echo "📝 Choose your SSL setup method:"
echo "1. Self-signed certificate (for development/testing)"
echo "2. Let's Encrypt certificate (for production)"
echo "3. Use existing certificates"

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🔨 Creating self-signed certificate..."
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
            -keyout ssl/key.pem \
            -out ssl/cert.pem \
            -subj "/C=US/ST=State/L=City/O=Organization/CN=$DOMAIN"
        echo "✅ Self-signed certificate created!"
        ;;
    
    2)
        echo "🌐 Setting up Let's Encrypt certificate..."
        echo "⚠️  Make sure your domain $DOMAIN points to this server!"
        read -p "Press Enter when ready, or Ctrl+C to cancel..."
        
        # Update nginx.conf with your domain
        sed -i "s/server_name localhost;/server_name $DOMAIN;/g" nginx.conf
        
        # Start services for HTTP challenge
        docker-compose up -d nginx
        
        # Get certificate
        docker-compose run --rm certbot certonly \
            --webroot \
            --webroot-path=/var/www/html \
            --email $EMAIL \
            --agree-tos \
            --no-eff-email \
            -d $DOMAIN
        
        # Copy certificates to ssl directory
        docker-compose exec nginx cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /etc/nginx/ssl/cert.pem
        docker-compose exec nginx cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /etc/nginx/ssl/key.pem
        
        echo "✅ Let's Encrypt certificate created!"
        ;;
    
    3)
        echo "📁 Place your certificate files in the ssl/ directory:"
        echo "   - ssl/cert.pem (certificate file)"
        echo "   - ssl/key.pem (private key file)"
        echo "Press Enter when ready..."
        read
        ;;
    
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

# Update nginx.conf with your domain if not localhost
if [ "$DOMAIN" != "localhost" ]; then
    sed -i "s/server_name localhost;/server_name $DOMAIN;/g" nginx.conf
    echo "📝 Updated nginx.conf with domain: $DOMAIN"
fi

echo ""
echo "🚀 SSL setup complete! You can now start your services:"
echo "   docker-compose up -d"
echo ""
echo "📋 Your services will be available at:"
echo "   - HTTP:  http://$DOMAIN (redirects to HTTPS)"
echo "   - HTTPS: https://$DOMAIN"
echo ""
echo "🔧 To renew Let's Encrypt certificates (if using Let's Encrypt):"
echo "   docker-compose run --rm certbot renew"
echo ""
echo "📊 To view logs:"
echo "   docker-compose logs -f nginx"
echo "   docker-compose logs -f app"
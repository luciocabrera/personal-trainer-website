#!/bin/bash

# 🚀 Quick Deployment Script for desi4fit.nl
# This script automates the deployment process

set -e

DOMAIN="desi4fit.nl"
EMAIL="info@desi4fit.nl"

echo "🌐 Deploying desi4fit.nl Personal Training Website"
echo "=================================================="

# Check if we're running as root
if [[ $EUID -ne 0 ]]; then
   echo "❌ This script must be run as root (use sudo)"
   exit 1
fi

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install required packages
echo "🔧 Installing Docker and dependencies..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com | sh
fi

if ! command -v docker-compose &> /dev/null; then
    apt install docker-compose-plugin -y
fi

# Install git if needed
if ! command -v git &> /dev/null; then
    apt install git -y
fi

# Create application directory
APP_DIR="/opt/desi4fit"
echo "📁 Setting up application directory: $APP_DIR"
mkdir -p $APP_DIR
cd $APP_DIR

# Clone or update repository
if [ -d ".git" ]; then
    echo "🔄 Updating existing repository..."
    git pull origin main
else
    echo "📥 Cloning repository..."
    git clone https://github.com/luciocabrera/personal-trainer-website.git .
fi

# Create required directories
echo "📂 Creating required directories..."
mkdir -p ssl logs/nginx logs/letsencrypt nginx/html

# Check if domain DNS is properly configured
echo "🔍 Checking DNS configuration for $DOMAIN..."
if ! nslookup $DOMAIN | grep -q "$(curl -s ifconfig.me)"; then
    echo "⚠️  WARNING: DNS might not be properly configured yet."
    echo "   Make sure $DOMAIN points to this server IP: $(curl -s ifconfig.me)"
    echo "   DNS propagation can take up to 48 hours."
    echo ""
    read -p "Continue anyway? (y/N): " continue_anyway
    if [[ ! $continue_anyway =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled. Please configure DNS first."
        exit 1
    fi
fi

# Setup firewall
echo "🔥 Configuring firewall..."
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
echo "y" | ufw enable

# Build the application
echo "🏗️  Building application..."
docker-compose build

# Start services temporarily for SSL setup
echo "🔒 Setting up SSL certificates..."
docker-compose up -d nginx

# Wait for nginx to start
sleep 5

# Get Let's Encrypt certificate
echo "📜 Obtaining SSL certificate from Let's Encrypt..."
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/html \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    --non-interactive \
    -d $DOMAIN \
    -d www.$DOMAIN

# Copy certificates to the expected location
echo "📋 Configuring SSL certificates..."
docker-compose exec -T nginx cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem /etc/nginx/ssl/cert.pem
docker-compose exec -T nginx cp /etc/letsencrypt/live/$DOMAIN/privkey.pem /etc/nginx/ssl/key.pem

# Restart all services with SSL
echo "🔄 Restarting services with SSL..."
docker-compose down
docker-compose up -d

# Setup automatic renewal
echo "⏰ Setting up automatic SSL renewal..."
(crontab -l 2>/dev/null; echo "0 0 1 * * cd $APP_DIR && docker-compose run --rm certbot renew --quiet && docker-compose restart nginx") | crontab -

# Create monitoring script
echo "📊 Setting up monitoring..."
cat > monitor.sh << 'EOF'
#!/bin/bash
echo "=== desi4fit.nl Status Check $(date) ==="
echo "Memory Usage:" && free -h
echo "Disk Usage:" && df -h /
echo "Docker Status:" && docker-compose ps
echo "Website Response:" && curl -s -o /dev/null -w "Time: %{time_total}s | HTTP: %{http_code}\n" https://desi4fit.nl
echo "SSL Certificate Expiry:" && openssl x509 -in ssl/cert.pem -text -noout | grep "Not After"
EOF
chmod +x monitor.sh

# Final checks
echo "🧪 Running final checks..."
sleep 10

# Test HTTP redirect
echo "Testing HTTP redirect..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN)
if [[ $HTTP_STATUS == "301" ]]; then
    echo "✅ HTTP to HTTPS redirect working"
else
    echo "⚠️  HTTP redirect status: $HTTP_STATUS"
fi

# Test HTTPS
echo "Testing HTTPS..."
HTTPS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN)
if [[ $HTTPS_STATUS == "200" ]]; then
    echo "✅ HTTPS working correctly"
else
    echo "❌ HTTPS status: $HTTPS_STATUS"
fi

echo ""
echo "🎉 Deployment Complete!"
echo "======================="
echo ""
echo "🌐 Your website is now available at:"
echo "   https://$DOMAIN"
echo "   https://www.$DOMAIN"
echo ""
echo "📊 To monitor your application:"
echo "   cd $APP_DIR && ./monitor.sh"
echo ""
echo "📋 To view logs:"
echo "   cd $APP_DIR && docker-compose logs -f"
echo ""
echo "🔧 To restart services:"
echo "   cd $APP_DIR && docker-compose restart"
echo ""
echo "📱 Don't forget to:"
echo "   - Setup Google Analytics"
echo "   - Submit to Google Search Console"
echo "   - Test all functionality"
echo "   - Setup monitoring/alerts"
echo ""
echo "🎯 Your Dutch personal training website is live! 🇳🇱"
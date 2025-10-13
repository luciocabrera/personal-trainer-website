#!/bin/bash

# 🌊 DigitalOcean Deployment Script for Personal Trainer Website
# This script automates the deployment process

set -e

echo "🚀 Personal Trainer Website - DigitalOcean Deployment"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running on Ubuntu/Debian
if [ ! -f /etc/os-release ]; then
    print_error "This script is designed for Ubuntu/Debian systems"
    exit 1
fi

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_warning "Running as root. Consider creating a non-root user for security."
fi

print_status "Starting deployment process..."

# Step 1: Update system
print_status "Updating system packages..."
apt update && apt upgrade -y

# Step 2: Install Docker if not present
if ! command -v docker &> /dev/null; then
    print_status "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    print_success "Docker installed successfully"
else
    print_success "Docker is already installed"
fi

# Step 3: Install Docker Compose if not present
if ! command -v docker-compose &> /dev/null; then
    print_status "Installing Docker Compose..."
    apt install docker-compose-plugin -y
    print_success "Docker Compose installed successfully"
else
    print_success "Docker Compose is already installed"
fi

# Step 4: Install other dependencies
print_status "Installing additional dependencies..."
apt install -y curl wget git ufw certbot python3-certbot-nginx

# Step 5: Configure firewall
print_status "Configuring firewall..."
ufw --force enable
ufw allow 22    # SSH
ufw allow 80    # HTTP
ufw allow 443   # HTTPS
print_success "Firewall configured"

# Step 6: Clone repository if not present
if [ ! -d "personal-trainer-website" ]; then
    print_status "Cloning repository..."
    git clone https://github.com/luciocabrera/personal-trainer-website.git
    cd personal-trainer-website
else
    print_status "Repository exists, updating..."
    cd personal-trainer-website
    git pull origin main
fi

# Step 7: Setup environment
if [ ! -f ".env" ]; then
    print_warning "Environment file not found. Creating from production template..."
    cp .env.production .env
    print_warning "Please edit .env file with your production values before continuing!"
    echo "Run: nano .env"
    echo "Then run: ./deploy.sh continue"
    exit 0
fi

# Step 8: Create necessary directories
print_status "Creating necessary directories..."
mkdir -p logs/nginx ssl backups

# Step 9: Build and start services
print_status "Building and starting services..."
docker-compose -f docker-compose.prod.yml down || true
docker-compose -f docker-compose.prod.yml up -d --build

# Step 10: Wait for services to be healthy
print_status "Waiting for services to start..."
sleep 30

# Step 11: Check service status
print_status "Checking service status..."
docker-compose -f docker-compose.prod.yml ps

# Step 12: Test application
print_status "Testing application..."
if curl -f http://localhost > /dev/null 2>&1; then
    print_success "Application is responding on HTTP"
else
    print_error "Application is not responding. Check logs with: docker-compose -f docker-compose.prod.yml logs"
fi

# Step 13: SSL Certificate setup reminder
print_warning "Next steps:"
echo "1. Point your domain (desi4fit.nl) to this server's IP address"
echo "2. Run SSL certificate setup: sudo certbot --nginx -d desi4fit.nl -d www.desi4fit.nl"
echo "3. Test your website: https://desi4fit.nl"

print_success "Deployment completed!"
print_status "Useful commands:"
echo "  View logs: docker-compose -f docker-compose.prod.yml logs -f"
echo "  Restart:   docker-compose -f docker-compose.prod.yml restart"
echo "  Stop:      docker-compose -f docker-compose.prod.yml down"
echo "  Update:    git pull && docker-compose -f docker-compose.prod.yml up -d --build"
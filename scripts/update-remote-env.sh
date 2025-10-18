#!/bin/bash

# Script to update .env file on DigitalOcean droplet
# Usage: ./update-remote-env.sh [your-droplet-ip]

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

if [ -z "$1" ]; then
    echo "Usage: $0 <droplet-ip-address>"
    echo "Example: $0 64.227.123.45"
    exit 1
fi

DROPLET_IP=$1

print_status "Updating .env file on DigitalOcean droplet: $DROPLET_IP"

# Copy the production env file to the remote server
print_status "Copying .env.production to remote server..."
scp .env.production root@$DROPLET_IP:~/personal-trainer-website/.env

print_status "Restarting services on remote server..."
ssh root@$DROPLET_IP << 'REMOTE_COMMANDS'
cd ~/personal-trainer-website
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d --build
echo "Services restarted successfully"
REMOTE_COMMANDS

print_success "Environment variables updated and services restarted!"
print_status "You can check the status with:"
echo "ssh root@$DROPLET_IP 'cd ~/personal-trainer-website && docker-compose -f docker-compose.prod.yml ps'"


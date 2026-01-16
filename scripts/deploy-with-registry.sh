#!/bin/bash

# GitHub Container Registry Setup and Deployment Script
# This script builds locally and deploys to production without building on the server

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}GitHub Container Registry Deployment${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Configuration
GITHUB_USER="luciocabrera"
REPO_NAME="personal-trainer"
IMAGE_NAME="ghcr.io/${GITHUB_USER}/${REPO_NAME}"
VERSION=$(node -p "require('./package.json').version")
SERVER="root@142.93.139.242"
SERVER_PATH="/root/personal-trainer-website"

echo -e "${BLUE}Version: ${VERSION}${NC}"
echo ""

# Check if logged into GitHub Container Registry
echo -e "${YELLOW}Step 1: Checking GitHub Container Registry login...${NC}"
if ! grep -q "ghcr.io" ~/.docker/config.json 2>/dev/null; then
    echo -e "${RED}Not logged in to GitHub Container Registry${NC}"
    echo ""
    echo "Please login first:"
    echo "  docker login ghcr.io -u ${GITHUB_USER}"
    echo ""
    echo "Use your GitHub Personal Access Token as password"
    echo "Create one at: https://github.com/settings/tokens/new"
    echo "Required scopes: write:packages, read:packages, delete:packages"
    echo ""
    exit 1
fi
echo -e "${GREEN}✓ Already logged in to GitHub Container Registry${NC}"
echo ""

# Build the Docker image locally
echo -e "${YELLOW}Step 2: Building Docker image locally...${NC}"
echo "Building: ${IMAGE_NAME}:${VERSION} and ${IMAGE_NAME}:latest"
docker build -t ${IMAGE_NAME}:${VERSION} -t ${IMAGE_NAME}:latest -f docker/Dockerfile .
echo -e "${GREEN}✓ Image built successfully${NC}"
echo ""

# Push to GitHub Container Registry
echo -e "${YELLOW}Step 3: Pushing images to GitHub Container Registry...${NC}"
docker push ${IMAGE_NAME}:${VERSION}
docker push ${IMAGE_NAME}:latest
echo -e "${GREEN}✓ Images pushed successfully (${VERSION} and latest)${NC}"
echo ""

# Deploy to production server
echo -e "${YELLOW}Step 4: Deploying to production server...${NC}"

ssh ${SERVER} << ENDSSH
set -e

echo "Logging into GitHub Container Registry on server..."
docker login ghcr.io -u ${GITHUB_USER} --password-stdin < ~/.github-token 2>/dev/null || {
    echo "ERROR: Not logged in on server. Run this on the server first:"
    echo "  echo 'YOUR_GITHUB_TOKEN' > ~/.github-token"
    echo "  chmod 600 ~/.github-token"
    echo "  cat ~/.github-token | docker login ghcr.io -u ${GITHUB_USER} --password-stdin"
    exit 1
}

cd ${SERVER_PATH}
echo "Pulling latest code..."
git pull origin main

echo "Pulling Docker image from registry..."
docker pull ${IMAGE_NAME}:latest

echo "Stopping old containers..."
docker compose -f docker/docker-compose.prod.yml down app nginx

echo "Starting new containers..."
docker compose -f docker/docker-compose.prod.yml up -d

echo "Checking container status..."
docker compose -f docker/docker-compose.prod.yml ps

echo "Waiting for app to be ready..."
sleep 10

echo "Testing application..."
curl -f https://desi4fit.nl/ > /dev/null 2>&1 && echo "✓ Website is up!" || echo "⚠ Website check failed"
curl -f https://desi4fit.nl/sitemap.xml > /dev/null 2>&1 && echo "✓ Sitemap is accessible!" || echo "⚠ Sitemap check failed"

ENDSSH

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}✓ Deployment completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your website should now be updated:"
echo "  🌐 https://desi4fit.nl"
echo "  📄 https://desi4fit.nl/sitemap.xml"
echo ""

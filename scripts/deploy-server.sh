#!/bin/bash

# Server Deployment Script for Personal Trainer App
# This script pulls the latest Docker image and deploys it on the server
#
# USAGE:
#   sudo bash deploy-server.sh [DEPLOY_DIR]
#
# EXAMPLES:
#   sudo bash deploy-server.sh                      # Uses default: /opt/personal-trainer
#   sudo bash deploy-server.sh /home/user/app       # Uses custom directory
#   DEPLOY_DIR=/var/www/app sudo bash deploy-server.sh  # Uses environment variable
#
# REQUIREMENTS:
#   - Docker installed
#   - GitHub Personal Access Token with read:packages permission
#   - .env file in DEPLOY_DIR (optional but recommended)
#   - docker-compose.prod.yml in DEPLOY_DIR (optional)

set -e  # Exit on any error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
GITHUB_USERNAME="luciocabrera"
REPO_NAME="personal-trainer-website"
IMAGE_NAME="ghcr.io/${GITHUB_USERNAME}/${REPO_NAME}"
CONTAINER_NAME="personal-trainer-app"
NETWORK_NAME="app-network"

# Deployment directory - customize this to match your server setup
DEPLOY_DIR="${DEPLOY_DIR:-/opt/personal-trainer}"
ENV_FILE="${DEPLOY_DIR}/.env"
DOCKER_COMPOSE_FILE="${DEPLOY_DIR}/docker-compose.prod.yml"

# Allow override via command line arguments
if [ ! -z "$1" ]; then
    DEPLOY_DIR="$1"
    ENV_FILE="${DEPLOY_DIR}/.env"
    DOCKER_COMPOSE_FILE="${DEPLOY_DIR}/docker-compose.prod.yml"
fi

# Function to print colored messages
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_header() {
    echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then 
    print_error "Please run this script as root or with sudo"
    exit 1
fi

print_header "🚀 Personal Trainer App - Server Deployment"

# Step 1: Check if Docker is installed
print_info "Checking Docker installation..."
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi
print_success "Docker is installed"

# Step 2: Login to GitHub Container Registry
print_header "🔐 Logging in to GitHub Container Registry"
print_info "Please ensure you have a GitHub Personal Access Token ready"
print_info "Token needs: read:packages permission"

if [ -z "$GITHUB_TOKEN" ]; then
    read -sp "Enter your GitHub Personal Access Token: " GITHUB_TOKEN
    echo ""
fi

echo "$GITHUB_TOKEN" | docker login ghcr.io -u "$GITHUB_USERNAME" --password-stdin

if [ $? -eq 0 ]; then
    print_success "Successfully logged in to GitHub Container Registry"
else
    print_error "Failed to login to GitHub Container Registry"
    exit 1
fi

# Step 3: Pull the latest image
print_header "📦 Pulling Latest Docker Image"
print_info "Pulling image: ${IMAGE_NAME}:latest"

docker pull "${IMAGE_NAME}:latest"

if [ $? -eq 0 ]; then
    print_success "Successfully pulled latest image"
else
    print_error "Failed to pull latest image"
    exit 1
fi

# Step 4: Stop and remove old container
print_header "🛑 Stopping Old Container"

if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
    print_info "Stopping running container: ${CONTAINER_NAME}"
    docker stop "${CONTAINER_NAME}"
    print_success "Container stopped"
fi

if [ "$(docker ps -aq -f name=${CONTAINER_NAME})" ]; then
    print_info "Removing old container: ${CONTAINER_NAME}"
    docker rm "${CONTAINER_NAME}"
    print_success "Container removed"
fi

# Step 5: Create network if it doesn't exist
print_header "🌐 Setting Up Docker Network"
if [ ! "$(docker network ls -q -f name=${NETWORK_NAME})" ]; then
    print_info "Creating network: ${NETWORK_NAME}"
    docker network create "${NETWORK_NAME}"
    print_success "Network created"
else
    print_info "Network ${NETWORK_NAME} already exists"
fi

# Step 6: Start new container
print_header "🚀 Starting New Container"

if [ -f "$ENV_FILE" ]; then
    print_info "Using environment file: ${ENV_FILE}"
    
    docker run -d \
        --name "${CONTAINER_NAME}" \
        --network "${NETWORK_NAME}" \
        --restart unless-stopped \
        --env-file "${ENV_FILE}" \
        -p 3000:3000 \
        "${IMAGE_NAME}:latest"
else
    print_warning "No .env file found at ${ENV_FILE}"
    print_info "Starting container without environment file"
    
    docker run -d \
        --name "${CONTAINER_NAME}" \
        --network "${NETWORK_NAME}" \
        --restart unless-stopped \
        -p 3000:3000 \
        "${IMAGE_NAME}:latest"
fi

if [ $? -eq 0 ]; then
    print_success "Container started successfully"
else
    print_error "Failed to start container"
    exit 1
fi

# Step 7: Wait for container to be healthy
print_header "🏥 Health Check"
print_info "Waiting for container to be ready..."
sleep 5

if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
    print_success "Container is running"
    
    # Show container logs
    print_info "Recent container logs:"
    docker logs --tail 20 "${CONTAINER_NAME}"
else
    print_error "Container is not running"
    print_info "Showing container logs for debugging:"
    docker logs "${CONTAINER_NAME}"
    exit 1
fi

# Step 8: Clean up old images
print_header "🧹 Cleanup"
print_info "Removing dangling images..."
docker image prune -f
print_success "Cleanup completed"

# Final status
print_header "✨ Deployment Complete!"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}  🎉 Personal Trainer App is now running!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"

print_info "Deployment Directory: ${DEPLOY_DIR}"
print_info "Container Name: ${CONTAINER_NAME}"
print_info "Image: ${IMAGE_NAME}:latest"
print_info "Port: 3000"
print_info "Network: ${NETWORK_NAME}"

if [ -f "$ENV_FILE" ]; then
    print_info "Environment File: ${ENV_FILE} ✓"
else
    print_warning "Environment File: Not found at ${ENV_FILE}"
fi

echo -e "\n${BLUE}Useful commands:${NC}"
echo -e "  View logs:      ${YELLOW}docker logs -f ${CONTAINER_NAME}${NC}"
echo -e "  Restart:        ${YELLOW}docker restart ${CONTAINER_NAME}${NC}"
echo -e "  Stop:           ${YELLOW}docker stop ${CONTAINER_NAME}${NC}"
echo -e "  Container info: ${YELLOW}docker inspect ${CONTAINER_NAME}${NC}"

echo -e "\n${GREEN}🚀 Your app should now be accessible at http://your-server:3000${NC}\n"

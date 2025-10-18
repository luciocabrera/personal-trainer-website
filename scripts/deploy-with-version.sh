#!/bin/bash
set -e

# Get semantic version from package.json
VERSION=$(node -p "require('./package.json').version")
IMAGE="ghcr.io/luciocabrera/personal-trainer"

# Build and tag image

echo "Building Docker image with version: $VERSION"
docker build -f docker/Dockerfile -t $IMAGE:$VERSION .

echo "Tagging image as latest"
docker tag $IMAGE:$VERSION $IMAGE:latest

echo "Pushing versioned image: $IMAGE:$VERSION"
docker push $IMAGE:$VERSION

echo "Pushing latest image: $IMAGE:latest"
docker push $IMAGE:latest

echo "Done! Both $VERSION and latest are pushed to registry."

echo "To deploy, your docker-compose.prod.yml should use:"
echo "  image: $IMAGE:latest"

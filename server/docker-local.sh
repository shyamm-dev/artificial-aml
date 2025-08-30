#!/bin/bash
# Build and run the Express TypeScript server Docker container for local testing

# Define a name for the container for easier management
CONTAINER_NAME="artificial-aml-server-local"

# Stop and forcefully remove the container if it already exists to prevent port conflicts
# This command will stop and remove the container. The '|| true' part ensures the script doesn't fail if the container doesn't exist.
docker rm -f $CONTAINER_NAME >/dev/null 2>&1 || true

# Build the Docker image using BuildKit (buildx)
echo "Building Docker image..."
DOCKER_BUILDKIT=1 docker build -t artificial-aml-server-local .
# ^ Builds the Docker image using Docker BuildKit for better performance and features, tags as 'artificial-aml-server'.

# Run the Docker container with environment variables from .env
echo "Running Docker container..."
docker run --pull never --name $CONTAINER_NAME --env-file .env -p 3000:3000 artificial-aml-server-local
# ^ Runs the container in the foreground, loads environment variables from .env, and maps port 3000.
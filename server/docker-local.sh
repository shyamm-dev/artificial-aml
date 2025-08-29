#!/bin/bash
# Build and run the Express TypeScript server Docker container for local testing


# Build the Docker image using BuildKit (buildx)
DOCKER_BUILDKIT=1 docker build -t artificial-aml-server .
# ^ Builds the Docker image using Docker BuildKit for better performance and features, tags as 'artificial-aml-server'.

# Run the Docker container with environment variables from .env
docker run --env-file .env -p 3000:3000 artificial-aml-server
# ^ Runs the container, loads environment variables from .env, and maps port 3000 on your machine to port 3000 in the container.
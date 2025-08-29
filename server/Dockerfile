# ---- Builder Stage ----
# Use official Node.js LTS image as a builder
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies to build the project
RUN npm install

# Copy the rest of the source files
COPY . .

# Build the TypeScript project
RUN npm run build

# ---- Production Stage ----
# Use a clean and slim Node.js image for the final image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/index.js"]

# Use official Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source files
COPY . .

# Build TypeScript
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the server
CMD ["node", "dist/index.js"]

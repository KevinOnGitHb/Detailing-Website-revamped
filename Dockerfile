# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Build the Next.js app
RUN pnpm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]

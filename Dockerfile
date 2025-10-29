# Use lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy everything
COPY . .

# Install dependencies
RUN npm install

# Build Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start app
CMD ["npm", "start"]

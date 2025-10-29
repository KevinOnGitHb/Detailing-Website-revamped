FROM node:18-alpine

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy dependency files first for caching
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN pnpm install

# Copy rest of the project
COPY . .

# Build the app (showing detailed errors)
RUN pnpm run build || { echo "❌ BUILD FAILED"; cat /app/.next/trace; exit 1; }

EXPOSE 3000

CMD ["pnpm", "start"]

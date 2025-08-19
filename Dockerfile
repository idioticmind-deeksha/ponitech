# ---- Build Stage ----
# FROM node:18-alpine AS builder

# WORKDIR /app

# # Copy only the dependency files first
# COPY package*.json ./

# # Install only production dependencies first
# RUN npm ci

# # Then copy the rest of the code
# COPY . .

# # Build the Next.js app
# RUN npm run build

# # ---- Production Stage ----
# FROM node:18-alpine AS runner

# # Set NODE_ENV to production
# ENV NODE_ENV=production

# WORKDIR /app

# # Copy only the build output and necessary files
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# # Expose your port
# EXPOSE 3002

# # Start the app
# CMD ["npm", "start"]

# ---- Build Stage ----
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only the dependency files first
COPY package*.json ./

# Install only production dependencies first
RUN npm ci

# Then copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# ---- Production Stage ----
# FROM node:18-alpine AS runner

# # Set NODE_ENV to production
# # ENV NODE_ENV=production

# WORKDIR /app

# # Copy only the build output and necessary files
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# # Expose your port
# EXPOSE 8080

# # Start the app
# CMD ["npm", "start"]
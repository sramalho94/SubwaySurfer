# Stage 1: Build the React frontend
FROM node:16 AS build-react

WORKDIR /app

# Copy package.json and package-lock.json for the frontend
COPY client/package*.json ./

# Install frontend dependencies
RUN npm ci

# Copy the rest of the frontend code
COPY client/ ./

# Build the frontend
RUN npm run build

# Stage 2: Build the Node.js backend
FROM node:16 AS build-backend

WORKDIR /app

# Copy package.json and package-lock.json for the backend
COPY package*.json ./

# Install backend dependencies
RUN npm ci

# Copy the backend code
COPY . .

# Copy the build output from the frontend
COPY --from=build-react /app/build ./client/build

# Expose the backend port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]

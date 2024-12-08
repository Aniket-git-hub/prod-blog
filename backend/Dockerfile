# Use the Node.js 22 LTS official image
FROM node:22-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
# RUN npm run build

# Expose the application port
EXPOSE 5000

# Set the command to run the application
CMD ["npm", "run", "dev"]

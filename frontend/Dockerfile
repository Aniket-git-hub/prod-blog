# Use Node.js 22 LTS image
FROM node:22-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]

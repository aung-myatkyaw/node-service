# Use official Node.js image as the base image
FROM node:21

# Set working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to WORKDIR
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files to WORKDIR
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]

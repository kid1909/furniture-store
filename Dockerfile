# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the React application
RUN npm run build

# Expose the port your React application listens on
EXPOSE 3000

# Start the React application when the container starts
CMD ["npm", "start"]

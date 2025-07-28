# Use an official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port used by Vite
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]

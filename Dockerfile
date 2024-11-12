# Use an official Node.js image as the base
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

# Run the command to start the development server
CMD ["npm", "run", "dev"]
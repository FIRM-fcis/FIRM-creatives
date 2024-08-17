FROM node:20.11.0

# Create app directory
WORKDIR /FIRM-Backend-Node

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
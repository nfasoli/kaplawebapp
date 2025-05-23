FROM node:lts-alpine
WORKDIR /app
RUN ls
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

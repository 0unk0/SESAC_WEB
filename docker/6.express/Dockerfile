FROM node:18-slim

WORKDIR /app

COPY . .

RUN npm install --production

ENTRYPOINT [ "node", "app.js" ]
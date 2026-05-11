FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm i -g serve
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]

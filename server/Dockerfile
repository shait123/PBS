FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev --legacy-peer-deps
COPY src ./src
EXPOSE 8080
ENV PORT=8080
CMD ["node", "src/index.js"]

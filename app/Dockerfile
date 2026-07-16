FROM node:22 AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

FROM nginx:alpine

COPY --from=builder /app/src /usr/share/nginx/html
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 8081
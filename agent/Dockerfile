FROM node:22-alpine
RUN apk add --no-cache docker-cli
WORKDIR /app
COPY package.json ./
COPY server.js ./
EXPOSE 8787
CMD ["npm","start"]

FROM node:19-alpine3.17 AS build
WORKDIR /app/
COPY package*.json /app/
RUN npm -g config set registry https://registry.npmjs.org
RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 1200000
RUN npm install -g npm@9.6.5
RUN npm ci
RUN npm install -g vite
COPY . /app/
CMD ["sh", "-c", "npm rebuild esbuild && npm run dev"]



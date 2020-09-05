FROM node:12-alpine

COPY source source
COPY package.json .
COPY package-lock.json .

RUN npm ci

EXPOSE 3000

CMD npm start

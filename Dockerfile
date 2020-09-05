FROM node:12-alpine

COPY src src
COPY package.json .
COPY package-lock.json .

RUN npm ci --production

EXPOSE 3000

CMD npm start

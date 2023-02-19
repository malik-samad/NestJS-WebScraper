FROM node:16

WORKDIR /usr/src/app/client

COPY ./package*.json ./

RUN npm install

CMD [ "npm", "run", "start" ]
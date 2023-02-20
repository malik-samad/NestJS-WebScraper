FROM node:14

USER node
WORKDIR /home/node/app

COPY --chown=node:node ./ ./

RUN npm ci

CMD [ "npm", "run", "start:prod" ]

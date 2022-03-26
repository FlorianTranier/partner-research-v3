FROM node:16.13.0 as build-stage

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node src/ ./src
COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node tsconfig.json ./

RUN yarn install && yarn build


FROM node:16.13.0

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node --from=build-stage /home/node/app/dist /home/node/app/dist
COPY --chown=node:node --from=build-stage /home/node/app/package.json /home/node/app/package.json
COPY --chown=node:node --from=build-stage /home/node/app/yarn.lock /home/node/app/yarn.lock

RUN yarn install --production=true

CMD yarn start
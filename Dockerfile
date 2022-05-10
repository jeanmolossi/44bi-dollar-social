FROM node:16.2.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start:dev" ]

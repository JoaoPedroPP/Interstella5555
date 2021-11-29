FROM node:lts-alpine as FRONT

WORKDIR /usr/builder

COPY . /usr/builder

RUN cd interestella5555 && \
    npm install && \
    npm run prod

FROM node:lts-alpine

WORKDIR /usr/app

COPY . ./

RUN npm install

COPY --from=FRONT \
    /usr/builder/interestella5555/dist/interestella5555 /usr/app/public

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
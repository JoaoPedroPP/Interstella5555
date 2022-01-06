FROM node:lts-alpine as FRONT

WORKDIR /usr/builder

COPY . /usr/builder

RUN cd interstella5555 && \
    npm install && \
    npm run prod

FROM node:lts-alpine

WORKDIR /usr/app

COPY app.js package* .

RUN npm install

COPY --from=FRONT \
    /usr/builder/interstella5555/dist/interestella5555 /usr/app/public

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
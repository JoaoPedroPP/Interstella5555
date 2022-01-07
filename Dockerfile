FROM node:lts-alpine as FRONT

WORKDIR /usr/builder

COPY interstella5555 .

RUN npm install && \
    npm run prod

FROM node:lts-alpine

WORKDIR /usr/app

COPY app.js package* LICENSE README.md ./

RUN npm install

COPY --from=FRONT \
    /usr/builder/dist/interstella5555 /usr/app/public

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
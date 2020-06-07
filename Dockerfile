FROM node:lts-alpine as FRONT

WORKDIR /usr/builder

COPY . /usr/builder

RUN cd frontA && \
    npm install && \
    npm run prod

FROM node:lts-alpine

WORKDIR /usr/app

COPY . ./

RUN npm install

COPY --from=FRONT \
    /usr/builder/frontA/dist/frontA /usr/app/public

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
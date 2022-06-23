FROM node:alpine as builder

WORKDIR /app

COPY . /tmp

WORKDIR /tmp

RUN npm ci && npm run build

CMD [ "/bin/sh", "-c", "cp -R /tmp /app/build" ]

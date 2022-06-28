FROM node:alpine

WORKDIR "/com.docker.devenvironments.code/poc/debug"

RUN yarn global add typescript
RUN yarn global add nodemon

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

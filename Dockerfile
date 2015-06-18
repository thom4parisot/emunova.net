FROM library/node:0.12-slim

MAINTAINER "Thomas Parisot" <hi@oncletom.io>

ENV BUILD_DIR /emunova/dist
ENV BUILD_TMP_DIR /tmp/emunova
ENV DATA_DIR /emunova/data
ENV NODE_PATH /emunova/data

VOLUME ["/emunova/dist"]

WORKDIR /emunova/web

RUN apt-get update \
  && apt-get install  git wget libfreetype6 libfontconfig bzip2 -y --no-install-recommends

COPY *.json ./

RUN mkdir -p /emunova/{dist,data} \
  && mkdir -p ${BUILD_TMP_DIR} \
  && mkdir -p ./cache \
  && npm i -g grunt-cli bower \
  && npm install --production \
  && bower install

COPY ./bin ./bin
COPY ./lib ./lib
COPY ./src ./src
COPY ./Gruntfile.js ./

RUN npm run build

CMD ["grunt", "build"]

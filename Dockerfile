FROM node:20.19.0-alpine
RUN apk add --no-cache bash
RUN rm -f /usr/local/bin/yarn /usr/local/bin/yarnpkg && npm install -g yarn
RUN mkdir /code
RUN export
ADD yarn.lock /code/yarn.lock
ADD package.json /code/package.json
WORKDIR /code
RUN yarn install
ENV NODE_ENV=production
COPY . /code/
RUN yarn next telemetry disable && yarn build
EXPOSE 3000
CMD ["yarn", "start"]
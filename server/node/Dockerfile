FROM node:12.13.0-alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install -g yarn
# Bundle app source
COPY . /usr/src/app
RUN yarn install

CMD yarn start
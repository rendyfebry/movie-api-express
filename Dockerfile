FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ARG ARG_USR_ENV
ARG ARG_DB_HOST
ARG ARG_DB_USER
ARG ARG_DB_PASS
ARG ARG_DB_NAME

ENV USR_ENV ${ARG_USR_ENV}
ENV DB_HOST ${DB_HOST}
ENV DB_USER ${DB_USER}
ENV DB_PASS ${DB_PASS}
ENV DB_NAME ${DB_NAME}

EXPOSE 3000
CMD [ "node", "server.js" ]
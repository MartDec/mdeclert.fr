FROM node:14.17-alpine

WORKDIR /var/www/mdeclert.fr

RUN apk -U upgrade
RUN npm install

FROM node:12.16-alpine

WORKDIR /opt/zeff
COPY . .

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
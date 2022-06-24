FROM node:14

WORKDIR /app
COPY package.json .
COPY ormconfig.js .

RUN npm install --production

COPY dist/apps/backend ./dist/apps/backend

CMD ["npm", "run", "start:backend:prod"]

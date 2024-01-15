FROM node

WORKDIR /app/next-app

COPY package.json /app/next-app
RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY tsconfig*.json ./
COPY src src

RUN npm run build


# create a final image
FROM node:14-alpine
ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY package*.json ./

RUN chown node:node .
USER node
RUN npm ci

COPY --from=builder /usr/src/app/dist/ dist/
EXPOSE 8080

CMD [ "npm", "run", "start" ]

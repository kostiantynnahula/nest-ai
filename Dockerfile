FROM node:alpine As development

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

RUN npm i

COPY . .

RUN npm install -r --force

RUN npm run build
RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run test

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.yaml ./

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["pnpm", "run", "start:prod", "dist/main"]
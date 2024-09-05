FROM node:alpine As development

WORKDIR /usr/src/app

ARG DATABASE_URL
ARG OPENAI_API_KEY
ARG UNSPLASH_ACCESS_KEY
ENV DATABASE_URL=${DATABASE_URL}
ENV OPENAI_API_KEY=${OPENAI_API_KEY}
ENV UNSPLASH_ACCESS_KEY=${UNSPLASH_ACCESS_KEY}

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

RUN npm i

COPY . .

RUN npm install -r --force

RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run build

FROM node:alpine as production

ARG NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 80

CMD ["pnpm", "run", "start:prod", "dist/main"]
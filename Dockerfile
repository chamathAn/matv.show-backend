FROM oven/bun:1 AS base

RUN apt-get update -y && apt-get install -y openssl libssl-dev
WORKDIR /usr/src/app
COPY package.json bun.lock ./

FROM base AS install
RUN bun install --frozen-lockfile

COPY . .

EXPOSE 3000
ENTRYPOINT [ "bun", "run", "src/index.ts" ]

FROM node:22-alpine

RUN corepack enable pnpm

WORKDIR /app

EXPOSE 3000

CMD ["sh", "-c", "pnpm install && pnpm dev"]

FROM node:20.19.0-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm next telemetry disable && pnpm build

# --- Runtime stage ---
FROM node:20.19.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=builder /app ./
EXPOSE 3000
CMD ["pnpm", "start"]

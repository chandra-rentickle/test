# Base image
FROM node:alpine AS base

WORKDIR /usr/src/app
COPY package*.json ./

# Build stage
FROM base AS build
RUN npm install
COPY . .

# Production stage
FROM base AS prod
COPY --from=build /usr/src/app .
EXPOSE 3000
CMD ["node", "app.js"]

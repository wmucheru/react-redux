# Stage 1: Build the react app

FROM node:16-alpine3.11 AS build-app
WORKDIR /app
COPY package*.json ./
COPY . .
RUN yarn install
CMD ["yarn", "build"]

# Stage 2: Package in nginx
FROM nginx:1.21.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-app /app .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
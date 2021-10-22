FROM node:lts-alpine AS BUILD_IMAGE
ENV NODE_ENV production
EXPOSE 3000

RUN mkdir -p /home/app/
WORKDIR /home/app
COPY . .
RUN apk add git
RUN apk add dumb-init
RUN npm ci --only=production
CMD ["dumb-init", "npm", "start"]
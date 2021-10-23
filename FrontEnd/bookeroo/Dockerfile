FROM node:lts-alpine
EXPOSE 3000

RUN mkdir -p /home/app/
WORKDIR /home/app
COPY . .
RUN apk add git
RUN apk add dumb-init
CMD ["dumb-init", "npm", "start"]
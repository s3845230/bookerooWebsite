FROM node:lts-alpine
EXPOSE 3000

RUN mkdir -p /home/app/
WORKDIR /home/app
COPY . .
RUN apk add git
RUN npm ci
CMD ["npm", "start"]
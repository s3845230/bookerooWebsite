FROM node:lts
EXPOSE 3000

RUN mkdir -p /home/app/
WORKDIR /home/app
COPY . .
RUN npm ci
CMD ["npm", "start"]
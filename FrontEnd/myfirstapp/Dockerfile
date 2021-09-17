FROM node:latest
EXPOSE 3000

RUN mkdir -p /home/app/
WORKDIR /home/app
COPY . .
RUN npm install
CMD ["npm", "start"]
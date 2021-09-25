# NOT FOR PRODUCTION - ONLY TO BE USED FOR TESTING
# STOP CONTAINER, REMOVE CONTAINER
sudo docker stop loginmicroservice
sudo docker rm loginmicroservice
# BUILD JAR PACKAGE, CREATE DOCKER IMAGE, RUN DOCKER-COMPOSE TO START CONTAINER
./mvnw package
sudo docker build -t loginmicroservice .
sudo docker run -d -p 8080:8080 --name loginmicroservice loginmicroservice

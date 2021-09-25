# NOT FOR PRODUCTION - ONLY TO BE USED FOR TESTING
# STOP CONTAINER, REMOVE CONTAINER
sudo docker stop authmicroservice
sudo docker rm authmicroservice
# BUILD JAR PACKAGE, CREATE DOCKER IMAGE, RUN DOCKER-COMPOSE TO START CONTAINER
./mvnw package
sudo docker build -t authmicroservice .
sudo docker run -d -p 8080:8080 --name authmicroservice authmicroservice

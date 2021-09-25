# NOT FOR PRODUCTION - ONLY TO BE USED FOR TESTING
# STOP CONTAINER, REMOVE CONTAINER
sudo docker stop bookmicroservice
sudo docker rm bookmicroservice
# BUILD JAR PACKAGE, CREATE DOCKER IMAGE, RUN DOCKER-COMPOSE TO START CONTAINER
./mvnw package
sudo docker build -t bookmicroservice .
sudo docker run -d -p 8081:8081 --name bookmicroservice bookmicroservice

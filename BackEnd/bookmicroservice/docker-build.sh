# NOT FOR PRODUCTION - ONLY TO BE USED FOR TESTING
# BUILD JAR PACKAGE, CREATE DOCKER IMAGE, RUN DOCKER-COMPOSE TO START CONTAINER
./mvnw package
sudo docker build -t bookmicroservice .
sudo docker-compose up -d

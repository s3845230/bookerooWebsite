FROM openjdk:8-jre-alpine
EXPOSE 8081

RUN mkdir -p /home/bookmicroservice/
WORKDIR /home/bookmicroservice/
COPY ./target/bookmicroservice*.jar bookmicroservice.jar
ENTRYPOINT ["java", "-jar", "bookmicroservice.jar"]
FROM openjdk:8-jre-alpine
EXPOSE 8080

RUN mkdir -p /home/authmicroservice/
WORKDIR /home/authmicroservice/
COPY ./target/*.jar authmicroservice.jar
ENTRYPOINT ["java", "-jar", "authmicroservice.jar"]
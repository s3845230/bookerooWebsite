FROM openjdk:8-jre-alpine
EXPOSE 8080

RUN mkdir -p /home/loginmicroservice/
WORKDIR /home/loginmicroservice/
COPY ./target/*.jar loginmicroservice.jar
ENTRYPOINT ["java", "-jar", "loginmicroservice.jar"]
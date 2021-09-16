FROM openjdk:8
EXPOSE 8081

RUN mkdir -p /home/bookmicroservice/
WORKDIR /home/bookmicroservice/
COPY target/*.jar .
ENTRYPOINT ["java", "-jar", "bookmicroservice-0.0.1-SNAPSHOT.jar"]
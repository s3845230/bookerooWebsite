# RMIT SEPT 2021 Major Project
# Group WED-09:30

## Members
* Allen Muthupunnackal Jose
* Charlton Ho
* David Morrin
* Roman O'Brien


## Records

* Github repository: https://github.com/s3845295/septteam3
* Slack: https://septteam3.slack.com/
* Jira: https://sept-team3.atlassian.net/
* Teams: https://teams.microsoft.com/l/team/19%3aTXhYFFQDSUVu5XG7tYr2sWNFR3TL_IO2qxqgOINDEFI1%40thread.tacv2/conversations?groupId=6a30cc33-1dd7-452b-b54f-a2bc62b6d36d&tenantId=d1323671-cdbe-4417-b4d4-bdb24b51316b

## Deployment
* CircleCI: https://app.circleci.com/pipelines/github/s3845295/septteam3
* bookeroo: http://bookeroo-balancer-2011454518.ap-southeast-2.elb.amazonaws.com/
* authmicroservice: http://authmicroservice-lb-1717063688.ap-southeast-2.elb.amazonaws.com/
* bookmicroservice:

## Outstanding Limitations
There's an issue with the deployment in AWS, and the back-end microservices go offline intermittently. 

## Running Project
### Running Back-End Microservices
Please note that your IDE must have the maven dependencies loaded before it's able to package the ```.jar``` file.
1. ```cd BackEnd/[microservice]```
2. ```./mvnw package && java -jar target/[microservice].jar```
3. Access H2 database via ```http://localhost:8080/h2-console```
   1. Port is specified under ```[microservice]/src/main/resources/application.properties```, ```server.port=XXXX```

### Running Front-End
1. ```cd FrontEnd/bookeroo```
2. ```npm ci``` (only first time) 
3. ```npm start```
4. Access via ```http://localhost:3000```

## How to Deploy
Assuming your code passes the automated testing in CircleCI, it will build the Docker images for you, push, and deploy them to AWS for you.
1. `git push`

  




# Multi-stage build
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM maven:3.9-openjdk-17 AS backend-build
WORKDIR /app
COPY Banking-app/pom.xml ./
RUN mvn dependency:go-offline
COPY Banking-app/src ./src
RUN mvn package -DskipTests

FROM openjdk:17-jre-slim
WORKDIR /app
COPY --from=backend-build /app/target/*.jar app.jar
COPY --from=frontend-build /app/frontend/dist ./static
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
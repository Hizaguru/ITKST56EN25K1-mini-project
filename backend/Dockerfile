# Use OpenJDK 17 as base image (Java 23 might not be stable)
FROM openjdk:17-jdk-slim AS build

# Set working directory
WORKDIR /app

# Copy Gradle wrapper and necessary files
COPY gradlew gradlew
COPY gradle gradle
COPY build.gradle settings.gradle ./
COPY src src/

# Grant execute permission for Gradle wrapper
RUN chmod +x gradlew

# Build the application (excluding tests to speed up build)
RUN ./gradlew clean build -x test

# Use a smaller runtime image for deployment
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/build/libs/*.jar userdb.jar

# Expose the application port
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "userdb.jar"]

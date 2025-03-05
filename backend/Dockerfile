# Use OpenJDK 23 as base image
FROM openjdk:23-jdk-slim

# Set working directory
WORKDIR /app

# Copy built JAR file
COPY target/userdb.jar userdb.jar

# Expose backend port
EXPOSE 8080

# Run Spring Boot application
CMD ["java", "-jar", "userdb.jar"]

# Vaihda tukevampaan JDK-versioon
FROM openjdk:17-jdk-slim AS build

WORKDIR /app

# Kopioi kaikki tarvittavat tiedostot
COPY gradlew gradlew
COPY gradle gradle
COPY build.gradle settings.gradle ./
COPY src src/

# Anna Gradle-wrapperille suoritusoikeus
RUN chmod +x gradlew

# Asenna riippuvuudet ja käännä sovellus (skipataan testit)
RUN ./gradlew clean build -x test

# Pienempi runtime-kuva
FROM openjdk:17-jdk-slim

WORKDIR /app

# Asennetaan tarvittavat paketit (sisältäen curl)
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Kopioidaan rakennettu JAR-tiedosto
COPY --from=build /app/build/libs/*.jar userdb.jar

# Exposoidaan portti
EXPOSE 8080

# Suoritetaan suoraan backend-sovellus ilman startup.sh:ta
CMD ["java", "-jar", "/app/userdb.jar"]

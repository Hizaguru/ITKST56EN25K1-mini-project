#!/bin/sh
echo "⏳ Waiting for backend to start..."
sleep 30

echo "🚀 Adding test user to the database..."
curl -X POST "http://localhost:8080/api/auth/register" \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Juckson Five",
           "email": "jucksonFive@gmail.com",
           "password": "Password123!"
         }'

echo "✅ User added successfully!"
exec java -jar userdb.jar

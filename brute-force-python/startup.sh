#!/bin/bash

echo "Waiting for backend to be ready..."
while ! curl -s "http://backend:8080/api/auth/register" >/dev/null; do 
  echo "Backend not ready..."
  sleep 5
done

echo "🚀 Adding test user..."
curl -v -X POST "http://backend:8080/api/auth/register" \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Juckson Five",
           "email": "JucksonFive@gmail.com",
           "password": "password123!"
         }'

echo "Starting brute-force attack"
python /app/brute-force-python.py

#!/bin/bash

echo "Starting docker..."
docker-compose up -d

echo "Showing Docker logs..."
docker compose logs -f | grep "brute-force"



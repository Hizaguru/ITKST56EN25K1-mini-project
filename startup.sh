#!/bin/bash

echo "🐳 Starting docker..."
docker-compose up -d

echo "📜 Showing Docker logs..."
docker-compose logs -f &

echo "⏳ Waiting for backend to be ready..."
while ! curl -s "http://localhost:8080/api/auth/register" >/dev/null; do
  echo "⏳ Backend not ready..."
  sleep 5
done

echo "🚀 Adding test user..."
curl -v -X POST "http://localhost:8080/api/auth/register" \
     -H "Content-Type: application/json" \
     -d '{
           "name": "Juckson Five",
           "email": "JucksonFive@gmail.com",
           "password": "password123!"
         }'

PYTHON_INSTALLED=false
PIP_INSTALLED=false

echo "Checking if Python 3 is installed..."
if ! command -v python3 &> /dev/null
then
    echo "❌ Python 3 not found!"
    read -p "🔹 Do you want to install Python 3? (Y/N): " choice
    case "$choice" in
      [Yy]* )
        echo "🔄 Installing Python 3..."
        sudo apt update && sudo apt install -y python3
        PYTHON_INSTALLED=true
        ;;
      * )
        echo "❌ Python 3 is required to run the script. Exiting."
        exit 1
        ;;
    esac
fi

echo "Checking if pip is installed..."
if ! command -v pip3 &> /dev/null
then
    echo "❌ pip not found!"
    read -p "🔹 Do you want to install pip? (Y/N): " choice
    case "$choice" in
      [Yy]* )
        echo "🔄 Installing pip..."
        sudo apt update && sudo apt install -y python3-pip
        PIP_INSTALLED=true
        ;;
      * )
        echo "❌ pip is required to install dependencies. Exiting."
        exit 1
        ;;
    esac
fi

echo "📦 Installing required Python packages..."
pip3 install -r brute-force-python/requirements.txt

echo "🐍 Running python script..."
cd brute-force-python
python3 brute-force-python.py


if [ "$PYTHON_INSTALLED" = true ]; then
    read -p "🔹 Do you want to uninstall Python 3 now? (Y/N): " choice
    case "$choice" in
      [Yy]* )
        echo "🗑️ Uninstalling Python 3..."
        sudo apt remove -y python3 && sudo apt autoremove -y
        ;;
      * )
        echo "✅ Keeping Python 3 installed."
        ;;
    esac
fi

if [ "$PIP_INSTALLED" = true ]; then
    read -p "🔹 Do you want to uninstall python3 and pip now? (Y/N): " choice
    case "$choice" in
      [Yy]* )
        echo "🗑️ Uninstalling pip..."
        sudo apt remove -y python3-pip && sudo apt autoremove -y
        ;;
      * )
        echo "✅ Keeping pip installed."
        ;;
    esac
fi

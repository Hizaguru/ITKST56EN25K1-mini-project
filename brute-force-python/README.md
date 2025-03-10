# Brute-Force Python - README

## Introduction

Brute-Force Python is a project designed for testing and learning brute-force attack techniques in a controlled environment. The script attempts to authenticate against a backend system by trying multiple username-password combinations from a pre-defined password list.

**Disclaimer:** This project is for educational and ethical hacking purposes only. Unauthorized use against real systems is illegal and strictly prohibited.

## Features

- Written in **Python 3**
- Uses **requests** for HTTP requests
- Implements **concurrent.futures** for multithreading to speed up attack attempts
- Logs attempts

## Requirements

- **Python 3.x**
- **pip** installed
- **Backend API** running (Spring Boot backend at `http://localhost:8080`)

## Usage

Run the script with:

```sh
python brute_force-python.py
```

The script will:

1. Load a username and password list.
2. Send authentication requests to `http://localhost:8080/api/auth/login`.
3. Log successful attempts.

## Configuration

Modify the following variables in `brute_force.py` to customize the attack:

```python
URL = "http://localhost:8080/api/auth/login"
PASSWORD_LIST = "passwords.txt"
THREADS = 10
```

## Legal Notice

This tool is intended for **ethical hacking** and security research. Do **not** use this script on unauthorized systems. The author is not responsible for any misuse.

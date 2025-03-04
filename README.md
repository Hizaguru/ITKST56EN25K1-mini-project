📜 README.md - User Management System Monorepo

# 🚀 User Management System - Monorepo

Welcome to the **User Management System**, a full-stack application that integrates authentication, user management, and security testing into a single monorepo. This repository combines **backend, frontend, and security tools** in one place for easy deployment and management.

## 📦 **Project Overview**

This monorepo includes the following three projects:

### 🛠️ **Components**

| Project                      | Description                                     | Technology Stack           |
| ---------------------------- | ----------------------------------------------- | -------------------------- |
| **Brute-force-python**       | A script for brute-force testing authentication | Python, Requests           |
| **User-management-frontend** | A Next.js-based frontend for user management    | React, Next.js, TypeScript |
| **UserManagementSystem**     | A Spring Boot backend connected to MongoDB      | Java, Spring Boot, MongoDB |

---

## 🚀 **Getting Started**

Follow these steps to **set up** and **run** the entire system locally using **Docker Compose**.

### 📥 **1️⃣ Clone the Repository**

```sh
git clone https://github.com/Hizaguru/UserManagement-Monorepo.git
cd UserManagement-Monorepo

🛠️ 2️⃣ Run with Docker""

Ensure you have Docker & Docker Compose installed, then execute:

docker-compose up --build

Once started, you can access the services at:

✅ Frontend (React/Next.js) → http://localhost:3000
✅ Backend (Spring Boot API) → http://localhost:8080
✅ MongoDB Database → mongodb://localhost:27017

To stop all services, run:

docker-compose down

🏗️ Project Structure

UserManagement-Monorepo/
│── Brute-force-python/         # Brute-force attack script (Python)
│── User-management-frontend/   # Next.js frontend (React)
│── UserManagementSystem/       # Spring Boot backend (Java + MongoDB)
│── docker-compose.yml          # Docker orchestration
│── README.md                   # Project documentation

🛠️ Services & Technologies

This project is built using modern technologies to ensure scalability, security, and performance.
🖥️ Frontend - Next.js

✅ Located in User-management-frontend/
✅ Runs on port 3000
✅ Communicates with the backend API
✅ Built with React, Next.js, TypeScript
⚙️ Backend - Spring Boot

✅ Located in UserManagementSystem/
✅ Runs on port 8080
✅ Connects to MongoDB
✅ Built with Java, Spring Boot
🗄️ Database - MongoDB

✅ Runs as a Docker container
✅ Stores user authentication data
✅ Uses MongoDB Atlas or Local Deployment
🐳 Docker Setup

This project uses Docker Compose to run all services effortlessly.
🏗️ Docker Services
Service	Description	Port
MongoDB	Database	27017
Backend	Spring Boot	8080
Frontend	Next.js	3000
🚀 Run the Full Stack

docker-compose up --build

To stop all services, run:

docker-compose down
```

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

./startup.sh


To stop all services, run:

docker-compose down

🏗️ Project Structure

UserManagement-Monorepo/
│── Brute-force-python/
│── User-management-frontend/
│── UserManagementSystem/
│── compose.yml
│── startup.sh
│── README.md

To stop all services, run:

docker-compose down
```

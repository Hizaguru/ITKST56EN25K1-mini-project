# 🚀 ITKST56EN25K1-mini-project

Welcome to the **ITKST56EN25K1-mini-project**, a full-stack application that integrates authentication, user management, and security testing into a single monorepo.

## 📦 **Project Overview**

This project includes the following three projects:

### 🛠️ **Components**

| Project                | Description                                     | Technology Stack           |
| ---------------------- | ----------------------------------------------- | -------------------------- |
| **Brute-force-python** | A script for brute-force testing authentication | Python, Requests           |
| **frontend**           | A Next.js-based frontend for user management    | React, Next.js, TypeScript |
| **Backend**            | A Spring Boot backend connected to MongoDB      | Java, Spring Boot, MongoDB |

---

## **Getting Started**

Follow these steps to **set up** and **run** the entire system locally using **Docker Compose**.

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/Hizaguru/ITKST56EN25K1-mini-project.git
cd ITKST56EN25K1-mini-project
```

### **2️⃣ Run with Docker**

Ensure you have Docker & Docker Compose installed, then execute:

```sh
./startup.sh
```

To stop all services, run:

```sh
docker-compose down
```

🏗️ Project Structure

- ITKST56EN25K1-mini-project
  - brute-force-python/
  - frontend/
  - backend/
  - compose.yml
  - startup.sh
  - README.md

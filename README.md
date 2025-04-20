# 🚴‍♂ Bike Servicing Management Backend

## 📝 Overview

A backend API for managing bike servicing operations, supporting CRUD for customers, bikes, and service records, with endpoints for service assignment and completion.

## 🌐 Live Backend

**[https://bike-servicing-management-chi.vercel.app](https://bike-management-delta.vercel.app)**


## ⚙️ Setup Guide

### Prerequisites

- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn
- A PostgreSQL database (e.g., [Neon](https://neon.tech), Supabase, or local)

### 🚀 Steps

## How to Clone and Run the Project Locally : 

1. **Clone the repository:**
   - First, you need to clone and open your terminal and type:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
     ```
2. **Open files in VS Code:**
   - After opening the **server-side** files in VS Code, install npm dependencies both file:
     ```bash
     npm install
     ```
4. **Environment setup:**
     ```plaintext
     DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?schema=public"
     PORT=5000
     NODE_ENV=development
     ```
5. **Access the server :**
  - - Check the `package.json` and check whice command add there.
    1. Live reloading for typescript code : 
    ```tarminal
        npm run dev
    ```
    2. Open prisma Studio : 
    ```tarminal
        "studio": npx prisma studio
    ```
    3. Runs the TypeScript compiler to transpile TypeScript files into JavaScript files : 
    ```tarminal
        npm run build
    ```
6. **Run Migrations :**
   ```plaintext
     npx prisma migrate dev --name init
   ```

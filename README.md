# 🚴‍♂ Bike Servicing Management Backend

## 📝 Overview

This is a backend API for managing bike servicing tasks. You can add and manage customers, bikes, and service records. It also lets you assign services, track their status, and mark them as completed.

## 🌐 Live Backend

**[https://bike-servicing-management-chi.vercel.app](https://bike-management-delta.vercel.app)**


## 🛠️ Tech Stack

- **Node.js & Express.js**: Backend runtime and API framework  
- **TypeScript**: Type-safe JavaScript  
- **Prisma ORM**: Database management  
- **PostgreSQL**: Relational database

 
## ⚙️ Setup Guide

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


## 🔑 Key Features

- 🧑‍💼 **Customer Management**: Create, read, update, and delete customer records  
- 🏍️ **Bike Management**: Add new bikes and retrieve bike data  
- 🔧 **Service Management**: Assign services, update progress, and mark services as complete  
- ⏰ **Pending/Overdue Services**: Fetch services that are overdue by 7+ days or still pending  
- 🚨 **Error Handling**: Unified and standardized API error responses for easier debugging  


# Ecommerce Project

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (Atlas)

## Student Information

- **Name**: Yu Zhang
- **Student Number**: 8905876
- **GitHub Repository**: [https://github.com/yuzhang1226/ecommerce-project](https://github.com/yuzhang1226/ecommerce-project)
- **Date**: 2024/7/18

## Features

### Frontend

- Product listings
- Shopping cart management
- Checkout process

### Backend

- RESTful APIs for product management, order processing, and user authentication
- Integration with MongoDB for data storage

### Database

- MongoDB for storing users, products, and orders

## Database Schema Design

### Users Table

- `user_id`: Number
- `username`: String
- `email`: String
- `password`: String
- `created_at`: Date

### Products Table

- `product_id`: Number
- `name`: String
- `description`: String
- `price`: Bigint
- `stock`: Number
- `created_at`: Date

### Orders Table

- `order_id`: Number
- `user_id`: Number
- `total_price`: Bigint
- `status`: String
- `created_at`: Date

### Order_Items Table

- `order_item_id`: Number
- `order_id`: Number
- `product_id`: Number
- `quantity`: Number
- `price`: Bigint

## Relationships

### Users

- One-to-Many with Orders (One user can place many orders).

### Products

- One-to-Many with Order_Items (One product can be in many order items).

### Orders

- One-to-Many with Order_Items (One order can have many order items).

### Order_Items

- Many-to-One with Orders (Many order items can belong to one order).
- Many-to-One with Products (Many order items can reference one product).

## Project Setup

### Prerequisites

- Node.js (>=14.x)
- MongoDB Atlas account and cluster

### Project Initialization

1. Clone the repository:
   ```bash
   git clone https://github.com/yuzhang1226/ecommerce-project.git
   cd ecommerce-project
   
2.Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install

3.Create a .env file in the backend directory with the following content:
   ```bash
   MONGODB_URI=<your_mongodb_atlas_uri>(Replace <your_mongodb_atlas_uri> with your actual MongoDB Atlas connection string.)
   PORT=5000
   
4.Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   
5.Start the frontend development server:
   ```bash
   npm start
   
6.Usage
   Access the frontend at http://localhost:3000
   The backend API will be available at http://localhost:5000


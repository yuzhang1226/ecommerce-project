# ecommerce-project
## Tech Stack
Student Name: yu zhang  
Student Number:8905876
Date: 2024/7/18
- **Frontend**: ReactJS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (Atlas)
- 
## Features
- **Frontend**: 
  - Product listings
  - Shopping cart management
  - Checkout process
- **Backend**:
  - RESTful APIs for product management, order processing, and user authentication
  - Integration with MongoDB for data storage
- **Database**:
  - MongoDB for storing users, products, and orders
## Database Schema Design
### Users Table
 user_id      UUID
 username     VARCHAR
 email        VARCHAR
 password     VARCHAR
 created_at   TIMESTAMP

### Products Table
product_id  | UUID
name        | VARCHAR
description | TEXT
price       | DECIMAL
stock       | INT
created_at  | TIMESTAMP

### Orders Table

order_id    | UUID
user_id     | UUID
total_price | DECIMAL
status      | VARCHAR
created_at  | TIMESTAMP

### Order_Items Table

order_item_id | UUID
order_id    | UUID
product_id  | UUID
quantity    | INT 
price       | DECIMAL

### Visual Representation

  - ![image](https://github.com/user-attachments/assets/6011ec6f-498d-42dc-8bbd-023abce94bc6)
  - 
### Relationships
1. **Users**: 
   - One-to-Many with **Orders** (One user can place many orders).
   
2. **Products**: 
   - One-to-Many with **Order_Items** (One product can be in many order items).

3. **Orders**: 
   - One-to-Many with **Order_Items** (One order can have many order items).

4. **Order_Items**: 
   - Many-to-One with **Orders** (Many order items can belong to one order).
   - Many-to-One with **Products** (Many order items can reference one product).

 ##  Project Setup
Project Initialization: Repository created on GitHub and cloned to local machine.
Frontend Setup: Initialized ReactJS project.
Backend Setup: Initialized Node.js project with Express and connected to MongoDB (Atlas).

## Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
- The visual representation of the database schema can be updated in the `README.md` once available.

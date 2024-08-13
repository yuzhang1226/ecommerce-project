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

### Database Schema presentation
- ![image](https://github.com/user-attachments/assets/782720d0-6806-40ac-9192-4c16deeb667c)


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

1. Clone the repository, and cd to the directory which the project locate in:
   ```bash
   git clone https://github.com/yuzhang1226/ecommerce-project.git
   cd ecommerce-project
   
2. Navigate to the server directory and install dependencies:
   ```bash
   cd server
   npm install

3. Create a .env file in the server directory with the following content(you don't need to create this if it has already in the server directory):
   ```bash
   MONGODB_URI='mongodb+srv://zyu2818:zy%401234A@cluster0.ni3evew.mongodb.net/cluster0?retryWrites=true&w=majority'
   PORT=5000
      
4. Start the backtend development server:
   ```bash
   npm start
   
5. open another bash, Navigate to the client directory and install dependencies:
   ```bash
   cd ecommerce-project
   cd client
   npm install
   
6. Start the frontend development server:
   ```bash
   npm start  
### Additional Notes
   If you have any build issues, check the .env file for correct configuration and ensure MongoDB Atlas is properly set up.
## Testing
### Test Case 1:Display Product Listings
- **Description:** Verify that the product listings are displayed correctly on the home page.
- **Steps:**
- Navigate to the home page.
- Ensure that the products are displaying the product name, price.
- Click on a product to navigate to its details page.
- **Expected Result:** The product listings should be displayed, and clicking on a product should take you to the product details page.
### Test Case 2: Add Product to Cart
- **Description:** Verify that a user can add a product to the shopping cart.
- **Steps:**
- Go to a product details page.
- Click on the "Add to Cart" button.
- Navigate to the cart page.
- **Expected Result:** The product should be added to the cart page.
### Test Case 3: View Shopping Cart
- **Description:** Verify that the shopping cart displays the correct items and total price.
- **Steps:**
- Click the cart page.
- Ensure that the products added to the cart are listed with their correct name and price.
- Check that the total price is calculated correctly.
- **Expected Result:** The cart should list all added products with the correct total price.
### Test Case 4: Update Product Quantity in Cart
- **Description:** Verify that a user can update the quantity of a product in the cart.
- **Steps:**
- Go to the shopping cart page.
- Change the quantity of a product.
- Ensure that the cart updates the total price accordingly.
- **Expected Result:** The product quantity should be updated, and the total price should reflect the change.
### Test Case 5: Remove Product from Cart
- **Description:** Verify that a user can remove a product from the shopping cart.
- **Steps:**
- Go to the shopping cart page.
- Click on the "Remove" button for a product.
- Ensure that the product is removed from the cart.
- **Expected Result:** The product should be removed from the cart, and the total price should update accordingly.
### Test Case 6: View Order History
- **Description:** Verify that a user can view their order history.
- **Steps:**
- Log in to the user account.
- Navigate to the order history page.
- Check that the previous orders are listed with details like order date, products, and total price.
- **Expected Result:** The order history should display all previous orders with correct details.
### Test Case 7: Create Product
- **Description:** Test the ability to create a new product within a category.
- **Steps:**
- Log in as Admin: Complete the admin login process.
- Ensure that only products from the selected category are displayed.
- **Expected Result:** The product listings should update to show only products from the selected category.
### Test Case 8: Admin Login Test
- **Description:** Verify that only the admin can log in with the correct credentials.
- **Steps:**
- Login as Admin: Enter the admin username (admin) and password (password).
- Create New Product: Fill in the product details, select a category, and submit the form.
- **Expected Result:** The new product should be added successfully and appear in the list.
### Test Case 9: Invalid Admin Login Test
- **Description:** Ensure that incorrect login credentials do not grant access to the admin dashboard.
- **Steps:**
- Attempt Login with Wrong Credentials: Enter incorrect admin credentials (e.g., wrong username or password).
- Submit the Login Form.
- **Expected Result:** The login attempt fails, and an error message is displayed.
### Test Case 10: Create Category
- **Description:** Test the ability to create a new category.
- **Steps:**
- Log in as Admin: Complete the admin login process.
- Navigate to Category Management: Go to the category management page.
- Create New Category: Fill in the category name (e.g., Electronics) and submit the form.
- **Expected Result:** The new category should be added successfully and appear in the list.
- 

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

1. Clone the repository:
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
   cd ../client
   npm install
   
6. Start the frontend development server:
   ```bash
   npm start  
### Additional Notes
   If you have any build issues, check the .env file for correct configuration and ensure MongoDB Atlas is properly set up.
### Testing
Test Case 1: Display Product Listings
Description: Verify that the product listings are displayed correctly on the home page.
Steps:
Navigate to the home page of the application.
Ensure that the product cards are visible, displaying the product name, price, and image.
Click on a product to navigate to its details page.
Expected Result: The product listings should be displayed, and clicking on a product should take you to the product details page.
Test Case 2: Add Product to Cart
Description: Verify that a user can add a product to the shopping cart.
Steps:
Go to a product details page.
Click on the "Add to Cart" button.
Check if the cart icon shows the correct number of items.
Navigate to the cart page.
Expected Result: The product should be added to the cart, and the cart should reflect the correct item count.
Test Case 3: View Shopping Cart
Description: Verify that the shopping cart displays the correct items and total price.
Steps:
Click on the cart icon to go to the shopping cart page.
Ensure that the products added to the cart are listed with their correct name, quantity, and price.
Check that the total price is calculated correctly.
Expected Result: The cart should list all added products with the correct total price.
Test Case 4: Update Product Quantity in Cart
Description: Verify that a user can update the quantity of a product in the cart.
Steps:
Go to the shopping cart page.
Change the quantity of a product.
Ensure that the cart updates the total price accordingly.
Expected Result: The product quantity should be updated, and the total price should reflect the change.
Test Case 5: Remove Product from Cart
Description: Verify that a user can remove a product from the shopping cart.
Steps:
Go to the shopping cart page.
Click on the "Remove" button for a product.
Ensure that the product is removed from the cart.
Expected Result: The product should be removed from the cart, and the total price should update accordingly.
Test Case 6: Complete Checkout Process
Description: Verify that a user can complete the checkout process.
Steps:
Add products to the cart.
Click on the "Checkout" button.
Enter the required user information (e.g., shipping address).
Submit the order.
Expected Result: The order should be successfully placed, and the user should see an order confirmation page.
Test Case 7: View Order History
Description: Verify that a user can view their order history.
Steps:
Log in to the user account.
Navigate to the order history page.
Check that the previous orders are listed with details like order date, products, and total price.
Expected Result: The order history should display all previous orders with correct details.
Test Case 8: Filter Products by Category
Description: Verify that the user can filter products by selecting a category.
Steps:
Click on a category from the category list on the home page.
Ensure that only products from the selected category are displayed.
Expected Result: The product listings should update to show only products from the selected category.
Test Case 9: API Testing for Product Retrieval
Description: Verify that the API returns the correct products.
Steps:
Use Postman to send a GET request to /api/products.
Check the response for the correct product data, including name, price, and category.
Expected Result: The API should return a JSON response with the correct product data.
Test Case 10: API Testing for Order Creation
Description: Verify that the API allows creating an order.
Steps:
Use Postman to send a POST request to /api/orders with valid order data.
Check that the order is created and returned in the response.
Expected Result: The API should create the order and return the order details in the JSON response.

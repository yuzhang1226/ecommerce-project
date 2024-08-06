// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductsList from './ProductsList';
import CategoryList from './CategoryList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Checkout from './Checkout';
import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Home</Link> |
                    <Link to="/cart">Cart</Link> |
                    <Link to="/checkout">Checkout</Link> |
                    <Link to="/admin/login">Admin Login</Link> |
                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                </nav>
                <CategoryList onCategorySelect={setSelectedCategory} />
                <Routes>
                    <Route
                        path="/"
                        element={<ProductsList category={selectedCategory} />}
                    />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsList from './ProductsList';
import CategoryList from './CategoryList';
import ProductDetails from './ProductDetails'; // Import the new component

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');

    return (
        <Router>
            <div className="App">
                <CategoryList onCategorySelect={setSelectedCategory} />
                <Routes>
                    <Route
                        path="/"
                        element={<ProductsList category={selectedCategory} />}
                    />
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

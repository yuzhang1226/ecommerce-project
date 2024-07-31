// client/src/ProductsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch products');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.length > 0 ? (
                    products.map(product => (
                        <li key={product._id}>
                            <h2>{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                            <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
                        </li>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </ul>
        </div>
    );
};

export default ProductsList;

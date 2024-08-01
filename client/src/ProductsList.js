// client/src/ProductsList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductsList({ category }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [category]);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products
                    .filter(product => category === '' || product.category === category)
                    .map(product => (
                        <li key={product._id}>
                            <Link to={`/products/${product._id}`}>
                                {product.name} - ${product.price}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default ProductsList;

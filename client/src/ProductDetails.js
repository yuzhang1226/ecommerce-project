// client/src/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details from the API
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    // Function to handle adding the product to the cart
    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
            <p>Details: {product.details}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;

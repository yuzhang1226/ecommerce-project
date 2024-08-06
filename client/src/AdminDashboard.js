// client/src/AdminDashboard.js
import React, { useState, useEffect } from 'react';

function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        category: '',
        inStock: true
    });

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleCreate = () => {
        fetch('http://localhost:5000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => setProducts([...products, data]))
            .catch(error => console.error('Error creating product:', error));
    };

    const handleUpdate = (id, updatedFields) => {
        fetch(`http://localhost:5000/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedFields)
        })
            .then(response => response.json())
            .then(data => {
                setProducts(products.map(p => (p._id === id ? data : p)));
            })
            .catch(error => console.error('Error updating product:', error));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/products/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setProducts(products.filter(p => p._id !== id));
            })
            .catch(error => console.error('Error deleting product:', error));
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div>
                <h3>Create Product</h3>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="number" name="price" placeholder="Price" onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" onChange={handleChange} />
                <button onClick={handleCreate}>Create</button>
            </div>
            <div>
                <h3>Products</h3>
                <ul>
                    {products.map(product => (
                        <li key={product._id}>
                            <p>{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p>Category: {product.category}</p>
                            <button onClick={() => handleUpdate(product._id, { name: 'Updated Name' })}>Update</button>
                            <button onClick={() => handleDelete(product._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/categories')  // Correct API endpoint
            .then(response => {
                setCategories(response.data);
            })
            .catch(err => {
                setError('Failed to fetch categories');
                console.error('Error fetching categories:', err);
            });
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category._id} onClick={() => onCategorySelect(category.name)}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;

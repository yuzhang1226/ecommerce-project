import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(err => {
                setError('Failed to fetch categories');
            });
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category} onClick={() => onCategorySelect(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
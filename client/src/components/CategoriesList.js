import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category._id}>
                        <a href={`/categories/${category._id}`}>{category.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesList;

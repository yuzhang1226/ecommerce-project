import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Listings</h1>
        <ProductList products={products} />
      </header>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product._id}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default App;

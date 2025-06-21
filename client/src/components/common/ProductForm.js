import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css'; // Import custom styles for the form

const ProductForm = ({ fetchProducts }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/products', product);
    setProduct({ name: '', price: '', description: '', image: '', category: '' });
    fetchProducts(); // Refresh the product list
  };

  return (
    <div className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Price (₹)"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Image URL"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Category"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
          />
        </div>
        <button type="submit" className="btn-submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
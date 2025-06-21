import React, { useState } from 'react';
import axios from 'axios';
import './ProductTable.css'; // Import custom styles for the table

const ProductTable = ({ products, fetchProducts }) => {
  const [editingId, setEditingId] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});

  const handleEdit = (product) => {
    setEditingId(product._id);
    setUpdatedProduct(product);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, updatedProduct);
      setEditingId(null);
      fetchProducts(); // Refresh the product list
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts(); // Refresh the product list
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  return (
    <div className="table-responsive">
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>
                {editingId === product._id ? (
                  <input
                    type="text"
                    name="name"
                    value={updatedProduct.name}
                    onChange={handleChange}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editingId === product._id ? (
                  <input
                    type="number"
                    name="price"
                    value={updatedProduct.price}
                    onChange={handleChange}
                  />
                ) : (
                  `₹${product.price}` // Updated to ₹ symbol
                )}
              </td>
              <td>
                {editingId === product._id ? (
                  <input
                    type="text"
                    name="description"
                    value={updatedProduct.description}
                    onChange={handleChange}
                  />
                ) : (
                  product.description
                )}
              </td>
              <td>
                {editingId === product._id ? (
                  <input
                    type="text"
                    name="image"
                    value={updatedProduct.image}
                    onChange={handleChange}
                  />
                ) : (
                  <div className="image-container">
                    <img src={product.image} alt={product.name} />
                  </div>
                )}
              </td>
              <td>
                {editingId === product._id ? (
                  <input
                    type="text"
                    name="category"
                    value={updatedProduct.category}
                    onChange={handleChange}
                  />
                ) : (
                  product.category
                )}
              </td>
              <td>
                {editingId === product._id ? (
                  <button className="btn-update" onClick={() => handleUpdate(product._id)}>Update</button>
                ) : (
                  <>
                    <button className="btn-edit" onClick={() => handleEdit(product)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(product._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductTable from './ProductTable';
import ProductForm from '../common/ProductForm';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:5000/api/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Admin Panel</h1>
      <ProductForm fetchProducts={fetchProducts} />
      <ProductTable products={products} fetchProducts={fetchProducts} />
    </div>
  );
};

export default AdminPanel;
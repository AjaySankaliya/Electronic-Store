import React from 'react';
import './ProductCard.css'; // Import custom styles for the card

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">₹{product.price}</p>
        <p className="card-description">{product.description}</p>
        <p className="card-category"><strong>Category:</strong> {product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAdd }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
      <h2>{product.name}</h2>
      <p>Price: {product.price}₺</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

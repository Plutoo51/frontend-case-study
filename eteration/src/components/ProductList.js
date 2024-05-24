import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAdd }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} onAdd={onAdd}/>
      ))}
    </div>
  );
};

export default ProductList;
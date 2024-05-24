import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderDetail from "../components/HeaderDetail"; // Import the Header component
import Cart from "../components/Cart";
import "../ProductDetail.css";

const ProductDetail = ({ onAdd, cartItems, onRemove }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      <div className="header">
        <HeaderDetail />
      </div>
      <div className="product-detail">
        <div className="product-detail-details">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
            />
          </div>
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <p className="product-price">{product.price}₺</p>
            <button className="add-to-cart" onClick={() => onAdd(product)}>
              Add to Cart
            </button>
            <p className="product-description">{product.description}</p>
          </div>
        </div>
        <div className="shop-cart">
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

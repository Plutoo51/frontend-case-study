import React from "react";
import "../Cart.css";

const Cart = ({ cartItems, onAdd, onRemove }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div className="cart-empty">Cart is empty</div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}₺</span>
            </div>
            <div className="cart-item-controls">
              <button onClick={() => onRemove(item)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => onAdd(item)}>+</button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <div>Total Price: {totalPrice.toFixed(2)}₺</div>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

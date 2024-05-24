import React from 'react';
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link className="link-header" to="../">Eteration</Link>
      <div className="cart-info">
        <span>Total Price: 0₺</span>
        <span>Samet</span>
      </div>
    </header>
  );
};

export default Header;

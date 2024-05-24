import React from 'react';

const Header = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <span className='header-title'>Eteration</span>
      <input
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
      />
      <div className="cart-info">
        <span>Total Price: 0₺</span>
        <span>Samet</span>
      </div>
    </header>
  );
};

export default Header;

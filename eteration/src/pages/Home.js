import React from 'react';
import Header from '../components/Header';
import SortCard from '../components/SortCard';
import ProductList from '../components/ProductList';
import PageSelect from '../components/PageSelect';
import Cart from '../components/Cart';

const Home = ({
  cartItems,
  onAdd,
  onRemove,
  handleSearch,
  handleSort,
  currentProducts,
  sortedProducts,
  currentPage,
  productsPerPage,
  handlePageChange
}) => {
  return (
    <div className="body">
      <div className="header">
        <Header onSearch={handleSearch} />
      </div>
      <div className="main-content">
        <div className="sorting">
          <SortCard onSort={handleSort} />
        </div>
        <div className="center">
          <div className="prod-list">
            <ProductList products={currentProducts} onAdd={onAdd} />
          </div>
          <div className="page-select">
            <PageSelect
              count={Math.ceil(sortedProducts.length / productsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
        <div className="shop-card">
          <div className="shop-counts">
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

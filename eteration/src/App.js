import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://5fc9346b2af77700165ae514.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case "Old to new":
        return new Date(a.createdAt) - new Date(b.createdAt);
      case "New to old":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "Price high to low":
        return parseFloat(b.price) - parseFloat(a.price);
      case "Price low to high":
        return parseFloat(a.price) - parseFloat(b.price);
      default:
        return 0;
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                onAdd={handleAddProduct}
                onRemove={handleRemoveProduct}
                handleSearch={handleSearch}
                handleSort={handleSort}
                currentProducts={currentProducts}
                sortedProducts={sortedProducts}
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                handlePageChange={handlePageChange}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <ProductDetail
                onAdd={handleAddProduct}
                cartItems={cartItems}
                onRemove={handleRemoveProduct}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

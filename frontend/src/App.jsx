import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Orders from './pages/Orders';
import Footer from './components/Footer';
import ShopNow from './pages/ShopNow';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage ';
import BlogPage from './pages/BlogPage';
import Offer from './pages/Offer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopNow />} />
        <Route path="/categories" element={<Categories />} /> {/* Route for Categories */}
        <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Route for CategoryPage */}
         <Route path='/blog' element={<BlogPage/>}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/offers" element={<Offer/>} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-richblack-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-normal gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold md:mr-6">
          <Link to="/">Kartzilla</Link>
        </div>

        {/* Search Bar - Hidden on Mobile */}
        <div className="hidden md:flex flex-1">
          <div className="relative w-full max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 rounded-full text-black focus:outline-none"
            />
            <BsSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/shop" className="hover:text-yellow-400 transition">Shop</Link>
          <Link to="/categories" className="hover:text-yellow-400 transition">Categories</Link>
          <Link to="/offers" className="hover:text-yellow-400 transition">Offers</Link>
          <Link to="/blog" className="hover:text-yellow-400 transition">Blog</Link>
          <Link to="/account" className="hover:text-yellow-400 transition">Account</Link>
          <Link to="/orders" className="hover:text-yellow-400 transition">Orders</Link>
          <Link to="/cart" className="hover:text-yellow-400 transition">🛒</Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col px-6">
          {/* Optional Search in Mobile Dropdown */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 rounded-full text-black focus:outline-none"
            />
            <BsSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          <Link to="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/categories" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Categories</Link>
          <Link to="/offers" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Offers</Link>
          <Link to="/blog" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/account" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Account</Link>
          <Link to="/orders" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Orders</Link>
          <Link to="/cart" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>🛒</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

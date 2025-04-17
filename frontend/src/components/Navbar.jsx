import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { BsSearch, BsCart } from 'react-icons/bs';
import kartzilla from "../assets/logo-kartzilla.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/categories", label: "Categories" },
    { path: "/offers", label: "Offers" },
    { path: "/blog", label: "Blog" },
    { path: "/account", label: "Account" },
    { path: "/orders", label: "Orders" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-richblack-900 text-white px-6 md:px-10 py-6 shadow-md w-full h-[12vh] flex justify-between relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={kartzilla} 
            alt="kartzilla" 
            className="h-44 md:h-44 object-contain"
          />
        </Link>

        {/* Search bar - Desktop only */}
        <div className="hidden md:block flex-1 mx-6">
          <div className="relative max-w-lg w-full mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-12 rounded-full text-black focus:outline-none"
            />
            <BsSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-yellow-400 transition duration-200 ${
                isActive(link.path) ? 'text-yellow-400 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/cart" className="hover:text-yellow-400 relative text-lg">
            <BsCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
          </Link>
        </div>

        {/* Hamburger menu - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[12vh] left-0 w-full bg-richblack-900 px-6 py-6 flex flex-col gap-4 text-sm z-50 shadow-md rounded-b-2xl transition-all duration-300">
          {/* Mobile Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 pl-10 rounded-full text-black focus:outline-none"
            />
            <BsSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Mobile Links */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block hover:text-yellow-400 ${
                isActive(link.path) ? 'text-yellow-400 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link to="/cart" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 text-lg flex items-center">
            <BsCart />
            <span className="ml-2">Cart</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

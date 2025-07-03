import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          LUXE
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/category/men" className="hover:text-blue-500">Men</Link>
          <Link to="/category/women" className="hover:text-blue-500">Women</Link>
          <Link to="/category/accessories" className="hover:text-blue-500">Accessories</Link>
          {/* <Link to="/category/new-arrivals" className="hover:text-blue-500">New Arrivals</Link> */}
          {/* <Link to="/category/sale" className="hover:text-blue-500">Sale</Link> */}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl">
          <FiSearch className="cursor-pointer hover:text-blue-500" />
          <Link to="/profile">
            <FiUser className="cursor-pointer hover:text-blue-500" />
          </Link>
          <Link to="/wishlist">
            <FiHeart className="cursor-pointer hover:text-blue-500" />
          </Link>
          <Link to="/cart" className="relative">
            <FiShoppingCart className="cursor-pointer hover:text-blue-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2 {/* You can replace this with dynamic cart count */}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

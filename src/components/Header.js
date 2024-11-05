// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import MiniCartIcon from './MiniCartIcon';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">MyApp</Link>
        </div>
        <ul className="flex space-x-6">
          <li><MiniCartIcon/></li>
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-400">Shop</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

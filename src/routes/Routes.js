// src/routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound'; // 404 Page
import Login from '../components/Login';
import Register from '../components/Register';
import MyOrders from '../components/my-account/MyOrders';
import ShopPage from '../components/Shop';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
    </Routes>
  );
};

export default AppRoutes;

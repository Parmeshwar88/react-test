import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import MiniCart from './MiniCart'; // Adjust the import path according to your folder structure
import { useCart } from '../context/CartContext';
const MiniCartIcon = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleCart} className="flex items-center relative">
        <FaShoppingCart className="text-2xl" />
        {totalItems >= 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </button>
      {isOpen && (
        <MiniCart
          cartItems={cartItems}
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
        />
      )}
    </div>
  );
};
export default MiniCartIcon;

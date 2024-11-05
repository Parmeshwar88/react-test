import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MiniCart = ({ cartItems, onRemoveItem, onClearCart }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex justify-between items-center">
        Mini Cart
        {cartItems.length > 0 && (
          <button
            onClick={onClearCart}
            className="text-sm bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
          >
            Clear Cart
          </button>
        )}
      </h2>

      {cartItems.length > 0 ? (
        <div className="flex-1 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 p-2 border-b">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-700">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 p-1 ml-2"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-20">Your cart is empty.</p>
      )}

      {/* Show total and checkout only when there are items in the cart */}
      {cartItems.length > 0 && (
        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between text-gray-800 font-semibold text-lg">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-semibold text-lg">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniCart;

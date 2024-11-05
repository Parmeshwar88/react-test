// import React from 'react';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
//       <div className="w-full h-48 mb-4 relative">
//         <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
//         <div className="absolute top-0 left-0 bg-white rounded-lg p-2 text-sm shadow-md">
//           <span className="text-blue-600 font-semibold">{product.category}</span>
//         </div>
//       </div>
//       <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//       <p className="text-gray-600 mb-1">${product.price}</p>
//       <div className="flex items-center mb-4">
//         <span className="text-yellow-500">⭐ {product.rating}</span>
//         <span className="text-gray-400 ml-2">({product.reviews} reviews)</span>
//       </div>
//       <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const handleAddToCart = async () => {
        setIsLoading(true); // Start loading
        await addToCart(product); // Add item to cart (assuming addToCart supports async)
        setIsLoading(false); // Stop loading
      };
    return (
      <div className="border rounded-lg p-4 flex flex-col items-center">
        <img src={product.image} alt={product.name} className="h-32 w-full object-cover mb-4 rounded-lg" />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-2">${product.price}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className={`bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  



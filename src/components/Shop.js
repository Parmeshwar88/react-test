import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { CircleLoader } from 'react-spinners';

const ShopPage = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const generateProducts = (num) => {
    return Array.from({ length: num }, (_, index) => ({
      id: index + 1,
      name: `Product ${index + 1}`,
      price: (Math.random() * 100 + 20).toFixed(2),
      rating: (Math.random() * 5).toFixed(1),
      reviews: Math.floor(Math.random() * 200),
      category: ['Electronics', 'Accessories', 'Storage'][Math.floor(Math.random() * 3)],
      image: `https://picsum.photos/300/200?random=${index + 1}`,
    }));
  };
  const products = generateProducts(50);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(120);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

 

  useEffect(() => {
    const filterProducts = () => {
      setLoading(true);
      const result = products.filter(product => {
        const price = parseFloat(product.price);
        return (
          (selectedCategory === 'All' || product.category === selectedCategory) &&
          price >= minPrice &&
          price <= maxPrice
        );
      });
      setFilteredProducts(result);
      setLoading(false);
    };

    filterProducts();
  }, [selectedCategory, minPrice, maxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);



  

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Shop</h1>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
          {toastMessage}
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4 mb-6 md:mb-0 border-r pr-4">
          {/* Sidebar Content */}
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {['All', 'Electronics', 'Accessories', 'Storage'].map(category => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center p-2 rounded-lg transition-colors duration-300 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 text-gray-800'}`}
                >
                  <span className="mr-2">{category}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Price Range</h2>
            <input 
              type="range" 
              min="20" 
              max="120" 
              value={minPrice} 
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full mb-2"
            />
            <span>Min Price: ${minPrice}</span>
            <input 
              type="range" 
              min="20" 
              max="120" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full mb-4"
            />
            <span>Max Price: ${maxPrice}</span>
          </div>
        </div>

        {/* Product Listing */}
        <div className="md:w-3/4">
          <div className="flex justify-between mb-4 items-center">
            <h2 className="text-2xl font-semibold">Products</h2>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2">Sort by:</label>
              <select id="sort" className="border border-gray-300 rounded-md px-2 py-1" onChange={(e) => {
                setLoading(true);
                // Add sorting logic here if needed
                setLoading(false);
              }}>
                <option value="popularity">Popularity</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Loader */}
          {loading ? (
            <div className="flex justify-center items-center h-48">
              <CircleLoader size={50} color={"#4A90E2"} loading={loading} />
            </div>
          ) : (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {currentProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product}  // Only show loading for the specific product
                  />
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-between mt-6 items-center">
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition duration-300">Previous</button>
                <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition duration-300">Next</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

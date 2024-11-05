// src/pages/Home.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-200">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center text-center bg-cover bg-center h-96" style={{ backgroundImage: "url('https://picsum.photos/1200/400??text=Slide+2')" }}>
              <div className="bg-black bg-opacity-50 p-8">
                <h1 className="text-5xl font-bold text-white mb-4">Welcome to Your Fashion Destination</h1>
                <p className="text-lg text-gray-300 mb-8">Discover the latest trends in clothing and accessories.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center text-center bg-cover bg-center h-96" style={{ backgroundImage: "url('https://picsum.photos/1200/400??text=Slide+2')" }}>
              <div className="bg-black bg-opacity-50 p-8">
                <h1 className="text-5xl font-bold text-white mb-4">Spring Collection is Here!</h1>
                <p className="text-lg text-gray-300 mb-8">Fresh styles for the new season.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center text-center bg-cover bg-center h-96" style={{ backgroundImage: "url('https://picsum.photos/1200/400??text=Slide+2')" }}>
              <div className="bg-black bg-opacity-50 p-8">
                <h1 className="text-5xl font-bold text-white mb-4">Exclusive Offers Await!</h1>
                <p className="text-lg text-gray-300 mb-8">Don't miss out on our limited-time discounts.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={`https://via.placeholder.com/300?text=Product+${index}`}
                alt={`Product ${index}`}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold mb-2">Clothing Item {index}</h3>
              <p className="text-gray-600 mb-2">$29.99</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300 w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Men\'s Clothing', 'Women\'s Clothing', 'Accessories', 'Footwear'].map((category, index) => (
              <div key={index} className="bg-white border rounded-lg shadow-md p-4 flex flex-col items-center">
                <img
                  src={`https://via.placeholder.com/150?text=${category}`}
                  alt={category}
                  className="w-32 h-32 object-cover mb-4 rounded"
                />
                <h3 className="font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold mb-6 text-center">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <img
                src={`https://via.placeholder.com/300?text=New+Arrival+${index}`}
                alt={`New Arrival ${index}`}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold mb-2">New Item {index}</h3>
              <p className="text-gray-600 mb-2">$39.99</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300 w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src={`https://via.placeholder.com/300?text=Best+Seller+${index}`}
                  alt={`Best Seller ${index}`}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="font-semibold mb-2">Best Seller Item {index}</h3>
                <p className="text-gray-600 mb-2">$49.99</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300 w-full">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Exclusive Offer!</h2>
          <p className="mb-8">Get 20% off on your first purchase with code: FIRST20</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
            Claim Offer
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold mb-6 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md p-4">
              <p className="text-gray-600 mb-2">"Amazing quality! I'm very satisfied with my purchase."</p>
              <h4 className="font-bold">Customer {index}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated!</h2>
          <p className="mb-4">Sign up for our newsletter and get the latest updates and offers.</p>
          <input type="email" placeholder="Enter your email" className="border rounded-lg p-2 mr-2" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

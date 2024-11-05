import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
 <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here’s what’s happening with your store today.</p>
        </header>

        {/* Dashboard Content */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Stats Cards */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
            <p className="text-2xl font-bold text-blue-600">$25,000</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Orders</h3>
            <p className="text-2xl font-bold text-blue-600">130</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Top Product</h3>
            <p className="text-xl font-bold text-blue-600">T-Shirt</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Customers</h3>
            <p className="text-2xl font-bold text-blue-600">350</p>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Orders</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">#1234</td>
                <td className="py-2 px-4 border-b">John Doe</td>
                <td className="py-2 px-4 border-b">$150.00</td>
                <td className="py-2 px-4 border-b text-green-600">Shipped</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#1235</td>
                <td className="py-2 px-4 border-b">Jane Smith</td>
                <td className="py-2 px-4 border-b">$200.00</td>
                <td className="py-2 px-4 border-b text-yellow-600">Pending</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#1236</td>
                <td className="py-2 px-4 border-b">Sam Johnson</td>
                <td className="py-2 px-4 border-b">$120.00</td>
                <td className="py-2 px-4 border-b text-red-600">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Account Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Account Settings</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Full Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md text-gray-700" placeholder="John Doe" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded-md text-gray-700" placeholder="johndoe@example.com" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded-md text-gray-700" placeholder="••••••••" />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Update Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

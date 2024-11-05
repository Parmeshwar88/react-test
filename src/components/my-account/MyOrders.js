import React from 'react';
import Sidebar from '../Sidebar';

const MyOrders = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
     
       <Sidebar/>
      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">My Orders</h1>
          <p className="text-gray-600">Track the status of your recent orders.</p>
        </header>

        {/* Orders Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b text-gray-600">Order ID</th>
                <th className="py-3 px-4 border-b text-gray-600">Date</th>
                <th className="py-3 px-4 border-b text-gray-600">Status</th>
                <th className="py-3 px-4 border-b text-gray-600">Total</th>
                <th className="py-3 px-4 border-b text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b">#1024</td>
                <td className="py-3 px-4 border-b">Oct 20, 2024</td>
                <td className="py-3 px-4 border-b text-green-600">Delivered</td>
                <td className="py-3 px-4 border-b">$120.00</td>
                <td className="py-3 px-4 border-b">
                  <a href="#" className="text-blue-500 hover:underline">View</a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">#1023</td>
                <td className="py-3 px-4 border-b">Oct 15, 2024</td>
                <td className="py-3 px-4 border-b text-yellow-600">Pending</td>
                <td className="py-3 px-4 border-b">$90.00</td>
                <td className="py-3 px-4 border-b">
                  <a href="#" className="text-blue-500 hover:underline">View</a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b">#1022</td>
                <td className="py-3 px-4 border-b">Oct 10, 2024</td>
                <td className="py-3 px-4 border-b text-red-600">Cancelled</td>
                <td className="py-3 px-4 border-b">$150.00</td>
                <td className="py-3 px-4 border-b">
                  <a href="#" className="text-blue-500 hover:underline">View</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default MyOrders;

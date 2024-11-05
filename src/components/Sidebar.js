import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600">My Dashboard</h2>
        <nav className="mt-6">
          <Link
            to="/dashboard"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            {" "}
            Overview
          </Link>
          <Link
            to="/my-orders"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            My Orders
          </Link>
          <a
            href="/products"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            Products
          </a>
          <a
            href="/account-settings"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            Account Settings
          </a>
          <a
            href="/logout"
            className="block py-2 text-gray-600 hover:text-blue-600"
          >
            Log Out
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

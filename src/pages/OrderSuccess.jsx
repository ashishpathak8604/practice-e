import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <FiCheckCircle className="text-green-500 text-6xl mb-6" />

      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-gray-600 mb-6">
        Your order has been placed successfully. You will receive a confirmation email shortly.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;

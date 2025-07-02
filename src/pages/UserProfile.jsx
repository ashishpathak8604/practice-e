import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const dummyUser = {
  name: 'John Doe',
  email: 'john@example.com',
};

const dummyOrders = [
  {
    id: 'ORD12345',
    date: '2024-06-20',
    status: 'Delivered',
    total: 209.97,
  },
  {
    id: 'ORD67890',
    date: '2024-05-14',
    status: 'Shipped',
    total: 89.99,
  },
];

const UserProfile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.info('Logged out');
    navigate('/login');
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">My Profile</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* User Info */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Account Details</h2>
          <div className="space-y-4 text-gray-700 text-base">
            <p>
              <span className="font-medium">👤 Name:</span> {dummyUser.name}
            </p>
            <p>
              <span className="font-medium">📧 Email:</span> {dummyUser.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-8 w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Order History */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order History</h2>
          {dummyOrders.length === 0 ? (
            <p className="text-gray-500">You have no orders yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-3">Order ID</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-100 transition">
                      <td className="px-4 py-3 font-medium">{order.id}</td>
                      <td className="px-4 py-3">{order.date}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold">
                        ${order.total.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

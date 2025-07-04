import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [shipping, setShipping] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    zip: '',
  });

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    if (
      !shipping.name ||
      !shipping.address ||
      !shipping.city ||
      !shipping.country ||
      !shipping.zip
    ) {
      toast.error('Please fill out all shipping details.');
      return;
    }

    toast.success('Order placed successfully!');
    navigate('/order-success');
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Shipping Info */}
        <div className="flex-1 border border-gray-200 shadow-md rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Shipping Information</h2>
          <form className="space-y-5">
            {['name', 'address', 'city', 'country', 'zip'].map((field) => (
              <div key={field}>
                <label className="block mb-1 text-gray-700 capitalize font-medium">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={shipping[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            ))}
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Payment Method</h2>
            <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
              (Payment gateway integration like Stripe/PayPal can be implemented here.)
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 border border-gray-200 shadow-md rounded-xl p-6 bg-white h-fit">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>

          <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <div className="text-sm font-medium text-gray-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax (5%)</span>
              <span className="font-medium">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

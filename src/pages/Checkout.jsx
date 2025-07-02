import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const dummyCart = [
  {
    id: '1',
    title: 'Classic Denim Jacket',
    price: 79.99,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1542060748-10c28b62716b',
  },
  {
    id: '2',
    title: 'Leather Handbag',
    price: 129.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1618354691373-cd9fbc6cbb36',
  },
];

const Checkout = () => {
  const navigate = useNavigate();

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

  const subtotal = dummyCart.reduce(
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
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Shipping Info */}
        <div className="flex-1 border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            {['name', 'address', 'city', 'country', 'zip'].map((field) => (
              <div key={field}>
                <label className="block mb-1 capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={shipping[field]}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded"
                  required
                />
              </div>
            ))}
          </form>

          {/* Payment Info Placeholder */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <p className="text-gray-500">
              (Payment integration like Stripe/PayPal can be added here.)
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax (5%)</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleCheckout = () => {
    toast.success("Proceeding to Checkout...");
    navigate("/checkout");
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-2">
              {cartItems.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onRemove={removeFromCart}
                  onIncrease={increaseQty}
                  onDecrease={decreaseQty}
                  isInCart
                />
              ))}
            </div>
          </div>

          {/* Summary Box */}
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-2xl p-6 h-fit">
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
              onClick={handleCheckout}
              className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

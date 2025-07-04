import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, type, onRemove, onIncrease, onDecrease, isInCart }) => {
  const { addToCart, cartItems } = useCart();

  const isLimitReached = !cartItems.find(item => item.id === product.id) && cartItems.length >= 4;

  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white transition flex flex-col h-full">
      <Link
        to={
          type === "trending"
            ? `/trending/${product.id}`
            : `/product/${product.id}`
        }
      >
        <div className="w-full h-80 bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link
          to={
            type === "trending"
              ? `/trending/${product.id}`
              : `/product/${product.id}`
          }
        >
          <h2 className="text-lg font-semibold mb-2 hover:text-blue-500">
            {product.title}
          </h2>
        </Link>

        <p className="text-gray-700 font-medium mb-2">${product.price}</p>

        {product.rating && (
          <div className="text-yellow-400 text-sm mb-4">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          {isInCart ? (
            <div className="flex items-center gap-3 mt-4 w-full justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDecrease?.(product.id)}
                  className="px-3 py-1 bg-gray-100 text-xl rounded hover:bg-gray-200"
                >
                  –
                </button>
                <span className="min-w-[24px] text-center font-medium">
                  {product.quantity}
                </span>
                <button
                  onClick={() => onIncrease?.(product.id)}
                  className="px-3 py-1 bg-gray-100 text-xl rounded hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => onRemove?.(product.id)}
                className="p-3 bg-red-100 text-red-600 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                <FiTrash2 />
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => addToCart?.(product)}
                disabled={isLimitReached}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  isLimitReached
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <FiShoppingCart /> Add to Cart
              </button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition">
                <FiHeart />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

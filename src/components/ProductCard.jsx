import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';

// Destructure additional props
const ProductCard = ({ product, type, onAddToCart, onRemove, onIncrease, onDecrease, isInCart }) => {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white transition flex flex-col h-full">
      <div className="w-full h-80 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 font-medium mb-2">${product.price}</p>

        {/* Cart controls if isInCart is true */}
        {isInCart ? (
          <>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center border rounded-full overflow-hidden">
                <button onClick={() => onDecrease(product.id)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">-</button>
                <span className="px-4">{product.quantity}</span>
                <button onClick={() => onIncrease(product.id)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+</button>
              </div>
              <button
                onClick={() => onRemove(product.id)}
                className="p-2 rounded-full hover:bg-red-500 hover:text-white transition bg-gray-100"
              >
                🗑️
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between mt-auto">
            <button
              onClick={() => onAddToCart?.(product)}
              className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <FiShoppingCart /> Add to Cart
            </button>
            <button className="p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition">
              <FiHeart />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


export default ProductCard;

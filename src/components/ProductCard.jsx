import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi';

const ProductCard = ({ product, type, onAddToCart, onRemove }) => {
  return (
   <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white transition flex flex-col h-full">
  <Link to={type === 'trending' ? `/trending/${product.id}` : `/product/${product.id}`}>
    <div className="w-full h-80 bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  </Link>

  <div className="p-5 flex flex-col flex-1">
    <Link to={type === 'trending' ? `/trending/${product.id}` : `/product/${product.id}`}>
      <h2 className="text-lg font-semibold mb-2 hover:text-blue-500">{product.title}</h2>
    </Link>

    <p className="text-gray-700 font-medium mb-4">${product.price}</p>

    <div className="flex items-center justify-between mt-auto">
      <button
        onClick={() => onAddToCart?.(product)}
        className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
      >
        <FiShoppingCart /> Add to Cart
      </button>
      {onRemove ? (
        <button
          onClick={() => onRemove(product.id)}
          className="p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition"
        >
          <FiTrash2 />
        </button>
      ) : (
        <button className="p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition">
          <FiHeart />
        </button>
      )}
    </div>
  </div>
</div>

  );
};

export default ProductCard;

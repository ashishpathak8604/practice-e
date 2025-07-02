import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Product Info */}
      <div className="flex-grow">
        <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
        <p className="text-gray-600 mb-2">${item.price} each</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            className="px-3 py-1 border rounded hover:bg-gray-200"
            onClick={() => onDecrease(item.id)}
          >
            -
          </button>
          <span className="font-medium">{item.quantity}</span>
          <button
            className="px-3 py-1 border rounded hover:bg-gray-200"
            onClick={() => onIncrease(item.id)}
          >
            +
          </button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end gap-3">
        <p className="text-lg font-semibold">
          ${Number(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => onRemove(item.id)}
        >
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

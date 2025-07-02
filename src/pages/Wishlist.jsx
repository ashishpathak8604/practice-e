import React, { useState } from 'react';
import { toast } from 'react-toastify';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import ProductCard from '../components/ProductCard';

const dummyWishlist = [
  {
    id: '1',
    title: 'Classic Denim Jacket',
    price: 79.99,
    image: product1,
  },
  {
    id: '2',
    title: 'Leather Handbag',
    price: 129.99,
    image: product2,
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(dummyWishlist);

  const handleRemove = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    toast.info('Removed from wishlist');
  };

  const handleAddToCart = (item) => {
    toast.success(`${item.title} added to cart`);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={handleAddToCart}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

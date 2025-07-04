import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

import Loader from "../components/Loader";
import dummyProducts from "../data/dummyTrendingProducts";
import ReviewCard from "../components/ReviewCard";

const TrendingDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundProduct = dummyProducts.find((item) => item.id === id);
    setTimeout(() => {
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    
  };

  const handleAddToWishlist = () => {
    
  };

  if (loading) return <Loader />;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl text-blue-600 mb-4 font-semibold">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <p className="font-medium">Quantity:</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 border rounded hover:bg-gray-200"
              >
                -
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 border rounded hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              <FiShoppingCart /> Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="p-3 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              <FiHeart />
            </button>
          </div>

          {/* Reviews Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Reviews</h2>

            {product.reviews && product.reviews.length > 0 ? (
              <div className="grid gap-4">
                {product.reviews.map((review, idx) => (
                  <ReviewCard key={idx} review={review} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDetails;

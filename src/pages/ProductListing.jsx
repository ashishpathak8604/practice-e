import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

// Import images from assets
import dummyProducts from '../data/dummyTrendingProducts'; // Import dummy products data

// Dummy Trending Products


const ProductListing = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter products based on the URL category
  useEffect(() => {
    setLoading(true);
    const filteredProducts = dummyProducts.filter(
      (item) => item.category === category
    );
    setTimeout(() => {
      setProducts(filteredProducts);
      setLoading(false);
    }, 600);
  }, [category]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 capitalize">
        {category} Collection
      </h2>

      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}  type="trending"/>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductListing;

import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import womenHero from '../assets/womenhero.jpg';
import ProductCard from '../components/ProductCard';
import womendress from '../assets/womendress.jpg';
import womenskirt from '../assets/womenskirt.jpg';
import womencardigan from '../assets/womencardigan.jpg';
import womenheels from '../assets/womenheels.jpg';
import womenblouse from '../assets/womenblouse.jpg';
import womenjacket from '../assets/womenjacket.jpg';
import womenscarf from '../assets/womenscarf.jpg';
import womenbag from '../assets/womenbag.jpg';
import LoadMoreButton from '../components/LoadMoreButton';

const products = [
  { id: 1, title: 'Floral Summer Dress', brand: 'Chic Couture', price: 79.99, image: womendress, rating: 5 },
  { id: 2, title: 'High-Waist Skirt', brand: 'Modern Muse', price: 59.99, image: womenskirt, rating: 4 },
  { id: 3, title: 'Knit Cardigan', brand: 'Urban Luxe', price: 89.99, image: womencardigan, rating: 5 },
  { id: 4, title: 'Block Heels', brand: 'Eleganza', price: 129.99, image: womenheels, rating: 4 },
  { id: 5, title: 'Casual Blouse', brand: 'Chic Couture', price: 49.99, image: womenblouse, rating: 4 },
  { id: 6, title: 'Denim Jacket', brand: 'Modern Muse', price: 99.99, image: womenjacket, rating: 4 },
  { id: 7, title: 'Silk Scarf', brand: 'Urban Luxe', price: 39.99, image: womenscarf, rating: 5 },
  { id: 8, title: 'Leather Handbag', brand: 'Eleganza', price: 199.99, image: womenbag, rating: 5 },
];

const Women = () => {
  const [sortOption, setSortOption] = useState('featured');
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 4));
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const nextProducts = products.slice(visibleProducts.length, visibleProducts.length + 4);
      setVisibleProducts(prev => [...prev, ...nextProducts]);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <HeroSection
        heading="Women's Fashion"
        subheading="Explore the latest trends in women's fashion"
        image={womenHero}
      />

      {/* Mobile Filters Button */}
      <div className="flex justify-end lg:hidden px-4 mt-4">
        <button className="px-4 py-2 border rounded-md text-sm">
          Show Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row px-4 sm:px-6 py-8 gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/5 hidden lg:block">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            <ul className="space-y-1">
              <li><label><input type="checkbox" className="mr-2" /> Clothing</label></li>
              <li><label><input type="checkbox" className="mr-2" /> Shoes</label></li>
              <li><label><input type="checkbox" className="mr-2" /> Accessories</label></li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button key={size} className="border px-3 py-1 text-sm rounded hover:bg-gray-100">{size}</button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "black", class: "bg-black" },
                { name: "white", class: "bg-white border" },
                { name: "green", class: "bg-green-500" },
                { name: "brown", class: "bg-amber-900" },
                { name: "blue", class: "bg-blue-500" },
                { name: "red", class: "bg-red-500" },
              ].map((color) => (
                <div
                  key={color.name}
                  className={`w-6 h-6 rounded-full border cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 ${color.class}`}
                  aria-label={color.name}
                  title={color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex gap-2">
              <input type="number" placeholder="Min" className="w-1/2 border px-2 py-1 rounded" />
              <input type="number" placeholder="Max" className="w-1/2 border px-2 py-1 rounded" />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Brand</h3>
            <ul className="space-y-1">
              <li><label><input type="checkbox" className="mr-2" /> Chic Couture</label></li>
              <li><label><input type="checkbox" className="mr-2" /> Modern Muse</label></li>
              <li><label><input type="checkbox" className="mr-2" /> Urban Luxe</label></li>
              <li><label><input type="checkbox" className="mr-2" /> Eleganza</label></li>
            </ul>
          </div>

          <button className="mt-4 px-4 py-2 border rounded hover:bg-gray-100 transition">
            Clear All
          </button>
        </aside>

        {/* Product Listing */}
        <div className="w-full lg:w-4/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <p className="text-sm text-gray-700">Showing {visibleProducts.length} of {products.length} items</p>
            <div className="flex items-center gap-2 text-sm">
              <label className="font-medium text-gray-700">Sort by:</label>
              <select
                className="px-3 py-2 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid or Skeleton */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="h-80 bg-gray-100 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleProducts.map(product => (
                <ProductCard key={product.id} product={product} type="women" />
              ))}
            </div>
          )}

          <LoadMoreButton
            onClick={handleLoadMore}
            loading={loading}
            disabled={visibleProducts.length >= products.length}
          />
        </div>
      </div>

      
    </>
  );
};

export default Women;

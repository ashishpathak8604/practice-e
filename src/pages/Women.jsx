import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FiGrid, FiList } from 'react-icons/fi';
import HeroSection from '../components/HeroSection';
import womenHero from '../assets/womenhero.jpg';
import ProductCard from '../components/ProductCard';
import womendress from '../assets/womendress.jpg';
import womenskirt from '../assets/womenskirt.jpg';
import womencardigan from '../assets/womencardigan.jpg';
import womenheels from '../assets/womenheels.jpg';
import womenblouse from '../assets/womenblouse.jpg';
import womenjacket from '../assets/womenjacket.jpg';
import  womenscarf from '../assets/womenscarf.jpg';
import womenbag from '../assets/womenbag.jpg';
import LoadMoreButton from '../components/LoadMoreButton';





const products = [
  {
    id: 1,
    title: 'Floral Summer Dress',
    brand: 'Chic Couture',
    price: 79.99,
    image: womendress,
    rating: 5,
  },
  {
    id: 2,
    title: 'High-Waist Skirt',
    brand: 'Modern Muse',
    price: 59.99,
    image: womenskirt,
    rating: 4,
  },
  {
    id: 3,
    title: 'Knit Cardigan',
    brand: 'Urban Luxe',
    price: 89.99,
    image: womencardigan,
    rating: 5,
  },
  {
    id: 4,
    title: 'Block Heels',
    brand: 'Eleganza',
    price: 129.99,
    image: womenheels,
    rating: 4,
  },
  {
    id: 5,
    title: 'Casual Blouse',
    brand: 'Chic Couture',
    price: 49.99,
    image: womenblouse,
    rating: 4,
  },
  {
    id: 6,
    title: 'Denim Jacket',
    brand: 'Modern Muse',
    price: 99.99,
    image: womenjacket,
    rating: 4,
  },
  {
    id: 7,
    title: 'Silk Scarf',
    brand: 'Urban Luxe',
    price: 39.99,
    image: womenscarf,
    rating: 5,
  },
  {
    id: 8,
    title: 'Leather Handbag',
    brand: 'Eleganza',
    price: 199.99,
    image: womenbag,
    rating: 5,
  },
];

const Women = () => {
  const [sortOption, setSortOption] = useState('featured');

  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 4));
  const [loading, setLoading] = useState(false);

const handleLoadMore = () => {
  setLoading(true);
  setTimeout(() => {
    const nextProducts = products.slice(
      visibleProducts.length,
      visibleProducts.length + 4
    );
    setVisibleProducts((prev) => [...prev, ...nextProducts]);
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

      <div className="flex px-6 py-10 gap-10">
        <aside className="w-1/5 hidden lg:block">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            <ul className="space-y-1">
              <li><input type="checkbox" /> Clothing</li>
              <li><input type="checkbox" /> Shoes</li>
              <li><input type="checkbox" /> Accessories</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button key={size} className="border px-3 py-1 text-sm">{size}</button>
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
                  title={
                    color.name.charAt(0).toUpperCase() + color.name.slice(1)
                  }
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex gap-2">
              <input type="number" placeholder="Min" className="w-1/2 border px-2 py-1" />
              <input type="number" placeholder="Max" className="w-1/2 border px-2 py-1" />
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Brand</h3>
            <ul className="space-y-1">
              <li><input type="checkbox" /> Chic Couture</li>
              <li><input type="checkbox" /> Modern Muse</li>
              <li><input type="checkbox" /> Urban Luxe</li>
              <li><input type="checkbox" /> Eleganza</li>
            </ul>
          </div>

          <button className="mt-4 px-4 py-2 border rounded">Clear All</button>
        </aside>

        <div className="w-full lg:w-4/5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm">Showing 1–8 of 156 items</p>
            <div className="flex items-center gap-4">
              <label className="text-sm">Sort by:</label>
              <select
                className="border px-2 py-1 text-sm"
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
              <FiGrid className="text-xl" />
              <FiList className="text-xl" />
            </div>
          </div>

         {loading ? (
  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: 4 }).map((_, idx) => (
      <div key={idx} className="h-80 bg-gray-100 animate-pulse rounded-2xl" />
    ))}
  </div>
) : (
  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {visibleProducts.map((product) => (
      <ProductCard key={product.id} product={product} type="men" /> // or "women"
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

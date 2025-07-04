import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import accessoryHero from "../assets/accessories-hero.jpg";
import ProductCard from "../components/ProductCard";
import bag from "../assets/bag.jpg";
import necklace from "../assets/necklace.jpg";
import sunglasses from "../assets/sunglasses1.jpg";
import watch from "../assets/watch.jpg";
import scarf from "../assets/scarf.jpg";
import earrings from "../assets/earring.jpg";
import backpack from "../assets/backpack.jpg";
import bracelet from "../assets/bracelet.jpg";
import LoadMoreButton from "../components/LoadMoreButton";
import Footer from "../components/Footer";

const accessoryProducts = [
  { id: 1, title: "Leather Crossbody Bag", price: 299, image: bag, rating: 4.5 },
  { id: 2, title: "Gold-Plated Necklace", price: 189, image: necklace, rating: 4.7 },
  { id: 3, title: "Classic Sunglasses", price: 159, image: sunglasses, rating: 4.6 },
  { id: 4, title: "Leather Watch", price: 249, image: watch, rating: 4.8 },
  { id: 5, title: "Silk Scarf", price: 89, image: scarf, rating: 4.3 },
  { id: 6, title: "Pearl Earrings", price: 129, image: earrings, rating: 4.4 },
  { id: 7, title: "Designer Backpack", price: 399, image: backpack, rating: 4.9 },
  { id: 8, title: "Crystal Bracelet", price: 169, image: bracelet, rating: 4.5 },
];

const Accessories = () => {
  const [sortOption, setSortOption] = useState("featured");
  const [visibleProducts, setVisibleProducts] = useState(accessoryProducts.slice(0, 4));
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const next = accessoryProducts.slice(
        visibleProducts.length,
        visibleProducts.length + 4
      );
      setVisibleProducts((prev) => [...prev, ...next]);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <HeroSection
        image={accessoryHero}
        heading="Elevate Your Style"
        subheading="Discover Our Curated Collection of Premium Accessories"
      />

      {/* Mobile Filter Button */}
      <div className="flex justify-end lg:hidden px-4 mt-4">
        <button className="px-4 py-2 border rounded-md text-sm">
          Show Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row px-4 sm:px-6 py-8 gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/5 hidden lg:block">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            <ul className="space-y-1">
              <li><label><input type="checkbox" className="mr-2" /> Bags</label></li>
              <li><label><input type="checkbox" className="mr-2" /> Jewelry</label></li>
              <li><label><input type="checkbox" className="mr-2" /> Watches</label></li>
              <li><label><input type="checkbox" className="mr-2" /> Sunglasses</label></li>
            </ul>
          </div>

          {/* Color */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "black", class: "bg-black" },
                { name: "white", class: "bg-white border" },
                { name: "brown", class: "bg-amber-900" },
                { name: "gold", class: "bg-yellow-500" },
                { name: "silver", class: "bg-gray-300" },
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

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex gap-2">
              <input type="number" placeholder="Min" className="w-1/2 border px-2 py-1 rounded" />
              <input type="number" placeholder="Max" className="w-1/2 border px-2 py-1 rounded" />
            </div>
          </div>

          {/* Clear Button */}
          <button className="mt-4 px-4 py-2 border rounded hover:bg-gray-100 transition">
            Clear All
          </button>
        </aside>

        {/* Product Section */}
        <div className="w-full lg:w-4/5">
          {/* Sort & Product Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <p className="text-sm text-gray-700">
              Showing {visibleProducts.length} of {accessoryProducts.length} items
            </p>
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

          {/* Product Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="h-80 bg-gray-100 animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} type="accessories" />
              ))}
            </div>
          )}

          <LoadMoreButton
            onClick={handleLoadMore}
            loading={loading}
            disabled={visibleProducts.length >= accessoryProducts.length}
          />
        </div>
      </div>

      
    </>
  );
};

export default Accessories;

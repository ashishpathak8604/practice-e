// src/pages/Accessories.jsx
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

const accessoryProducts = [
  {
    id: 1,
    title: "Leather Crossbody Bag",
    price: 299,
    image: bag,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Gold-Plated Necklace",
    price: 189,
    image: necklace,
    rating: 4.7,
  },
  {
    id: 3,
    title: "Classic Sunglasses",
    price: 159,
    image: sunglasses,
    rating: 4.6,
  },
  {
    id: 4,
    title: "Leather Watch",
    price: 249,
    image: watch,
    rating: 4.8,
  },
  {
    id: 5,
    title: "Silk Scarf",
    price: 89,
    image: scarf,
    rating: 4.3,
  },
  {
    id: 6,
    title: "Pearl Earrings",
    price: 129,
    image: earrings,
    rating: 4.4,
  },
  {
    id: 7,
    title: "Designer Backpack",
    price: 399,
    image: backpack,
    rating: 4.9,
  },
  {
    id: 8,
    title: "Crystal Bracelet",
    price: 169,
    image: bracelet,
    rating: 4.5,
  },
];

const Accessories = () => {
  const [sortOption, setSortOption] = useState("featured");

  const [visibleProducts, setVisibleProducts] = useState(
    accessoryProducts.slice(0, 4)
  );
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);

    setTimeout(() => {
      const nextProducts = accessoryProducts.slice(
        visibleProducts.length,
        visibleProducts.length + 4
      );
      setVisibleProducts((prev) => [...prev, ...nextProducts]);
      setLoading(false);
    }, 1500); // 1.5 seconds fake delay
  };

  return (
    <>
      <HeroSection
        image={accessoryHero}
        heading="Elevate Your Style"
        subheading="Discover Our Curated Collection of Premium Accessories"
      />

      <div className="px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3 text-sm">
            {["Filters", "Type", "Material", "Price Range"].map((label) => (
              <button
                key={label}
                className="px-4 py-2 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:text-white transition duration-300 ease-in-out"
              >
                {label}
              </button>
            ))}
          </div>
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

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="h-80 bg-gray-100 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                type="accessories"
              />
            ))}
          </div>
        )}

        <LoadMoreButton
          onClick={handleLoadMore}
          loading={loading}
          disabled={visibleProducts.length >= accessoryProducts.length}
        />
      </div>
    </>
  );
};

export default Accessories;

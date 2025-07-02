import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";
import accessoriesImg from "../assets/accessories.jpg";

import dummyTrendingProducts from '../data/dummyTrendingProducts';
import dummyNewArrivalProducts from '../data/dummyNewArrivalProducts';





const categories = [
  {
    title: "Men",
    image: menImg,
    link: "/category/men",
  },
  {
    title: "Women",
    image: womenImg,
    link: "/category/women",
  },
  {
    title: "Accessories",
    image: accessoriesImg,
    link: "/category/accessories",
  },
];



const Home = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Shop by Category (White background) */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.title}
                title={cat.title}
                image={cat.image}
                link={cat.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals (Grey background) */}
      <section className="max-w-[1200px] mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dummyNewArrivalProducts.map((product) => (
            <div
              key={product.id}
              className="transform transition hover:scale-105 hover:shadow-xl"
            >
              <ProductCard product={product} type="new" />
            </div>
          ))}
        </div>
      </section>

      {/* Trending Now (White background with scroll) */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 py-10 relative">
          <h2 className="text-3xl font-bold mb-6 flex justify-between items-center">
            Trending Now
            <a
              href="/category/trending"
              className="text-sm text-blue-600 hover:underline"
            >
              View All
            </a>
          </h2>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border-none focus:outline-none rounded-full shadow-md p-3 hover:scale-110 transition z-10"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border-none focus:outline-none rounded-full shadow-md p-3 hover:scale-110 transition z-10"
          >
            <FaChevronRight />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 whitespace-nowrap scrollbar-hide"
          >
            {dummyTrendingProducts.map((product) => (
              <div
                key={product.id}
                className="inline-block w-[300px] flex-shrink-0 transform transition hover:scale-105 hover:shadow-xl"
              >
                <ProductCard product={product} type="trending" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section (Grey background) */}
      <section className="">
        <div className="max-w-[1200px] mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get 10% off your first order and stay updated on our latest offers.
          </p>
          <div className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-[300px] border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

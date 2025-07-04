import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

const images = [
  {
    url: hero1,
    heading: 'Autumn Collection 2024',
    sub: 'Discover the latest styles for men, women, and accessories.',
  },
  {
    url: hero2,
    heading: 'New Accessories Drop',
    sub: 'Complete your look with trendy accessories.',
  },
  {
    url: hero3,
    heading: 'Elegant Fashion for Everyone',
    sub: 'Fresh styles for every season.',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full h-[500px] relative overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.heading}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          {images[currentIndex].heading}
        </h1>
        <p className="mb-6 text-base sm:text-lg">{images[currentIndex].sub}</p>
        <Link
          to="/category/new-arrivals"
          className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Prev Button (hidden on mobile) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-3 rounded-full hover:scale-110 transition z-30"
      >
        <FaChevronLeft />
      </button>

      {/* Next Button (hidden on mobile) */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-3 rounded-full hover:scale-110 transition z-30"
      >
        <FaChevronRight />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

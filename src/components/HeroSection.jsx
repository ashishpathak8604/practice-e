// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ image, heading, subheading }) => {
  return (
    <div className="w-full h-[400px] relative">
      <img
        src={image}
        alt={heading}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{heading}</h1>
        <p className="text-lg md:text-xl">{subheading}</p>
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, image, link }) => {
  return (
    <Link to={link}>
      <div
        className="relative w-full h-60 rounded-lg overflow-hidden shadow-md group cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

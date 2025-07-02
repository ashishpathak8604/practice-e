import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { name, rating, comment, date } = review;

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-3">
        {/* Avatar initials */}
        <div className="bg-blue-100 text-blue-600 font-semibold rounded-full w-10 h-10 flex items-center justify-center uppercase">
          {name?.charAt(0)}
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-md text-gray-800">{name}</h3>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mb-3 text-sm">{renderStars(rating)}</div>

      {/* Comment */}
      <p className="text-gray-700 leading-relaxed">{comment}</p>
    </div>
  );
};

export default ReviewCard;

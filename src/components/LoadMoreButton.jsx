// src/components/LoadMoreButton.jsx
import React from "react";

const LoadMoreButton = ({ onClick, loading, disabled, label = "LOAD MORE" }) => {
  const isDisabled = loading || disabled;

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`px-6 py-2 rounded-full text-white shadow-md transition duration-300 ease-in-out flex items-center gap-2
          ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-gray-800 to-black hover:shadow-lg hover:scale-105"
          }`}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : disabled ? (
          "No More Products"
        ) : (
          label
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton;

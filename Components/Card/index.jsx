import Link from "next/link";
import React from "react";

const Card = ({ title, price, description, category, image, rating, id }) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full h-64 object-cover" src={image} alt={title} />

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title.split(" ").slice(0,3).join(" ")}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1 mb-2">
          Category: <span className="capitalize">{category}</span>
        </p>

        <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
          {description.split(" ").slice(0,6).join(" ")}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            ${price}
          </span>
          <div className="flex items-center gap-1 text-yellow-400">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.4 12.545.9 8.91l6.01-.873L10 2.5l3.09 5.536 6.01.873-4.5 3.636 1.278 5.545z" />
            </svg>
            <span className="text-sm text-gray-800 dark:text-white">
              {rating?.rate}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-300">
              / {rating?.count} reviews
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href={`/products/${id}/${title.replaceAll(" ", "-")}`}>
            <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg">
              View Details
            </button>
          </Link>
          <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

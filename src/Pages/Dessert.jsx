import React, { useState } from "react";
import DessertData from "../data/DessertData";
import FilterSidebar from "./FilterSidebar";

const Dessert = ({ onAddToCart }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className="py-28 px-4 sm:px-6 bg-white text-gray-800 relative">
      <h2 className="text-3xl sm:text-5xl pl-28 font-bold text-center mb-6 sm:mb-10">
        Sweet Dessert Treats
      </h2>

      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-center mb-6">
        <button
          onClick={() => setShowSidebar(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow"
        >
          Show Filters
        </button>
      </div>

      {/* Slide-In Sidebar for Mobile */}
      {showSidebar && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowSidebar(false)}
          ></div>

          {/* Sidebar Panel */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 p-6 transition-transform duration-300 transform translate-x-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Filter</h3>
              <button
                onClick={() => setShowSidebar(false)}
                className="text-gray-500 hover:text-gray-800 text-lg"
              >
                ✕
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}

      {/* Desktop Sidebar + Grid */}
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Sidebar for Desktop */}
        <div className="hidden md:block md:w-1/4 sticky top-24 self-start h-fit">
          <FilterSidebar />
        </div>

        {/* Dessert Items Grid */}
        <div className="w-full md:w-3/4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DessertData.map((dessert) => (
            <div
              key={dessert.id}
              className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={dessert.image}
                alt={dessert.name}
                className="w-full h-48 sm:h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {dessert.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3">
                {dessert.description}
              </p>
              <p className="text-blue-600 font-bold text-sm sm:text-base mb-4">
                ₦{dessert.price}
              </p>
              <button
                onClick={() => onAddToCart(dessert)}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base py-2 px-4 sm:px-6 rounded-md transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dessert;

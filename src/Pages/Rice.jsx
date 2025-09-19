import React, { useState } from "react";
import RiceData from "../data/RiceData";
import FilterSidebar from "./FilterSidebar";

const Rice = ({ onAddToCart }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className="py-28 px-6 bg-white text-gray-800 relative">
      <h2 className="text-4xl font-bold pl-32 text-center mb-12">Our Rice Dishes</h2>

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
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowSidebar(false)}
          ></div>

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

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Sidebar for Desktop */}
        <div className="hidden md:block md:w-1/4 sticky top-24 self-start h-fit">
          <FilterSidebar />
        </div>

        {/* Rice Items Grid */}
        <div className="w-full md:w-3/4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {RiceData.map((rice) => (
            <div
              key={rice.id}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={rice.image}
                alt={rice.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{rice.name}</h3>
              <p className="text-gray-600 mb-3">{rice.description}</p>
              <p className="text-blue-600 font-bold mb-4">₦{rice.price}</p>
              <button
                onClick={() => onAddToCart(rice)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition"
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

export default Rice;

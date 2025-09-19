  import React, { useState } from "react";
  import PizzaData from "../data/PizzaData";
  import FilterSidebar from "./FilterSidebar";

  const Pizza = ({ pizza, onAdd }) => {
    const [showSidebar, setShowSidebar] = useState(false);
      const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    const newQty = quantity === 0 ? 1 : quantity;
    setQuantity(newQty);
    onAdd({ ...pizza, qty: newQty });
    window.alert("🍕 Item added to cart!");
  };

    return (
      <section className="py-16 px-4 sm:px-6 bg-white text-gray-800 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
          Delicious Pizza
        </h2>

        <div className="md:hidden flex justify-center mb-6">
          <button
            onClick={() => setShowSidebar(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow"
          >
            Show Filters
          </button>
        </div>

        {showSidebar && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setShowSidebar(false)}
            ></div>
            <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 p-6">
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
          <div className="hidden md:block md:w-1/4 sticky top-24 self-start h-fit">
            <FilterSidebar />
          </div>

          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PizzaData.map((pizza) => (
              <div
                key={pizza.id}
                className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{pizza.description}</p>
                <p className="text-blue-600 font-bold text-sm mb-4">₦{pizza.price.toFixed(2)}
                </p>
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm"
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

  export default Pizza;
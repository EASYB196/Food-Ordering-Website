import React, { useState } from "react";
import menuItems from "../data/MenuData";

const categories = ["All", "Pizza", "Burger", "Rice", "Chicken", "Dessert", "Pasta"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="flex flex-col md:flex-row py-20 px-6 bg-white text-gray-800 gap-8 max-w-7xl mx-auto">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full md:sticky top-20">
        <h3 className="text-xl font-bold mb-4">Filter by Category</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer p-2 rounded-md transition ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Menu Items */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{item.price}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

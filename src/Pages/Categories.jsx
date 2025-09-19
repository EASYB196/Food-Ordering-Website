import React from "react";
import { Link } from "react-router-dom";
import CategoryData from "../data/CategoryData";

// Dish data
import image1 from "../assets/image/grilled-chicken.jpg";
import image2 from "../assets/image/jollof-rice.jpg";
import image3 from "../assets/image/pizza.jpg";

const dishes = [
  { name: "Grilled Chicken", price: "₦2500", image: image1 },
  { name: "Jollof Rice", price: "₦2000", image: image2 },
  { name: "Pizza", price: "₦3000", image: image3 },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Category section */}
      <h2 className="text-4xl font-bold mb-14 text-gray-800">
        Browse by Category
      </h2>
      <div className="flex justify-center flex-wrap gap-8 mb-20">
        {CategoryData.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className="bg-blue-100 px-6 py-3 text-lg rounded-full text-blue-700 font-semibold hover:bg-blue-200 cursor-pointer transition"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Dishes section (without H2 heading) */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {dishes.map((dish, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:scale-105 transition"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{dish.name}</h3>
            <p className="text-blue-500 text-xl font-semibold">{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

// src/pages/SingleRicePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import RiceData from "../../data/RiceData";

const SingleRicePage = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const rice = RiceData.find((item) => item.id === parseInt(id));

  if (!rice) return <p className="text-center mt-20">Rice dish not found!</p>;

  return (
    <section className="min-h-screen py-28 px-6 bg-white text-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to Menu
      </button>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <img
          src={rice.image}
          alt={rice.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow"
        />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">{rice.name}</h2>
          <p className="text-gray-600 mb-6">{rice.description}</p>
          <p className="text-blue-600 text-xl font-semibold mb-4">
            ₦{rice.price}
          </p>
          <button
            onClick={() => onAddToCart(rice)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleRicePage;

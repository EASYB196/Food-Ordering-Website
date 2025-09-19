import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jollof from "../assets/image/jollof-rice.jpg";
import chicken from "../assets/image/BBQ Chicken.jpg";
import pizza from "../assets/image/pizza.jpg";
import burger from "../assets/image/Cheeseburger.webp";
import meatpie from "../assets/image/Meatpie.jpg";

// Array of food images
const foodImages = [jollof, chicken, pizza, burger, meatpie];

// Words to rotate in the sentence
const rotatingWords = ["Hot", "Fresh", "Fast"];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === foodImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) =>
        prev === rotatingWords.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section className="pt-40 pb-24 sm:pb-52 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Delicious Meals{" "}
            <span className="text-blue-500 transition-all duration-500 ease-in-out">
              {rotatingWords[currentWordIndex]}
            </span>{" "}
            Delivered To You
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0">
            Order fresh and tasty meals from your favorite local restaurant.
            Fast delivery. Affordable prices.
          </p>
          <Link to="/menu">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg sm:text-xl hover:bg-blue-600 transition">
              Explore Menu
            </button>
          </Link>
        </div>

        {/* Right Plate + Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 animate-spin-slow">
            <div
              className="w-full h-full rounded-full bg-no-repeat bg-cover bg-center p-1"
              style={{ backgroundImage: `url('../assets/image/plate.webp')` }}
            >
              <img
                src={foodImages[currentImageIndex]}
                alt="Rotating Food"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

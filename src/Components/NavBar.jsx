// src/components/NavBar.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { NavBarData } from "../data/NavBarData";

const NavBar = ({ toggleCart, cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-500">
          <a href="/">Foodie</a>
        </h1>

        {/* Centered Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 font-semibold">
            {NavBarData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="hover:text-blue-500 text-xl transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart Icon (Right side) */}
        <div className="hidden md:flex items-center">
          <button className="relative ml-4" onClick={toggleCart}>
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-3xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col space-y-4 font-semibold">
            {NavBarData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="block hover:text-blue-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="relative" onClick={toggleCart}>
                <FaShoppingCart className="text-2xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

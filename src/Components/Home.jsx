import React from "react";
import Navbar from "./NavBar";
import Hero from "../Pages/Hero";
import Categories from "../Pages/Categories";
import FeaturedDishes from "../Pages/FeaturedDishes";
import Faqs from "../Pages/Faqs";

import FilterSidebar from "../Pages/FilterSidebar";

// import JollofRice from "../Pages/Rice/JollofRice";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />

      <Hero />
      <Categories />
      {/* <FeaturedDishes /> */}
      <Faqs />
    </div>
  );
};

export default Home;

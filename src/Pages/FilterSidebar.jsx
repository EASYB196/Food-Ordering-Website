import React from "react";
import { Link, useLocation } from "react-router-dom";

const FilterSidebar = () => {
  const filters = ["All",  "Burger", "Pizza", "Chicken", "Rice", "Dessert"];
  const location = useLocation();

  const getPath = (filter) => {
    if (filter === "All") return "/";
    return `/${filter.toLowerCase()}`;
  };

  return (
    <div className="space-y-3">
      {/* <h3 className="text-xl font-bold text-gray-700 mb-4">Filter</h3> */}
      {filters.map((filter) => {
        const path = getPath(filter);
        const isActive = location.pathname === path;
        return (
          <Link
            key={filter}
            to={path}
            className={`block w-full text-left font-semibold text-xl  px-4 py-2 rounded ${
              isActive
                ? "bg-blue-500 text-white "
                : "hover:bg-gray-100 text-gray-800"
            }`}
          >
            {filter}
          </Link>
        );
      })}
    </div>
  );
};

export default FilterSidebar;

import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", image: "https://via.placeholder.com/300", icon: "🔌" },
  { name: "Clothing", image: "https://via.placeholder.com/300", icon: "👗" },
  { name: "Home Appliances", image: "https://via.placeholder.com/300", icon: "🧑‍🍳" },
  { name: "Books", image: "https://via.placeholder.com/300", icon: "📚" },
  { name: "Toys", image: "https://via.placeholder.com/300", icon: "🧸" },
  { name: "Beauty", image: "https://via.placeholder.com/300", icon: "💄" },
];

const Categories = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Browse Our Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link to={`/category/${category.name.toLowerCase()}`} key={category.name}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                  <span className="text-4xl mb-4">{category.icon}</span>
                  <h3 className="text-2xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

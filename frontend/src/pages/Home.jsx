import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className="w-full">
      {/* 🔔 Offer Marquee */}
      <div className="bg-yellow-100 py-2">
        <marquee
          className="text-sm md:text-base font-semibold text-purple-800"
          behavior="scroll"
          direction="left"
          scrollamount="6"
        >
          🚨 Mega Sale! Up to 70% off on Electronics | 🛍️ Free Delivery on
          orders above ₹499 | 🎉 New Year Offer: Use code NEW50 to get ₹50 off!
        </marquee>
      </div>

      {/* 🚀 Hero Banner */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-700 to-indigo-800 text-transparent bg-clip-text">
          Welcome to Kartzilla
        </h1>

        <h1 className="text-3xl font-bold text-purple-950">
          <Typewriter
            words={['Shop Smart', 'Deals You Love', 'Fashion That Speaks']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
  <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-purple-600 transition duration-300">
    Shop Now
  </button>
  <a
    href="#categories"
    className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
  >
    Explore More ↓
  </a>
</div>

      </section>

      {/* 🧭 Categories */}
      <section id="categories" className="py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Electronics", "Fashion", "Grocery", "Accessories"].map((cat, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl mb-2">📦</div>
              <p className="font-medium">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ Featured Products */}
      <FeaturedProducts />

      {/* 📬 Newsletter Signup */}
      <section className="py-12 px-4 bg-purple-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-gray-700">Get the latest offers in your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

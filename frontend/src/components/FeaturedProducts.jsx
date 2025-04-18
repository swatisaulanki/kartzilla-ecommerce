// src/components/FeaturedCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Men's Cotton T-Shirt",
    category: "Clothing",
    description: "Comfortable and stylish cotton t-shirt for everyday wear.",
    price: 499,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    category: "Electronics",
    description: "Bluetooth headphones with high-quality sound and long battery life.",
    price: 1599,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215",
  },
  {
    id: 3,
    title: "Non-stick Frying Pan",
    category: "Kitchen",
    description: "Durable non-stick frying pan for everyday cooking.",
    price: 799,
    image: "https://images.unsplash.com/photo-1584270354949-1b1a74fd84c9",
  },
  {
    id: 4,
    title: "LED Desk Lamp",
    category: "Home",
    description: "Stylish LED desk lamp with adjustable brightness.",
    price: 999,
    image: "https://images.unsplash.com/photo-1602526218250-098fbd57c8e0",
  },
  {
    id: 5,
    title: "Yoga Mat",
    category: "Fitness",
    description: "Non-slip yoga mat perfect for workouts and stretching.",
    price: 699,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
  {
    id: 6,
    title: "Smart Watch",
    category: "Electronics",
    description: "Track fitness and stay connected with this stylish smart watch.",
    price: 2599,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    id: 7,
    title: "Kitchen Knife Set",
    category: "Kitchen",
    description: "High-quality stainless steel kitchen knife set.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1611078489935-eee28c088234",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    category: "Electronics",
    description: "Compact and powerful Bluetooth speaker.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1581291518586-01c24c720b9e",
  },
];

export default function FeaturedCarousel() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Custom Nav Buttons */}
        <div className="swiper-button-prev-custom absolute left-[-30px] top-1/2 z-10 transform -translate-y-1/2 text-purple-600 hover:text-purple-800 text-2xl cursor-pointer">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next-custom absolute right-[-30px] top-1/2 z-10 transform -translate-y-1/2 text-purple-600 hover:text-purple-800 text-2xl cursor-pointer">
          <FaChevronRight />
        </div>

        {/* HIDE the pagination dots with inline style */}
        <style>
          {`
            .swiper-pagination {
              display: none !important;
            }
          `}
        </style>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <img
                  src={`${product.image}?w=400&h=300&fit=crop`}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-gray-700 text-sm mt-1 mb-2">{product.description}</p>
                <p className="font-semibold text-purple-600 mb-3">₹{product.price}</p>
                <button className="mt-auto bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
            {/* Explore More Button */}
            <div className="mt-10 text-center">
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
          Explore More
        </button>
      </div>

    </section>
  );
}

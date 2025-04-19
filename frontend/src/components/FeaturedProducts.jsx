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
    image: "https://images-cdn.ubuy.ae/64f68464c4e480173115d1b8-billionhats-12-pack-plus-size-men-cotton.jpg",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    category: "Electronics",
    description: "Bluetooth headphones with high-quality sound and long battery life.",
    price: 1599,
    image: "https://static.independent.co.uk/2024/10/30/12/Wireless-headphones.jpg?width=1200&height=900&fit=crop",
  },
  {
    id: 3,
    title: "Non-stick Frying Pan",
    category: "Kitchen",
    description: "Durable non-stick frying pan for everyday cooking.",
    price: 799,
    image: "https://m.media-amazon.com/images/I/71xOErYhWwL.jpg",
  },
  {
    id: 4,
    title: "LED Desk Lamp",
    category: "Home",
    description: "Stylish LED desk lamp with adjustable brightness.",
    price: 999,
    image: "https://www.lepower-tec.com/cdn/shop/files/lepower-tec-desk-lamp-for-office-black.jpg?v=1722496317&width=1600",
  },
  {
    id: 5,
    title: "Yoga Mat",
    category: "Fitness",
    description: "Non-slip yoga mat perfect for workouts and stretching.",
    price: 699,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
  },
  {
    id: 6,
    title: "Smart Watch",
    category: "Electronics",
    description: "Track fitness and stay connected with this stylish smart watch.",
    price: 2599,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFungyiT18qscuHL0ArhJVxjNpr-zySy1vjQ&s",
  },
  {
    id: 7,
    title: "Kitchen Knife Set",
    category: "Kitchen",
    description: "High-quality stainless steel kitchen knife set.",
    price: 1299,
    image: "https://pyxis.nymag.com/v1/imgs/ecf/a00/580034ece9e907261653e86bc0f166eb8d.rdeep-vertical.w245.jpg",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    category: "Electronics",
    description: "Compact and powerful Bluetooth speaker.",
    price: 1199,
    image: "https://cpimg.tistatic.com/06727102/b/4/Bluei-Rocker-R1-High-Bass-5-0-Bluetooth-Version-with-Built-in-FM-Radio-Aux-input-Call-Function-SD-Card-Support-Portable-Bluetooth-Speaker.jpg",
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

        {/* Hide pagination dots */}
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
                  src={product.image}
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

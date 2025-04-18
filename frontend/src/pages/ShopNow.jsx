import React, { useState } from 'react'

const products = [
  {
    id: 1,
    title: 'Stylish Sneakers',
    category: 'Footwear',
    price: 1499,
    image:
      'https://images.unsplash.com/photo-1582735680467-1e62b8e2b4c3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Trendy T-Shirt',
    category: 'Clothing',
    price: 799,
    image:
      'https://images.unsplash.com/photo-1618354691546-4f3dbcefb2e9?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Wireless Earbuds',
    category: 'Gadgets',
    price: 1999,
    image:
      'https://images.unsplash.com/photo-1580894908360-4f35fd31b8d2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Smart Watch',
    category: 'Accessories',
    price: 2999,
    image:
      'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Casual Jacket',
    category: 'Clothing',
    price: 2299,
    image:
      'https://images.unsplash.com/photo-1593032457869-9f26d5ff9b1a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Leather Wallet',
    category: 'Accessories',
    price: 499,
    image:
      'https://images.unsplash.com/photo-1616627781929-f4eb9975fd0f?auto=format&fit=crop&w=600&q=80',
  },
]

const ShopNow = () => {
  const [categoryFilter, setCategoryFilter] = useState('All')

  const filteredProducts =
    categoryFilter === 'All'
      ? products
      : products.filter((product) => product.category === categoryFilter)

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Shop the Latest Trends
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Curated just for you — explore fashion, gadgets & more.
        </p>
      </section>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="md:col-span-1 bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Categories</h2>
          <div className="space-y-2">
            {['All', 'Clothing', 'Footwear', 'Accessories', 'Gadgets'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                  categoryFilter === cat
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-indigo-100 text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="rounded-t-2xl w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="mt-3">
                  <p className="text-indigo-600 font-bold text-lg mb-2">₹{product.price}</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default ShopNow

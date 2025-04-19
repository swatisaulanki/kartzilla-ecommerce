import React from 'react';

const Offer = () => {
  const offers = [
    {
      title: '50% Off on Electronics',
      description: 'Get 50% off on selected electronics. Limited time offer!',
      code: 'ELECTRO50',
      expiration: '2025-05-01',
      image: 'https://via.placeholder.com/400x300.png?text=Electronics',
    },
    {
      title: 'Buy 1 Get 1 Free on Fashion',
      description: 'Buy one get one free on selected fashion items.',
      code: 'FASHIONBOGO',
      expiration: '2025-05-15',
      image: 'https://via.placeholder.com/400x300.png?text=Fashion',
    },
    {
      title: '30% Off on Home Decor',
      description: 'Decorate your home with 30% off on home decor items.',
      code: 'HOME30',
      expiration: '2025-05-20',
      image: 'https://via.placeholder.com/400x300.png?text=Home+Decor',
    },
    {
      title: '10% Cashback on Groceries',
      description: 'Get 10% cashback on your grocery shopping.',
      code: 'GROCERY10',
      expiration: '2025-06-01',
      image: 'https://via.placeholder.com/400x300.png?text=Groceries',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Special Offers</h2>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden">
            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{offer.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{offer.description}</p>
              <div className="mt-4">
                <span className="block text-gray-700 font-semibold">Code: <span className="text-blue-500">{offer.code}</span></span>
                <span className="block text-sm text-gray-500">Expires on: {offer.expiration}</span>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition w-full">
                Apply Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;

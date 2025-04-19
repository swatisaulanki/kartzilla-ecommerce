import React from 'react';

const AccountPage = () => {
  const user = {
    avatar: 'https://via.placeholder.com/150',
    name: 'SwatiKrush',
    email: 'swatikrush@email.com',
    orders: 5,
    wishlist: 3,
    reviews: 10,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0 md:h-full">
        <div className="text-center mb-8">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="mt-4 text-xl font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        <nav>
          <ul className="space-y-6 text-lg font-medium">
            <li><a href="#" className="block hover:text-blue-500">Profile</a></li>
            <li><a href="#" className="block hover:text-blue-500">My Orders</a></li>
            <li><a href="#" className="block hover:text-blue-500">Settings</a></li>
            <li><a href="#" className="block hover:text-blue-500">Logout</a></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-8 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to Your Account</h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-medium text-gray-600">Orders</h4>
            <p className="text-3xl font-bold text-blue-500">{user.orders}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-medium text-gray-600">Wishlist</h4>
            <p className="text-3xl font-bold text-blue-500">{user.wishlist}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-medium text-gray-600">Reviews</h4>
            <p className="text-3xl font-bold text-blue-500">{user.reviews}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => alert('Edit Profile functionality goes here')}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Edit Profile
          </button>
          <button
            onClick={() => alert('Change Password functionality goes here')}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

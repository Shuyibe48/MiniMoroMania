import React from 'react';
import { FaUser } from 'react-icons/fa';
// import logo from './logo.png';

const Blog = () => {
    const loggedIn = false
    const username = null

  const renderProfile = () => {
    if (loggedIn) {
      return (
        <div className="flex items-center">
          <div className="relative">
            <img
              src="/path/to/profile-picture.png"
              alt="Profile Picture"
              className="w-8 h-8 rounded-full"
            />
            <span className="absolute text-xs bg-gray-800 text-white px-2 py-1 rounded-md bottom-0 right-0 transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {username}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <a href="/login" className="flex items-center">
          <FaUser className="mr-1" />
          Login
        </a>
      );
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="Website Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">MiniMotorMania</span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/toys">All Toys</a>
          </li>
          {loggedIn && (
            <>
              <li>
                <a href="/my-toys">My Toys</a>
              </li>
              <li>
                <a href="/add-toy">Add A Toy</a>
              </li>
            </>
          )}
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>{renderProfile()}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Blog;

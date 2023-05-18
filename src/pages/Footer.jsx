import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="MiniMotorMania" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">MiniMotorMania</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/minimotormania">
              <FaFacebook className="text-white hover:text-blue-500" />
            </a>
            <a href="https://www.twitter.com/minimotormania">
              <FaTwitter className="text-white hover:text-blue-400" />
            </a>
            <a href="https://www.instagram.com/minimotormania">
              <FaInstagram className="text-white hover:text-pink-500" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              Address: 1234 Example Street, City, Country
              <br />
              Email: info@minimotormania.com
              <br />
              Phone: +1 234 567 890
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/minimotormania">
                <FaFacebook className="text-white hover:text-blue-500" />
              </a>
              <a href="https://www.twitter.com/minimotormania">
                <FaTwitter className="text-white hover:text-blue-400" />
              </a>
              <a href="https://www.instagram.com/minimotormania">
                <FaInstagram className="text-white hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MiniMotorMania. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

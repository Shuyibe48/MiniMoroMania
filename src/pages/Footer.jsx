import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#ffc800] text-black px-4 lg:px-0">
      <div className="container mx-auto py-8">
        <div className="lg:flex items-center justify-between mb-4">
          <div className="flex mb-4 lg:mb-0 items-center">
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="MiniMotorMania" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">MiniMotorMania</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/minimotormania">
              <FaFacebook className="text-black hover:text-white" />
            </a>
            <a href="https://www.twitter.com/minimotormania">
              <FaTwitter className="text-black hover:text-white" />
            </a>
            <a href="https://www.instagram.com/minimotormania">
              <FaInstagram className="text-black hover:text-white" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-800">
              Address: 1234 Dhanmondi Street, Dhaka, Bangladesh 
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
                <FaFacebook className="text-black hover:text-white" />
              </a>
              <a href="https://www.twitter.com/minimotormania">
                <FaTwitter className="text-black hover:text-white" />
              </a>
              <a href="https://www.instagram.com/minimotormania">
                <FaInstagram className="text-black hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 py-4">
        <div className="container mx-auto text-center">
          <p className="text-black">
            &copy; {new Date().getFullYear()} MiniMotorMania. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

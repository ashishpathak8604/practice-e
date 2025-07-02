import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-4 gap-8 pb-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">LUXE</h2>
          <p className="text-sm">
            Premium fashion and lifestyle products for the modern individual.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Track Order</li>
            <li>Size Guide</li>
            <li>Gift Cards</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiMail /> support@luxe.com
            </li>
            <li className="flex items-center gap-2">
              <FiPhone /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> 123 Fashion St, NY 10001
            </li>
            <li className="flex items-center gap-2">
              <FiClock /> Mon - Fri: 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter + Socials */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Newsletter */}
        

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaPinterest className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-800 text-center py-4 text-sm">
        © 2024 LUXE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

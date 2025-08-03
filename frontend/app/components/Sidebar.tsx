"use client";
import { useState } from 'react';
import { FiHome, FiInfo, FiShoppingCart, FiMail, FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-gray-900 text-white min-h-screen ${isOpen ? "w-64" : "w-20"} transition-all duration-300 ease-in-out`}>
      <div className="flex justify-between items-center p-4">
        <h1 className={`text-2xl font-bold ${isOpen ? "block" : "hidden"}`}>Brand</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <nav className="mt-10">
        <a href="#" className="flex items-center py-3 px-4 text-lg hover:bg-gray-700 transition-colors duration-200">
          <FiHome size={24} />
          <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Home</span>
        </a>
        <a href="#" className="flex items-center py-3 px-4 text-lg hover:bg-gray-700 transition-colors duration-200">
          <FiShoppingCart size={24} />
          <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Products</span>
        </a>
        <a href="#" className="flex items-center py-3 px-4 text-lg hover:bg-gray-700 transition-colors duration-200">
          <FiInfo size={24} />
          <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>About</span>
        </a>
        <a href="#" className="flex items-center py-3 px-4 text-lg hover:bg-gray-700 transition-colors duration-200">
          <FiMail size={24} />
          <span className={`ml-4 ${isOpen ? "block" : "hidden"}`}>Contact</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
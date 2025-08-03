"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className={`text-3xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>eCommerce</Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className={`hover:text-gray-500 ${isScrolled ? 'text-black' : 'text-white'}`}>Home</Link>
          <Link href="/products" className={`hover:text-gray-500 ${isScrolled ? 'text-black' : 'text-white'}`}>Products</Link>
          <Link href="/about" className={`hover:text-gray-500 ${isScrolled ? 'text-black' : 'text-white'}`}>About</Link>
          <Link href="/contact" className={`hover:text-gray-500 ${isScrolled ? 'text-black' : 'text-white'}`}>Contact</Link>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input type="text" placeholder="Search..." className={`bg-transparent border-b-2 ${isScrolled ? 'border-black text-black' : 'border-white text-white'} focus:outline-none`} />
            <FiSearch className={`absolute right-2 top-1 ${isScrolled ? 'text-black' : 'text-white'}`} />
          </div>
          <Link href="/cart" className={`hover:text-gray-500 ${isScrolled ? 'text-black' : 'text-white'}`}><FiShoppingCart size={24} /></Link>
          <Link href="/login" className={`hover:text-gray-500 ${isScrolled ? 'text-black' : 'text-white'}`}><FiUser size={24} /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
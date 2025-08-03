import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-2xl mb-4">eCommerce</h3>
          <p className="text-gray-400">The best products at the best prices. We are committed to providing high-quality products and excellent customer service.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">Products</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@ecommerce.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 eCommerce St, Web City, 45678</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FiFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FiTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FiInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><FiLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        <p>&copy; 2023 eCommerce. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import { FiUsers, FiTarget, FiAward } from 'react-icons/fi';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-5xl font-bold text-center mb-12">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <FiUsers size={64} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Team</h2>
            <p className="text-gray-600">We have a dedicated team of professionals who are passionate about what they do.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <FiTarget size={64} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-600">Our mission is to provide the best products and services to our customers.</p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <FiAward size={64} className="mx-auto text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-600">Our vision is to be the most trusted e-commerce platform in the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

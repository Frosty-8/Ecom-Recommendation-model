import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <Image src={product.image} alt={product.name} width={500} height={300} className="object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-700 text-base mb-4">{product.price}</p>
        <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transition-all duration-300">
          <FiShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
import Image from 'next/image';
import { FiShoppingCart, FiStar } from 'react-icons/fi';

const ProductDetailsPage = () => {
  // This is a placeholder for the actual product data
  const product = {
    name: 'Product Name',
    price: '$99.99',
    description: 'This is a detailed description of the product. It highlights the key features and benefits.',
    image: '/next.svg',
    reviews: [
      { user: 'User 1', rating: 5, comment: 'Excellent product!' },
      { user: 'User 2', rating: 4, comment: 'Good value for money.' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image src={product.image} alt={product.name} width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-600 mb-4">{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full flex items-center transition-all duration-300">
            <FiShoppingCart className="mr-2" /> Add to Cart
          </button>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="font-bold">{review.user}</p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

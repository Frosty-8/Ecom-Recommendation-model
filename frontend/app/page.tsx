import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

const products = [
  { name: 'Product 1', price: '$10', image: '/next.svg' },
  { name: 'Product 2', price: '$20', image: '/next.svg' },
  { name: 'Product 3', price: '$30', image: '/next.svg' },
  { name: 'Product 4', price: '$40', image: '/next.svg' },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
import { useCart } from "../context/cartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="h-64 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          {product.category}
        </span>
        
        <h3 className="text-lg font-semibold mt-2 mb-2 line-clamp-2 min-h-[56px]">
          {product.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
          >
            Add to Cart
          </button>
        </div>
        
        <div className="mt-2 flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-gray-600 ml-1">
            {product.rating?.rate || 'N/A'} ({product.rating?.count || 0})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
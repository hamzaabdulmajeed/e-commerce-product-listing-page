import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/cartContext';

const Navbar = () => {
  const { cartCount } = useCart();
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-bold hover:text-blue-200 transition-colors">
            🛍️ ShopHub
          </Link>
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-lg font-medium hover:text-blue-200 transition-colors ${
                location.pathname === '/' ? 'border-b-2 border-white' : ''
              }`}
            >
              Products
            </Link>
            
            <Link
              to="/cart"
              className={`relative flex items-center gap-2 text-lg font-medium hover:text-blue-200 transition-colors ${
                location.pathname === '/cart' ? 'border-b-2 border-white' : ''
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
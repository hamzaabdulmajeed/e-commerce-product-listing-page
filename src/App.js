import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import Navbar from './components/navbar';
import Home from './pages/home';
import CartPage from './pages/cartPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
         <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2024 ShopHub. All rights reserved.</p>
              <p className="text-sm text-gray-400 mt-2">
                Built with React, Tailwind CSS & Fake Store API
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
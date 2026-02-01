import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react'; // Changed icon to Command for a more abstract/tech look
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-2' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2">
             {/* Logo updated to be simple text based on reference */}
            <span className="font-display font-bold text-2xl tracking-tighter text-gray-900">
              * Easemed
            </span>
            <span className="hidden sm:inline-block text-[10px] font-medium bg-gray-100 px-2 py-0.5 rounded-full text-gray-500 uppercase tracking-wider">
              pro
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <a href="#solutions" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="#login" className="px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
              Log in
            </a>
            <Button size="sm" variant="primary" className="font-semibold">
              Register
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Features</a>
            <a href="#solutions" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Solutions</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">Pricing</a>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <a href="#login" className="block text-center text-sm font-medium text-gray-600">Log in</a>
              <Button className="w-full justify-center">Register</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
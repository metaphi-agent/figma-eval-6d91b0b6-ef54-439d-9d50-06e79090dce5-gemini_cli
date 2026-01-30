import React, { useState } from 'react';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative py-6 px-4 md:px-20 max-w-[1440px] mx-auto w-full z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-primary text-[50px] font-semibold leading-[30px] font-inter">Biccas</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-text-dark font-medium text-base hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-text-grey font-medium text-base hover:text-primary transition-colors">Feature</a>
          <a href="#" className="text-text-grey font-medium text-base hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="text-text-grey font-medium text-base hover:text-primary transition-colors">Product</a>
          <a href="#" className="text-text-grey font-medium text-base hover:text-primary transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-text-grey font-medium text-base hover:text-text-dark transition-colors bg-transparent border-none cursor-pointer">
            Login
          </button>
          <Button variant="primary">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center gap-6 py-8 px-4 rounded-b-2xl z-50">
          <a href="#" className="text-text-dark font-medium text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="text-text-grey font-medium text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Feature</a>
          <a href="#" className="text-text-grey font-medium text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#" className="text-text-grey font-medium text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Product</a>
          <a href="#" className="text-text-grey font-medium text-lg hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>FAQ</a>
          
          <div className="flex flex-col items-center gap-4 w-full mt-4 border-t border-gray-100 pt-6">
            <button className="text-text-grey font-medium text-lg hover:text-text-dark transition-colors bg-transparent border-none cursor-pointer">
              Login
            </button>
            <Button variant="primary" fullWidth className="max-w-[200px]">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-20 max-w-[1440px] mx-auto w-full">
      <div className="flex items-center">
        <span className="text-primary text-[50px] font-semibold leading-[30px] font-inter">Biccas</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-text-dark font-medium text-base hover:text-primary transition-colors">Home</a>
        <a href="#" className="text-text-grey font-medium text-base hover:text-primary transition-colors">Feature</a>
        <a href="#" className="text-text-grey font-medium text-base hover:text-primary transition-colors">Pricing</a>
        <a href="#" className="text-text-grey font-medium text-base hover:text-primary transition-colors">Product</a>
        <a href="#" className="text-text-grey font-medium text-base hover:text-primary transition-colors">FAQ</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-text-grey font-medium text-base hover:text-text-dark transition-colors bg-transparent border-none cursor-pointer">
          Login
        </button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;

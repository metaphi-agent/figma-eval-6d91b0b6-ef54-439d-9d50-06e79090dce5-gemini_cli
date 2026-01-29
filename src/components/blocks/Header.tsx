import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', active: true },
    { name: 'Product', active: false },
    { name: 'FAQ', active: false },
    { name: 'Blog', active: false },
    { name: 'About Us', active: false },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-[50px] font-semibold text-primary leading-[30px] tracking-tight">
              Biccas
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`text-lg font-medium transition-colors ${
                  item.active ? 'text-black' : 'text-[#A6A6A6] hover:text-black'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-lg font-medium text-[#A6A6A6] hover:text-black transition-colors">
              Login
            </button>
            <Button className="!rounded-[10px] px-5 py-2">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-black transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`text-lg font-medium ${
                  item.active ? 'text-black' : 'text-[#A6A6A6]'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <button className="text-lg font-medium text-[#A6A6A6] text-left">
              Login
            </button>
            <Button className="w-full">
              Sign Up
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
};
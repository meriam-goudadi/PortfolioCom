import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-playfair font-bold">
          <span className="text-primary">Mériam</span> Goudadi
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="navbar-link">À propos</a></li>
            <li><a href="#portfolio" className="navbar-link">Portfolio</a></li>
            <li><a href="#skills" className="navbar-link">Compétences</a></li>
            <li><a href="#testimonials" className="navbar-link">Témoignages</a></li>
            <li><a href="#contact" className="navbar-link">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-zinc-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#about" className="block py-2 navbar-link" onClick={toggleMenu}>À propos</a></li>
              <li><a href="#portfolio" className="block py-2 navbar-link" onClick={toggleMenu}>Portfolio</a></li>
              <li><a href="#skills" className="block py-2 navbar-link" onClick={toggleMenu}>Compétences</a></li>
              <li><a href="#testimonials" className="block py-2 navbar-link" onClick={toggleMenu}>Témoignages</a></li>
              <li><a href="#contact" className="block py-2 navbar-link" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
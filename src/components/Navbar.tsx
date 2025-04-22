
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToursDropdown, setShowToursDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (showToursDropdown) setShowToursDropdown(false);
  };

  const toggleToursDropdown = () => {
    setShowToursDropdown(!showToursDropdown);
  };

  return (
    <nav className="bg-white h-navbar fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-burnt-orange font-display text-xl md:text-2xl font-bold">
          Capital Hill Tours
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ink-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-ink-black hover:text-burnt-orange transition-colors">
            Home
          </Link>
          
          <div className="relative">
            <button 
              className="flex items-center text-ink-black hover:text-burnt-orange transition-colors"
              onClick={toggleToursDropdown}
              onMouseEnter={() => setShowToursDropdown(true)}
              onMouseLeave={() => setShowToursDropdown(false)}
            >
              Tours <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            
            {showToursDropdown && (
              <div 
                className="absolute top-full left-0 bg-white shadow-md rounded min-w-[200px] py-2 z-50"
                onMouseEnter={() => setShowToursDropdown(true)}
                onMouseLeave={() => setShowToursDropdown(false)}
              >
                <Link 
                  to="/rratour" 
                  className="block px-4 py-2 hover:bg-neutral-gray text-ink-black hover:text-burnt-orange transition-colors"
                >
                  Runnin' Round Austin Tour
                </Link>
                <Link 
                  to="/cratour" 
                  className="block px-4 py-2 hover:bg-neutral-gray text-ink-black hover:text-burnt-orange transition-colors"
                >
                  Cruisin' Round Austin Tour
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/guides" className="text-ink-black hover:text-burnt-orange transition-colors">
            Guides
          </Link>
          
          <Link to="/contact" className="text-ink-black hover:text-burnt-orange transition-colors">
            Contact
          </Link>
        </div>

        {/* Book Now Button */}
        <a 
          href="https://book.peek.com/s/65b1bfad-4f4c-4c3d-9b59-13c3d8c9e900?" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block btn-primary"
        >
          BOOK NOW
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-navbar left-0 right-0 shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-ink-black hover:text-burnt-orange transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            
            <div>
              <button 
                className="flex items-center text-ink-black hover:text-burnt-orange transition-colors"
                onClick={toggleToursDropdown}
              >
                Tours <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {showToursDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link 
                    to="/rratour" 
                    className="block text-ink-black hover:text-burnt-orange transition-colors"
                    onClick={toggleMenu}
                  >
                    Runnin' Round Austin Tour
                  </Link>
                  <Link 
                    to="/cratour" 
                    className="block text-ink-black hover:text-burnt-orange transition-colors"
                    onClick={toggleMenu}
                  >
                    Cruisin' Round Austin Tour
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/guides" className="text-ink-black hover:text-burnt-orange transition-colors" onClick={toggleMenu}>
              Guides
            </Link>
            
            <Link to="/contact" className="text-ink-black hover:text-burnt-orange transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            
            <a 
              href="https://book.peek.com/s/65b1bfad-4f4c-4c3d-9b59-13c3d8c9e900?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-center mt-4"
              onClick={toggleMenu}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

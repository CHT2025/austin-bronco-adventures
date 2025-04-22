
import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-neutral-gray">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <Link to="/" className="text-burnt-orange font-display text-2xl font-bold">
            Capital Hill Tours
          </Link>
          
          {/* Tagline */}
          <p className="text-ink-black">
            Capital Hill Tours · Est. 2024 · Made with a passion for adventure
          </p>
          
          {/* Contact Info */}
          <div className="text-ink-black space-y-2">
            <p>1234 Hill Country Boulevard, Austin, TX 78746</p>
            <p>
              <a href="tel:+15122982653" className="hover:text-burnt-orange transition-colors">
                +1 512-298-2653
              </a>
            </p>
            <p>
              <a href="mailto:capitalhilltours@gmail.com" className="hover:text-burnt-orange transition-colors">
                capitalhilltours@gmail.com
              </a>
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/capitalhilltours" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-ink-black hover:text-burnt-orange transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://youtube.com/@capitalhilltours" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Subscribe to our YouTube channel"
              className="text-ink-black hover:text-burnt-orange transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

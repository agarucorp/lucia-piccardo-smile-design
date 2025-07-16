
import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoLutcy from './assets/logoLutcy.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    // { name: 'Home', href: '#home' },
    { name: 'Servicios', href: '#services' },
    // { name: 'Location', href: '#location' },
    { name: 'Preguntas frecuentes', href: '#faq' },
    { name: 'Acerca de', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg w-full">
      {/* Top bar with contact info */}
      <div className="bg-healthcare-blue text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-sm">
          {/* Mobile layout: only phone */}
          <div className="md:hidden w-full flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a 
                href="https://wa.me/5491132677714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline transition-colors duration-200"
              >
                <span>+54 9 11 3267-7714</span>
              </a>
            </div>
          </div>
          
          {/* Desktop layout: all items in a row */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a 
                href="https://wa.me/5491132677714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline transition-colors duration-200"
              >
                <span>+54 9 11 3267-7714</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <a 
                href="https://maps.google.com/?q=Ruiz+Huidobro+3059,+Saavedra,+CABA,+Argentina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline transition-colors duration-200"
              >
                <span>Ruiz Huidobro 3059, Saavedra, CABA</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Viernes 14:00-20:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo y menú hamburguesa mobile centrado */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:hidden relative">
            <img
              src={logoLutcy}
              alt="Logo Lutcy"
              className="w-full h-auto max-h-24 object-contain scale-50"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute right-0 top-1/2 -translate-y-1/2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-healthcare-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-healthcare-blue"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
          {/* Logo desktop alineado a la izquierda */}
          <div className="flex-shrink-0 hidden md:flex items-center space-x-2 md:justify-start md:w-auto">
            <img
              src={logoLutcy}
              alt="Logo Lutcy"
              className="w-50 h-auto max-h-24 object-contain scale-50 -ml-2"
            />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 pr-4 sm:pr-6 lg:pr-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-healthcare-blue px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-healthcare-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-5 left-1/2 -translate-x-1/2 max-w-7xl w-full z-[9998] bg-white border-b border-gray-100 shadow-lg mt-20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-healthcare-blue block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

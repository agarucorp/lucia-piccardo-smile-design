
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';

// Botón flotante de Instagram

const Footer = () => {
  return (
    <>
      <footer className="bg-healthcare-dark-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {/* Company Info */}
            <div className="md:w-2/4">
              <h3 className="text-2xl font-bold mb-4">Od. Lucía Piccardo</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Brindando atención odontológica de excelencia y con calidez humana. Tu sonrisa es nuestra prioridad y nos comprometemos a ayudarte a lograr una salud bucal óptima en un entorno moderno y confortable.
              </p>
              <div className="mt-8">
                <span className="block text-white font-semibold mb-2">Seguinos en:</span>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/od.luciapiccardo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-8 w-8 text-white hover:opacity-80 transition-opacity duration-200" />
                  </a>
                  <a href="https://ar.linkedin.com/in/lucia-piccardo-402368269?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-8 w-8 text-white hover:opacity-80 transition-opacity duration-200" />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Info */}
            <div className="md:w-1/4 md:ml-auto">
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 text-blue-100">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+54 9 11 3267-7714</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>lucia.piccardo@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span>Ruiz Huidobro 3059, Saavedra<br />CABA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-100">
            <p className="pt-4">&copy; Powered by <a href="https://www.agarucorp.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200">AgaruCorp</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

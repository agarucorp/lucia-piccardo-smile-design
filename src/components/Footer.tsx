
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-healthcare-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dra. Lucía Piccardo</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Brindando atención odontológica de excelencia y con calidez humana. Tu sonrisa es nuestra prioridad y nos comprometemos a ayudarte a lograr una salud bucal óptima en un entorno moderno y confortable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Inicio</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">Acerca de</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Servicios</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">Preguntas frecuentes</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+54 9 11 3267-7714</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@drluciapiccardo.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <span>Ruiz Huidobro 3059, depto 601<br />CABA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Se eliminó el bloque de Servicios, Horarios y Enlaces rápidos */}

        <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-100">
          <p className="pt-4">&copy; Powered by AgaruCorp</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

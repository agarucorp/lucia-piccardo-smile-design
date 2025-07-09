
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-healthcare-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Lucia Piccardo</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Providing exceptional dental care with a gentle touch. Your smile is our priority, 
              and we're committed to helping you achieve optimal oral health in a comfortable, 
              modern environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About Dr. Piccardo</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#location" className="hover:text-white transition-colors duration-200">Location</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@drluciapiccardo.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <span>123 Dental Street<br />City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-1 text-blue-100 text-sm">
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Restorative Care</li>
                <li>Emergency Dentistry</li>
                <li>Oral Surgery</li>
                <li>Digital Dentistry</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <div className="text-blue-100 text-sm space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-red-300 mt-2">Emergency: 24/7 Available</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Insurance</h4>
              <ul className="space-y-1 text-blue-100 text-sm">
                <li>Most insurance plans accepted</li>
                <li>CareCredit financing</li>
                <li>Flexible payment options</li>
                <li>Free insurance verification</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2024 Dr. Lucia Piccardo Dental Practice. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            {' | '}
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            {' | '}
            <a href="#" className="hover:text-white transition-colors duration-200">HIPAA Notice</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

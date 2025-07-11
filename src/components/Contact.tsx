
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Agendá tu turno
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para lograr tu mejor sonrisa? Contactanos hoy para reservar tu consulta con la Dra. Lucía Piccardo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left content - Contact Form */}
          <div className="flex flex-col justify-center h-full">
            <div className="bg-healthcare-light-blue rounded-3xl p-8 h-full flex flex-col justify-center min-h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full justify-center">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue"
                    placeholder="(11) 1234-5678"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio requerido
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:border-healthcare-blue focus:ring-healthcare-blue"
                  >
                    <option value="">Seleccioná un servicio</option>
                    <option value="cleaning">Limpieza dental</option>
                    <option value="checkup">Control</option>
                    <option value="cosmetic">Estética dental</option>
                    <option value="restorative">Rehabilitación</option>
                    <option value="emergency">Urgencia</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue"
                    placeholder="Contanos tus necesidades o dudas..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-healthcare-blue hover:bg-healthcare-dark-blue text-white py-3 text-lg"
                >
                  Enviar mensaje
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Right content - Contact Information */}
          <div className="flex flex-col justify-center h-full">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+54 9 11 3267-7714</p>
                    <p className="text-sm text-gray-500">Viernes 14 a 20 hs</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Correo electrónico</h4>
                    <p className="text-gray-600">info@drluciapiccardo.com</p>
                    <p className="text-sm text-gray-500">Respondemos en menos de 24 hs</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">Ruiz Huidobro 3059, depto 601<br />CABA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <div className="text-gray-600 text-sm">
                      <p>Viernes: 14:00 - 20:00 hs</p>
                      <p>Otros días: Consultar</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden shadow">
                <iframe
                  title="Ubicación en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.858964964049!2d-58.48412368477044!3d-34.63412398045309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6e2e2e2e2e2%3A0x1234567890abcdef!2sRuiz%20Huidobro%203059%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

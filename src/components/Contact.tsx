
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Validation functions
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es obligatorio';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        return '';
      
      case 'email':
        if (!value.trim()) return 'El email es obligatorio';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Ingresa un email válido';
        return '';
      
      case 'phone':
        if (!value.trim()) return 'El teléfono es obligatorio';
        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(value)) return 'Ingresa un teléfono válido (solo números)';
        if (value.trim().length < 8) return 'El teléfono debe tener al menos 8 dígitos';
        if (value.trim().length > 10) return 'El teléfono no puede tener más de 10 dígitos';
        return '';
      
      case 'service':
        if (!value.trim()) return 'Selecciona un servicio';
        return '';
      
      case 'message':
        if (!value.trim()) return 'El mensaje es obligatorio';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      service: validateField('service', formData.service),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const isFormValid = (): boolean => {
    return formData.name.trim() !== '' &&
           formData.email.trim() !== '' &&
           formData.phone.trim() !== '' &&
           formData.service.trim() !== '' &&
           formData.message.trim() !== '' &&
           !Object.values(errors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'lucia.piccardo@gmail.com'
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Agendá tu turno
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para lograr tu mejor sonrisa? Contactanos hoy para reservar tu consulta con la Od. Lucía Piccardo.
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
                    onBlur={handleBlur}
                    className={`w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue ${
                      errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    placeholder="Tu nombre completo"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
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
                    onBlur={handleBlur}
                    className={`w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue ${
                      errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    placeholder="tu@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="number"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                      errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    placeholder="1132677714"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio requerido *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:border-healthcare-blue focus:ring-healthcare-blue ${
                      errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    disabled={isSubmitting}
                  >
                    <option value="">Seleccioná un servicio</option>
                    <option value="odontologia-general">Odontología general</option>
                    <option value="protesis">Prótesis</option>
                    <option value="cirugia-oral">Cirugía oral</option>
                    <option value="odontopediatria">Odontopediatría</option>
                    <option value="endodoncia">Endodoncia</option>
                    <option value="blanqueamiento">Blanqueamiento</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue ${
                      errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                    }`}
                    placeholder="Contanos tus necesidades o dudas..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-healthcare-blue hover:bg-healthcare-dark-blue text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting || !isFormValid()}
                >
                  {isSubmitting ? (
                    <>
                      Enviando...
                      <div className="ml-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ¡Mensaje enviado exitosamente! Te responderemos pronto.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.
                  </div>
                )}
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
                    <a 
                      href="https://wa.me/5491132677714" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-healthcare-blue transition-colors duration-200"
                    >
                      +54 9 11 3267-7714
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Correo electrónico</h4>
                    <a 
                      href="mailto:lucia.piccardo@gmail.com"
                      className="text-gray-600 hover:text-healthcare-blue transition-colors duration-200"
                    >
                      lucia.piccardo@gmail.com
                    </a>
                    <p className="text-sm text-gray-500">Respondemos en menos de 24 hs</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <a 
                      href="https://maps.google.com/?q=Ruiz+Huidobro+3059,+Saavedra,+CABA,+Argentina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-healthcare-blue transition-colors duration-200"
                    >
                      Ruiz Huidobro 3059, Saavedra<br />CABA
                    </a>
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

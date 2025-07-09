
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
            Schedule Your Appointment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to achieve your perfect smile? Contact us today to schedule your consultation 
            with Dr. Lucia Piccardo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left content - Contact Form */}
          <div>
            <div className="bg-healthcare-light-blue rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:border-healthcare-blue focus:ring-healthcare-blue"
                    >
                      <option value="">Select a service</option>
                      <option value="cleaning">Dental Cleaning</option>
                      <option value="checkup">Check-up</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="restorative">Restorative Care</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border-gray-300 focus:border-healthcare-blue focus:ring-healthcare-blue"
                    placeholder="Tell us about your dental needs or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-healthcare-blue hover:bg-healthcare-dark-blue text-white py-3 text-lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Right content - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri 8AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">info@drluciapiccardo.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">123 Dental Street<br />City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Hours</h4>
                    <div className="text-gray-600 text-sm">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-healthcare-mint rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Care</h3>
              <p className="text-gray-700 mb-4">
                Dental emergencies can happen at any time. We provide emergency dental care 
                for urgent situations that require immediate attention.
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Emergency Hotline: (555) 911-HELP
              </Button>
            </div>

            <div className="bg-healthcare-light-blue rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance & Payment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Most insurance plans accepted</li>
                <li>• Flexible payment options available</li>
                <li>• CareCredit financing accepted</li>
                <li>• Free insurance verification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

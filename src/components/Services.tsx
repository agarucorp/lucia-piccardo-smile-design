
import { Smile, Shield, Zap, Sparkles, Stethoscope, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and routine check-ups to maintain optimal oral health.",
      features: ["Regular Cleanings", "Cavity Fillings", "Oral Examinations", "Preventive Care"],
      color: "bg-blue-500"
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with advanced cosmetic procedures designed to enhance your appearance and confidence.",
      features: ["Teeth Whitening", "Veneers", "Bonding", "Smile Makeovers"],
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Restorative Dentistry",
      description: "Restore function and aesthetics to damaged teeth with our advanced restorative treatments.",
      features: ["Dental Crowns", "Bridges", "Implants", "Dentures"],
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "Emergency Dentistry",
      description: "Immediate care for dental emergencies with same-day appointments and urgent treatment options.",
      features: ["Pain Relief", "Trauma Care", "Same-Day Service", "24/7 Support"],
      color: "bg-red-500"
    },
    {
      icon: Stethoscope,
      title: "Oral Surgery",
      description: "Advanced surgical procedures performed with precision and care in a comfortable environment.",
      features: ["Extractions", "Implant Surgery", "Bone Grafting", "Sedation Options"],
      color: "bg-orange-500"
    },
    {
      icon: Camera,
      title: "Digital Dentistry",
      description: "State-of-the-art digital technology for accurate diagnosis and precise treatment planning.",
      features: ["Digital X-rays", "3D Imaging", "Intraoral Cameras", "CAD/CAM Technology"],
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-healthcare-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine cleanings to advanced procedures, we offer a complete range of dental services 
            using the latest technology and techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${service.color} rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-healthcare-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full border-healthcare-blue text-healthcare-blue hover:bg-healthcare-blue hover:text-white"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-healthcare-blue mb-2">15+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-healthcare-blue mb-2">2000+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-healthcare-blue mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

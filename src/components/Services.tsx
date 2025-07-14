
import { Smile, Shield, Sparkles, Stethoscope, Layers, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Services = () => {
  const services = [
    {
      // icon: Smile,
      title: "Odontología general",
      description: "Cuidado dental integral que incluye limpiezas, empastes y controles de rutina para mantener una salud bucal óptima.",
      features: ["Limpiezas dentales", "Caries", "Diagnóstico", "Prevención"],
      color: "bg-blue-500"
    },
    {
      // icon: Layers,
      title: "Prótesis",
      description: "Recuperá la función y estética de tus dientes con nuestros tratamientos protésicos.",
      features: ["Implantes", "Prótesis fija sobre implante", "Prótesis fija sobre diente", "Prótesis removible", "Carillas"],
      color: "bg-purple-500"
    },
    {
      // icon: Stethoscope,
      title: "Cirugía oral",
      description: "Procedimientos quirúrgicos avanzados realizados con precisión y cuidado en un entorno confortable.",
      features: ["Extracciones", "Cirugía de implantes", "Injertos óseos", "Injerto de tejido conectivo"],
      color: "bg-orange-500"
    },
    {
      // icon: Baby,
      title: "Odontopediatría",
      description: "Nuestro enfoque en la prevención asegura que los más pequeños tengan sonrisas saludables.",
      features: ["Instrucción de Higiene Oral", "Tratamientos de Flúor", "Selladores"],
      color: "bg-red-500"
    },
    {
      // icon: Shield,
      title: "Endodoncia",
      description: "Este tratamiento salva tus dientes en caso de caries profundas, fracturas dentales y dolor.",
      features: [],
      color: "bg-green-500"
    },
    {
      // icon: Sparkles,
      title: "Blanqueamiento",
      description: "Este tratamiento te permite sonreír sin tener vergüenza. Verás cambios desde la primera sesión.",
      features: [],
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-healthcare-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Servicios odontológicos integrales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde limpiezas de rutina hasta procedimientos avanzados, ofrecemos una gama completa de servicios dentales utilizando la última tecnología y técnicas modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const [open, setOpen] = useState(Array(services.length).fill(false));
            const handleToggle = (i: number) => {
              setOpen((prev: boolean[]) => prev.map((v, idx) => idx === i ? !v : v));
            };
            return (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                open={open[index]}
                handleToggle={handleToggle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, open, handleToggle }: any) {
  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      {service.features.length > 0 && (
        <>
          <button
            className="text-healthcare-blue font-semibold hover:underline mb-2"
            onClick={() => handleToggle(index)}
            type="button"
          >
            {open ? 'Ver menos' : 'Ver más'}
          </button>
          {open && (
            <ul className="space-y-2 mb-6">
              {service.features.map((feature: string, featureIndex: number) => (
                <li key={featureIndex} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-healthcare-blue rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Services;


import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "¿Con qué frecuencia debo ir al dentista?",
      answer: "Recomendamos una visita cada 6 meses para limpiezas y controles de rutina. Sin embargo, algunos pacientes pueden requerir visitas más frecuentes según sus necesidades. La Dra. Piccardo creará un plan personalizado para vos."
    },
    {
      question: "¿Aceptan obras sociales o prepagas?",
      answer: "Sí, aceptamos la mayoría de las obras sociales y prepagas odontológicas. Nuestro equipo te ayudará a verificar tus beneficios y aprovechar al máximo tu cobertura. También ofrecemos opciones de pago flexibles para tratamientos no cubiertos."
    },
    {
      question: "¿Qué puedo esperar en mi primera consulta?",
      answer: "Tu primera consulta incluye un examen completo, radiografías digitales si es necesario y una charla sobre tu historia clínica y tus inquietudes. Crearemos un plan de tratamiento personalizado y te explicaremos los procedimientos recomendados."
    },
    {
      question: "¿Las radiografías dentales son seguras?",
      answer: "Sí, las radiografías dentales son muy seguras. Utilizamos radiografías digitales que emiten un 80% menos de radiación que las tradicionales. La exposición es mínima y comparable a la de un vuelo corto en avión."
    },
    {
      question: "¿Cómo puedo manejar la ansiedad dental?",
      answer: "Sabemos que la ansiedad dental es común. Nuestro equipo genera un ambiente tranquilo y cómodo, y ofrecemos opciones de sedación como óxido nitroso y sedación oral para que te sientas relajado durante el tratamiento."
    },
    {
      question: "¿Cuáles son los síntomas de que necesito una endodoncia?",
      answer: "Algunos síntomas son dolor intenso al masticar, sensibilidad prolongada al frío o calor, oscurecimiento del diente o hinchazón de las encías cercanas. Si tenés alguno de estos síntomas, contactanos cuanto antes."
    },
    {
      question: "¿Cuánto duran los implantes dentales?",
      answer: "Con el cuidado y mantenimiento adecuados, los implantes pueden durar toda la vida. La tasa de éxito es superior al 95% y la mayoría de los pacientes no tiene problemas durante décadas. Las visitas regulares ayudan a garantizar el éxito a largo plazo."
    },
    {
      question: "¿Cuál es la diferencia entre coronas y carillas?",
      answer: "Las coronas cubren todo el diente y se usan para dientes dañados o muy deteriorados. Las carillas son láminas delgadas que cubren solo la parte frontal y se usan principalmente para mejorar la estética, como el color o la forma."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-healthcare-light-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Respondemos las dudas más comunes sobre salud bucal y nuestros servicios
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                {openItem === index ? (
                  <ChevronUp className="h-5 w-5 text-healthcare-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-healthcare-blue flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

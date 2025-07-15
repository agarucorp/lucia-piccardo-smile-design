
import { Award, GraduationCap, Heart, Users } from 'lucide-react';
import lutcyFoto from './assets/lutcyFoto.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center lg:items-center">
          {/* Left content - Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={lutcyFoto}
                alt="Od. Lucía Piccardo"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-3 -right-3 bg-healthcare-blue rounded-xl p-3 md:p-4 text-white w-44 md:w-56 flex flex-col items-center shadow-lg">
                <Award className="h-8 w-8 mb-1 md:h-10 md:w-10 md:mb-2" />
                <p className="font-semibold text-xs md:text-base text-center">Certificación profesional</p>
                <p className="text-xs md:text-sm opacity-90 text-center">Excelencia en odontología</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="animate-slide-in-right flex flex-col justify-center h-full">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Mulish' }}>
              Trayectoria profesional
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Con más de 5 años de experiencia en odontología avanzada, nos comprometemos a brindar tratamientos excepcionales con un enfoque humano y centrado en el paciente. Nuestra pasión por la odontología y dedicación al aprendizaje continuo garantizan que recibas la atención más avanzada disponible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-blue/10 rounded-full p-3 flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-healthcare-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Formación</h3>
                  <p className="text-gray-600">Odontóloga - Universidad de Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-blue/10 rounded-full p-3 flex-shrink-0">
                  <Award className="h-6 w-6 text-healthcare-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Certificaciones</h3>
                  <p className="text-gray-600">Carrera de especialización de prótesis DBM</p>
                </div>
              </div>
            </div>

            {/* Elimino membresías y centro el contenido */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

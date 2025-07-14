
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroLutcy from './assets/heroLutcy.jpg';
import lutcyConsul from './assets/lutcyConsul.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-healthcare-light-blue via-white to-healthcare-mint pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tu sonrisa
              <span className="text-healthcare-blue block">perfecta empieza aquí</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Combinamos tecnología dental avanzada con atención humana para brindar resultados excepcionales. Viví la odontología de primer nivel en un entorno moderno y confortable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-healthcare-blue hover:bg-healthcare-dark-blue text-white px-8 py-6 text-lg">
                Agendar turno
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-blue hover:text-white px-8 py-6 text-lg">
                Saber más
              </Button>
            </div>

          </div>

          {/* Right content - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-healthcare-blue to-healthcare-dark-blue rounded-3xl transform rotate-3"></div>
              <img
                src={lutcyConsul}
                alt="Consultorio Lutcy"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Turnos disponibles</p>
                    <p className="text-sm text-gray-600">¡Reservá tu consulta!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

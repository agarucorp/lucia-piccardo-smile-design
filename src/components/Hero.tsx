
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-healthcare-light-blue via-white to-healthcare-mint pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Perfect
              <span className="text-healthcare-blue block">Smile Starts Here</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dr. Lucia Piccardo combines advanced dental technology with compassionate care 
              to deliver exceptional results. Experience world-class dentistry in a comfortable, 
              modern environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-healthcare-blue hover:bg-healthcare-dark-blue text-white px-8 py-6 text-lg">
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-blue hover:text-white px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-healthcare-blue/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-healthcare-blue" />
                </div>
                <h3 className="font-semibold text-gray-900">15+ Years</h3>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div className="text-center">
                <div className="bg-healthcare-blue/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Award className="h-8 w-8 text-healthcare-blue" />
                </div>
                <h3 className="font-semibold text-gray-900">Board Certified</h3>
                <p className="text-sm text-gray-600">Excellence</p>
              </div>
              <div className="text-center">
                <div className="bg-healthcare-blue/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-8 w-8 text-healthcare-blue" />
                </div>
                <h3 className="font-semibold text-gray-900">2000+</h3>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-healthcare-blue to-healthcare-dark-blue rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern dental office"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Available Today</p>
                    <p className="text-sm text-gray-600">Book your appointment</p>
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

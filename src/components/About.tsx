
import { Award, GraduationCap, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Lucia Piccardo"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -right-6 bg-healthcare-blue rounded-2xl p-6 text-white">
                <Award className="h-12 w-12 mb-2" />
                <p className="font-semibold">Board Certified</p>
                <p className="text-sm opacity-90">Excellence in Dentistry</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Dr. Lucia Piccardo
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in advanced dental care, Dr. Lucia Piccardo 
              is committed to providing exceptional dental treatments with a gentle, 
              patient-centered approach. Her passion for dentistry and dedication to 
              continuous learning ensures you receive the most advanced care available.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-blue/10 rounded-full p-3 flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-healthcare-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-600">DDS from Harvard School of Dental Medicine</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-blue/10 rounded-full p-3 flex-shrink-0">
                  <Award className="h-6 w-6 text-healthcare-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
                  <p className="text-gray-600">Board Certified in General Dentistry</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-blue/10 rounded-full p-3 flex-shrink-0">
                  <Heart className="h-6 w-6 text-healthcare-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Philosophy</h3>
                  <p className="text-gray-600">Compassionate care with cutting-edge technology</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-healthcare-blue/10 rounded-full p-3 flex-shrink-0">
                  <Users className="h-6 w-6 text-healthcare-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Patients</h3>
                  <p className="text-gray-600">Over 2,000 satisfied patients</p>
                </div>
              </div>
            </div>

            <div className="bg-healthcare-light-blue rounded-2xl p-6">
              <h3 className="font-semibold text-healthcare-blue mb-3">Professional Memberships</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• American Dental Association (ADA)</li>
                <li>• Academy of General Dentistry (AGD)</li>
                <li>• International Association of Dental Implantology</li>
                <li>• American Academy of Cosmetic Dentistry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

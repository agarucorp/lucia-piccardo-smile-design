
import { MapPin, Phone, Clock, Car, Train, Bus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Modern Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in the heart of the city with easy access to public transportation 
            and ample parking available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left content - Contact Info */}
          <div>
            <div className="bg-healthcare-light-blue rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Dental Street<br />City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-healthcare-blue rounded-full p-3">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-8 bg-healthcare-blue hover:bg-healthcare-dark-blue">
                Get Directions
              </Button>
            </div>

            {/* Transportation Options */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Get Here</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <Car className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Car</h4>
                    <p className="text-gray-600">Free parking available on-site</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Train className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Train</h4>
                    <p className="text-gray-600">Central Station - 5 minutes walk</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-2">
                    <Bus className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">By Bus</h4>
                    <p className="text-gray-600">Routes 15, 23, 45 - Stop nearby</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Map */}
          <div>
            <div className="bg-healthcare-gray rounded-3xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-healthcare-blue/10 to-healthcare-dark-blue/10"></div>
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-healthcare-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">Click to view in Google Maps</p>
                <Button variant="outline" className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-blue hover:text-white">
                  View Map
                </Button>
              </div>
            </div>

            <div className="mt-8 bg-healthcare-mint rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healthcare-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Modern, comfortable waiting area with complimentary refreshments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healthcare-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>State-of-the-art treatment rooms with latest dental technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healthcare-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Friendly, professional staff dedicated to your comfort</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-healthcare-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strict sanitation protocols for your safety</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

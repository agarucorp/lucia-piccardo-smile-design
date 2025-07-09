
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting every 6 months for routine cleanings and check-ups. However, some patients may need more frequent visits based on their oral health needs. Dr. Piccardo will create a personalized schedule that's right for you."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our office staff will help verify your benefits and maximize your insurance coverage. We also offer flexible payment options for treatments not covered by insurance."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive examination, digital X-rays if needed, and a thorough discussion of your dental history and concerns. We'll create a personalized treatment plan and discuss any recommended procedures."
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Yes, dental X-rays are very safe. We use digital X-rays which produce 80% less radiation than traditional X-rays. The amount of radiation exposure is minimal and similar to what you'd experience on a short airplane flight."
    },
    {
      question: "How can I manage dental anxiety?",
      answer: "We understand dental anxiety is common. Our team creates a calm, comfortable environment, and we offer various sedation options including nitrous oxide (laughing gas) and oral sedation to help you feel relaxed during treatment."
    },
    {
      question: "What are the signs I might need a root canal?",
      answer: "Signs include severe toothache when chewing, prolonged sensitivity to hot or cold, darkening of the tooth, or swelling of nearby gums. If you experience any of these symptoms, please contact us immediately."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last a lifetime. The success rate is over 95%, and most patients experience no issues with their implants for decades. Regular dental visits help ensure long-term success."
    },
    {
      question: "What's the difference between crowns and veneers?",
      answer: "Crowns cover the entire tooth and are used for damaged or severely decayed teeth. Veneers are thin shells that cover only the front surface of teeth and are primarily used for cosmetic improvements like whitening or reshaping."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-healthcare-light-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about dental care and our services
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

        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our friendly team is here to help. Contact us for personalized answers to your dental concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-healthcare-blue hover:bg-healthcare-dark-blue text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Call Us Today
            </button>
            <button className="border border-healthcare-blue text-healthcare-blue hover:bg-healthcare-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

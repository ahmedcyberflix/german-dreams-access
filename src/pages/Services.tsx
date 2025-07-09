
import React from 'react';
import { Search, FileText, Award, Plane, Home, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "University Selection & Admission Support",
      description: "We research and identify the best German public universities that match your profile, field of study, and career goals. Our team has extensive knowledge of admission requirements and helps you choose universities where you have the highest chance of acceptance.",
      features: [
        "Profile assessment and university matching",
        "Research on admission requirements",
        "Application strategy development",
        "Submission and follow-up support"
      ]
    },
    {
      icon: FileText,
      title: "SOP & Motivation Letter Guidance",
      description: "Your Statement of Purpose is crucial for admission. We help you craft compelling, authentic SOPs that highlight your strengths and address any weaknesses in your academic profile, especially for students with lower GPAs.",
      features: [
        "Personalized SOP writing guidance",
        "Multiple revision rounds",
        "University-specific customization",
        "Professional proofreading"
      ]
    },
    {
      icon: Award,
      title: "Document Review & Preparation",
      description: "Proper document preparation is essential for successful applications. We review all your documents, ensure they meet university standards, and guide you through the entire documentation process.",
      features: [
        "Complete document checklist",
        "Format and content review",
        "Translation guidance",
        "Apostille and notarization support"
      ]
    },
    {
      icon: Plane,
      title: "Visa File Preparation",
      description: "Getting a German student visa can be complex. We help you prepare a complete, accurate visa file that maximizes your chances of approval and minimizes processing delays.",
      features: [
        "Complete visa file preparation",
        "Document verification",
        "Interview preparation",
        "Embassy appointment guidance"
      ]
    },
    {
      icon: Home,
      title: "Accommodation Assistance",
      description: "Finding suitable accommodation in Germany can be challenging. We provide guidance on housing options, application processes, and connect you with reliable housing resources.",
      features: [
        "Student housing options",
        "Application guidance",
        "Budget planning",
        "Location recommendations"
      ]
    },
    {
      icon: MessageCircle,
      title: "Ongoing Support & Consultation",
      description: "Our relationship doesn't end with admission. We provide continuous support throughout your journey, from application submission to settling in Germany.",
      features: [
        "24/7 WhatsApp support",
        "Regular progress updates",
        "Problem-solving assistance",
        "Long-term guidance"
      ]
    }
  ];

  const openWhatsApp = (service?: string) => {
    const message = service 
      ? encodeURIComponent(`Hi! I'm interested in your ${service} service. Can you provide more details?`)
      : encodeURIComponent("Hi! I'd like to know more about your services for German public university admissions.");
    const whatsappUrl = `https://wa.me/4915737304219?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive support for your German public university journey
            </p>
            <p className="text-lg mb-8">
              <strong>Important:</strong> We discuss pricing only in direct consultation. Contact us for personalized quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">End-to-end support for your German education journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <service.icon className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const message = encodeURIComponent("Hi! I'm interested in getting a free assessment for German public universities. Can you help me?");
                      window.open(`https://wa.me/4915737304219?text=${message}`, '_blank');
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Get Free Assessment
                  </button>
                  <button
                    onClick={() => openWhatsApp(service.title)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Discuss on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Our proven process for success</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-gray-600">
                  We start with a detailed assessment of your profile, goals, and circumstances. 
                  This helps us understand your needs and create a personalized strategy.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Strategy Development</h3>
                <p className="text-gray-600">
                  Based on your profile, we develop a customized approach that maximizes your 
                  chances of admission to the best-fit public universities.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation & Support</h3>
                <p className="text-gray-600">
                  We guide you through each step of the process, from document preparation 
                  to application submission, with continuous support and feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-6 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up & Success</h3>
                <p className="text-gray-600">
                  We monitor your application progress and continue supporting you through 
                  visa application and preparation for your journey to Germany.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Our Services Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Specialized Focus</h3>
              <p className="text-gray-600">
                We exclusively work with German public universities, giving us deep expertise 
                in their specific requirements and admission processes.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Proven Track Record</h3>
              <p className="text-gray-600">
                Our success rate speaks for itself. We've helped students with various GPAs 
                secure admission to top German public universities.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🤝 Personalized Approach</h3>
              <p className="text-gray-600">
                Every student is unique. We don't use cookie-cutter solutions but create 
                customized strategies for each individual case.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💬 Continuous Support</h3>
              <p className="text-gray-600">
                Our support doesn't end with admission. We're with you throughout your 
                entire journey, from application to arrival in Germany.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how our services can help you achieve your German education goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm interested in getting a free assessment for German public universities. Can you help me?");
                window.open(`https://wa.me/4915737304219?text=${message}`, '_blank');
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Assessment
            </button>
            <button
              onClick={() => openWhatsApp()}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Discuss Services on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

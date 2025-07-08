
import React from 'react';
import { Heart, Target, Users, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Gradziet</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Two brothers on a mission to make German public education accessible for Pakistani students
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Gradziet was founded by two brothers who witnessed firsthand the struggles of Pakistani students 
                trying to get quality education abroad. We saw too many students being misled by consultants who 
                promised them admission to expensive private institutions, often with hidden costs and poor outcomes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                After extensive research and connecting with successful students in Germany, we discovered that 
                German public universities offer world-class education at minimal cost. More importantly, we learned 
                that even students with lower GPAs could secure admission with the right guidance and approach.
              </p>
              <p className="text-lg text-gray-700">
                This revelation led us to create Gradziet - a consultancy that exclusively focuses on public 
                universities and maintains complete transparency throughout the process. We believe every student 
                deserves honest guidance and affordable education opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To make quality German public education accessible to Pakistani students, regardless of their GPA, 
                through honest guidance and comprehensive support.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Honesty, transparency, and student success are at the core of everything we do. 
                We believe in building long-term relationships based on trust.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600">
                We treat every student as family, providing personalized guidance and support 
                throughout their entire journey to Germany.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start p-6 bg-blue-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Public Universities Only</h3>
                <p className="text-gray-600">
                  We will never recommend private institutions, even if they seem easier. 
                  Public universities offer better value and recognition.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-blue-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees, no false promises. We explain every step of the process 
                  and keep you informed throughout your journey.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-blue-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Support</h3>
                <p className="text-gray-600">
                  Every student is unique. We create customized strategies based on your 
                  background, goals, and circumstances.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-blue-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Long-term Relationship</h3>
                <p className="text-gray-600">
                  Our support doesn't end with admission. We help you with visa, 
                  accommodation, and settling in Germany.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Students Choose Us</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ What We Do</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Focus exclusively on public universities</li>
                    <li>• Accept students with low GPAs</li>
                    <li>• Provide honest, transparent guidance</li>
                    <li>• Offer comprehensive support</li>
                    <li>• Build long-term relationships</li>
                    <li>• Celebrate student success</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">❌ What We Don't Do</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Recommend private universities</li>
                    <li>• Make false promises</li>
                    <li>• Charge hidden fees</li>
                    <li>• Take shortcuts or use illegal methods</li>
                    <li>• Abandon students after admission</li>
                    <li>• Compromise on quality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Join hundreds of Pakistani students who are already studying in German public universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/#lead-form'}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Assessment
            </button>
            <button
              onClick={() => {
                const message = encodeURIComponent("Hi! I read about your story and I'm interested in German public universities. Can we discuss my options?");
                window.open(`https://wa.me/923001234567?text=${message}`, '_blank');
              }}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Chat with Us
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

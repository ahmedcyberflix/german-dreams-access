
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import LeadForm from '../components/LeadForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 XXX XXXXXXX", "Available 9 AM - 9 PM PST"],
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+92 XXX XXXXXXX", "24/7 Quick Response"],
      action: "Chat Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@germanstudy.com", "Response within 24 hours"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Pakistan", "Serving students nationwide"],
      action: "View Coverage"
    }
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I found your contact information and I'm interested in German public university admissions. Can we discuss my options?");
    const whatsappUrl = `https://wa.me/923001234567?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = (method: string) => {
    switch (method) {
      case 'Phone':
        window.location.href = 'tel:+923001234567';
        break;
      case 'WhatsApp':
        openWhatsApp();
        break;
      case 'Email':
        window.location.href = 'mailto:info@germanstudy.com?subject=Inquiry about German University Admission';
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to start your German university journey? Get in touch with our experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us - choose what's convenient for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <contact.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{contact.title}</h3>
                <div className="mb-4">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className={`${idx === 0 ? 'font-medium text-gray-900' : 'text-gray-600 text-sm'}`}>
                      {detail}
                    </p>
                  ))}
                </div>
                <button
                  onClick={() => handleContactClick(contact.title)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  {contact.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <LeadForm
            title="Contact Form"
            subtitle="Share your details and we'll provide personalized guidance for your German university application"
          />
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Office Hours</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Phone Consultations</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">WhatsApp Support</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Every Day</span>
                    <span className="font-medium text-gray-900">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quick Response</span>
                    <span className="font-medium text-gray-900">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Emergency</span>
                    <span className="font-medium text-gray-900">Immediate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-center">
                <strong>Best Time to Call:</strong> Monday to Friday, 2:00 PM - 6:00 PM PST for immediate assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Before You Contact Us</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly do you respond?</h3>
              <p className="text-gray-600">
                WhatsApp messages: Within 2 hours | Phone calls: Same day | Emails: Within 24 hours
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you charge for initial consultation?</h3>
              <p className="text-gray-600">
                No, our initial assessment and consultation are completely free. We discuss pricing only during direct consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What information should I have ready?</h3>
              <p className="text-gray-600">
                Your academic transcripts, GPA, intended field of study, and any specific German universities you're interested in.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you help with low GPA applications?</h3>
              <p className="text-gray-600">
                Absolutely! We specialize in helping students with lower GPAs find suitable German public universities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Don't wait - university application deadlines are approaching. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Chat on WhatsApp Now
            </button>
            <button
              onClick={() => window.location.href = 'tel:+923001234567'}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Call Us Directly
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

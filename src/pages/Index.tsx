import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, CheckCircle, Star, ArrowRight, Check } from 'lucide-react';
import Layout from '../components/Layout';
import LeadForm from '../components/LeadForm';

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in getting admission to German public universities. Can you help me?");
    const whatsappUrl = `https://wa.me/4915737304219?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const whoWeHelp = [
    { icon: GraduationCap, title: "FSC & A-Level Students", desc: "Fresh graduates ready for their next step" },
    { icon: Users, title: "Bachelor & Master Applicants", desc: "Undergrads and graduates seeking quality education" },
    { icon: Award, title: "Low GPA Students", desc: "Even with GPA below 2.7, we find solutions" },
    { icon: Star, title: "Gap Year Students", desc: "Taking time off doesn't mean giving up dreams" }
  ];

  const whyPublicOnly = [
    { title: "Free or Minimal Tuition", desc: "Save thousands compared to private institutions" },
    { title: "Globally Recognized Degrees", desc: "World-class education from prestigious universities" },
    { title: "Higher Visa Success Rates", desc: "Public universities have better visa approval rates" },
    { title: "No Hidden Costs", desc: "Transparent process with no shady deals or commissions" }
  ];

  const process = [
    { step: "1", title: "Free Assessment", desc: "We evaluate your profile and goals" },
    { step: "2", title: "University Shortlisting", desc: "We find the best public universities for you" },
    { step: "3", title: "SOP & Document Support", desc: "Perfect your application materials" },
    { step: "4", title: "Application Submission", desc: "We handle the entire application process" },
    { step: "5", title: "Visa Guidance", desc: "Complete support until you reach Germany" }
  ];

  const universities = [
    { name: "TU Berlin", logo: "🏛️" },
    { name: "FH Aachen", logo: "🎓" },
    { name: "University of Stuttgart", logo: "🏢" },
    { name: "TU Chemnitz", logo: "📚" },
    { name: "University of Bonn", logo: "🏆" },
    { name: "TU Dresden", logo: "🔬" }
  ];

  const expertise = [
    {
      title: "Study in Germany & Europe",
      services: [
        "Bachelor's & Master's Admissions",
        "University Shortlisting & Direct Applications",
        "Uni-Assist & Application Portal Support",
        "Scholarship Assistance & Eligibility Guidance"
      ]
    },
    {
      title: "Germany Ausbildung Programs",
      services: [
        "Ausbildung Placement in IT, Healthcare",
        "German Language Training & Visa Support",
        "Employer Sponsorship Assistance",
        "Scholarship Assistance & Eligibility Guidance"
      ]
    },
    {
      title: "Germany Skilled Worker Visa",
      services: [
        "Chancenkarte (Opportunity Card)",
        "Visa Processing & Documentation Assistance",
        "Job Search Support & Employer Matching",
        "Relocation & Settlement Assistance"
      ]
    },
    {
      title: "Europe Visit Visa",
      services: [
        "Complete Visa Documentation",
        "Travel Insurance & Flight Itinerary Assistance",
        "Embassy Appointment Scheduling"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      city: "Karachi",
      university: "TU Berlin",
      gpa: "2.7",
      quote: "I never thought I could get into a German university with my low GPA. Gradziet made it possible!"
    },
    {
      name: "Fatima Khan",
      city: "Lahore",
      university: "FH Aachen",
      gpa: "2.7",
      quote: "They helped me get admission even after being rejected by 3 other consultants."
    },
    {
      name: "Ali Raza",
      city: "Islamabad",
      university: "University of Stuttgart",
      gpa: "2.8",
      quote: "Professional, honest, and they deliver what they promise. Highly recommended!"
    }
  ];

  const faqs = [
    {
      question: "Can I get admission with a 2.7 GPA?",
      answer: "Yes! We specialize in helping students with low GPAs. We know which public universities accept lower GPAs and how to strengthen your application."
    },
    {
      question: "Do I need IELTS for German universities?",
      answer: "Not always. Many German public universities accept other English proficiency tests or have their own requirements. We'll guide you on the best option."
    },
    {
      question: "What's the total process time?",
      answer: "The entire process typically takes 6-8 months from application to visa approval, depending on the university and your preparation."
    },
    {
      question: "What documents are required?",
      answer: "Basic documents include transcripts, degree certificates, passport, SOP, and language certificates. We provide a complete checklist."
    },
    {
      question: "Do you help with visa applications?",
      answer: "Absolutely! We provide complete visa guidance and support throughout the entire process until you reach Germany."
    },
    {
      question: "Are German public universities really free?",
      answer: "Most German public universities charge minimal semester fees (€150-350). This is significantly cheaper than private institutions or universities in other countries."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get Admission in Germany's Public Universities
              <span className="block text-orange-400 mt-2">Even with a Low GPA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We only help students get into public universities — no private institutions, no false promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Assessment
              </button>
              <button
                onClick={openWhatsApp}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Chat with Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Help</h2>
            <p className="text-xl text-gray-600">We specialize in helping Pakistani students achieve their German education dreams</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeHelp.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Only Public Universities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Only Public Universities?</h2>
            <p className="text-xl text-gray-600">Here's why we focus exclusively on public institutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPublicOnly.map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-blue-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our 5-Step Process</h2>
            <p className="text-xl text-gray-600">A clear roadmap to your German education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real students, real results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.city}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">University:</span> {testimonial.university}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Previous GPA:</span> {testimonial.gpa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Universities</h2>
            <p className="text-xl text-gray-600">Top German public universities we work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {universities.map((uni, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-2">{uni.logo}</div>
                <h3 className="text-sm font-semibold text-gray-900">{uni.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">Our Expertise - </span>
              <span className="text-orange-400">How We Help You?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-blue-600 mb-4 text-center">{category.title}</h3>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We've helped students with low GPA get into Germany's top public universities.
          </h2>
          <p className="text-xl mb-8">Let's help you too.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Assessment
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;


import React, { useState } from 'react';
import { Download, FileText, Users, GraduationCap, Plane } from 'lucide-react';
import Layout from '../components/Layout';
import LeadForm from '../components/LeadForm';

const Resources = () => {
  const [showDownloadForm, setShowDownloadForm] = useState<string | null>(null);

  const resources = [
    {
      id: 'top-universities',
      title: "Top 10 Public Universities in Germany That Accept Low GPA Students",
      description: "A comprehensive guide to German public universities with flexible admission requirements, including specific GPA thresholds, application deadlines, and program details.",
      icon: GraduationCap,
      category: "University Selection",
      pages: "15 pages",
      format: "PDF"
    },
    {
      id: 'visa-checklist',
      title: "Complete Germany Student Visa Checklist",
      description: "Step-by-step checklist for preparing your German student visa application, including all required documents, formatting guidelines, and common mistakes to avoid.",
      icon: Plane,
      category: "Visa Preparation",
      pages: "12 pages",
      format: "PDF"
    },
    {
      id: 'sop-guide',
      title: "SOP Writing Guide for German Universities",
      description: "Learn how to write compelling Statements of Purpose that address low GPA concerns and highlight your strengths. Includes templates and examples.",
      icon: FileText,
      category: "Application Support",
      pages: "20 pages",
      format: "PDF"
    },
    {
      id: 'admission-requirements',
      title: "Admission Requirements by Field of Study",
      description: "Detailed breakdown of admission requirements for popular fields like Engineering, Computer Science, Business, and more at German public universities.",
      icon: Users,
      category: "Program Information",
      pages: "18 pages",
      format: "PDF"
    }
  ];

  const handleDownload = (resourceId: string) => {
    setShowDownloadForm(resourceId);
  };

  const handleFormSubmit = (resourceTitle: string) => {
    // In a real implementation, this would trigger the actual download
    // and save the lead information to Google Sheets or email
    setShowDownloadForm(null);
    
    // Simulate download
    const message = `Thank you for downloading "${resourceTitle}"! The PDF will be sent to your email shortly.`;
    alert(message);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your resources for German public university admissions. Can you help me?");
    const whatsappUrl = `https://wa.me/923001234567?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Resources</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Download our comprehensive guides to help you navigate the German university application process
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Downloads</h2>
            <p className="text-xl text-gray-600">Free guides created by our experts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <resource.icon className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">{resource.pages}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <FileText className="w-4 h-4 mr-1" />
                    <span>{resource.format}</span>
                  </div>
                  <button
                    onClick={() => handleDownload(resource.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Resources Coming Soon</h2>
            <p className="text-xl text-gray-600">We're constantly creating new resources to help you succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Guides</h3>
              <p className="text-gray-600">Subject-specific preparation materials</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">🎥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600">Step-by-step application walkthroughs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Webinars</h3>
              <p className="text-gray-600">Live Q&A sessions with experts</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={openWhatsApp}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Get Notified About New Resources
            </button>
          </div>
        </div>
      </section>

      {/* Download Form Modal */}
      {showDownloadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Download Resource</h3>
                <button
                  onClick={() => setShowDownloadForm(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600">
                  Enter your details to download: "{resources.find(r => r.id === showDownloadForm)?.title}"
                </p>
              </div>

              <LeadForm
                title="Download Free Resource"
                subtitle="We'll send the PDF to your email immediately"
                compact={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-xl mb-8">
            While our resources are helpful, nothing beats personalized guidance from our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/#lead-form'}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
            <button
              onClick={openWhatsApp}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Chat with Expert
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;

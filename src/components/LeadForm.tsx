
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const LeadForm = ({ 
  title = "Get a Free Public University Assessment", 
  subtitle = "Fill out this form and we'll help you find the perfect German public university for your profile.",
  compact = false 
}: LeadFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    city: '',
    gpa: '',
    degree: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in real implementation, connect to Google Sheets API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Form Submitted Successfully!",
        description: "We'll contact you within 24 hours via WhatsApp.",
      });

      // Reset form
      setFormData({
        fullName: '',
        whatsapp: '',
        email: '',
        city: '',
        gpa: '',
        degree: '',
        message: ''
      });

      // Optional: Open WhatsApp after form submission
      const message = encodeURIComponent(`Hi! I just filled out the assessment form. My name is ${formData.fullName} and I'm interested in German public universities.`);
      const whatsappUrl = `https://wa.me/923001234567?text=${message}`;
      window.open(whatsappUrl, '_blank');

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg ${compact ? 'p-6' : 'p-8'}`}>
      <div className="text-center mb-6">
        <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-bold text-gray-900 mb-2`}>
          {title}
        </h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+92 XXX XXXXXXX"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Karachi, Lahore, Islamabad..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="gpa" className="block text-sm font-medium text-gray-700 mb-1">
              GPA (Optional)
            </label>
            <input
              type="text"
              id="gpa"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="2.5, 3.0, 3.5..."
            />
          </div>

          <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">
              Intended Degree *
            </label>
            <select
              id="degree"
              name="degree"
              required
              value={formData.degree}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select degree level</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
            </select>
          </div>
        </div>

        {!compact && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your background, goals, or any specific questions..."
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Assessment'}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to be contacted via WhatsApp or email.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;

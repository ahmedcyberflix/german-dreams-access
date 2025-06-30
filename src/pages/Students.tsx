
import React from 'react';
import { MapPin, GraduationCap, Star, Calendar } from 'lucide-react';
import Layout from '../components/Layout';

const Students = () => {
  const successStories = [
    {
      id: 1,
      name: "Ahmed Hassan",
      city: "Karachi",
      university: "Technical University of Berlin",
      program: "Computer Science",
      previousGPA: "2.3",
      admissionYear: "2023",
      image: "👨‍💻",
      quote: "I never thought I could get into a German university with my low GPA. GermanStudy not only helped me get admission but also guided me through the entire visa process. Now I'm studying at one of Germany's top technical universities!",
      details: "Ahmed had a challenging academic background with a 2.3 GPA from his bachelor's degree. Through our specialized approach, we helped him highlight his practical skills and work experience to secure admission to TU Berlin's competitive Computer Science program."
    },
    {
      id: 2,
      name: "Fatima Khan",
      city: "Lahore",
      university: "FH Aachen University of Applied Sciences",
      program: "Mechanical Engineering",
      previousGPA: "2.7",
      admissionYear: "2023",
      image: "👩‍🔬",
      quote: "After being rejected by 3 other consultants who said my GPA was too low, GermanStudy gave me hope. They found the perfect university for my profile and helped me craft an amazing SOP. I'm now pursuing my Master's in Germany!",
      details: "Fatima faced multiple rejections from consultants who focused only on her GPA. We identified universities that valued practical experience and helped her showcase her engineering projects and internships effectively."
    },
    {
      id: 3,
      name: "Ali Raza",
      city: "Islamabad",
      university: "University of Stuttgart",
      program: "Automotive Engineering",
      previousGPA: "2.5",
      admissionYear: "2024",
      image: "🚗",
      quote: "Professional, honest, and they deliver what they promise. The team at GermanStudy went above and beyond to help me get admission. Their guidance on visa preparation was exceptional. Highly recommended!",
      details: "Ali's passion for automotive engineering was evident despite his academic struggles. We connected him with University of Stuttgart's renowned automotive program and helped him demonstrate his genuine interest through a compelling application."
    },
    {
      id: 4,
      name: "Sana Malik",
      city: "Faisalabad",
      university: "TU Chemnitz",
      program: "Business Administration",
      previousGPA: "2.4",
      admissionYear: "2024",
      image: "👩‍💼",
      quote: "Coming from a small city, I thought studying abroad was impossible. GermanStudy made it happen! They supported me every step of the way, from university selection to visa approval. I'm grateful for their dedication.",
      details: "Sana's background from a smaller city posed unique challenges. We helped her navigate the application process, prepare for language requirements, and secure financial documentation for her visa application."
    },
    {
      id: 5,
      name: "Muhammad Usman",
      city: "Multan",
      university: "Hochschule Bonn-Rhein-Sieg",
      program: "Applied Physics",
      previousGPA: "2.6",
      admissionYear: "2023",
      image: "🔬",
      quote: "I had a gap year and a below-average GPA, but GermanStudy saw potential in me. They helped me turn my weaknesses into strengths in my application. Now I'm doing research in Germany!",
      details: "Usman's gap year and academic challenges required careful handling. We helped him frame his gap year as a period of growth and preparation, ultimately leading to his successful admission to a research-focused program."
    },
    {
      id: 6,
      name: "Ayesha Riaz",
      city: "Peshawar",
      university: "Frankfurt University of Applied Sciences",
      program: "International Business",
      previousGPA: "2.8",
      admissionYear: "2024",
      image: "🌍",
      quote: "The transparency and honesty of GermanStudy impressed me from day one. They never made false promises and delivered exactly what they said they would. I'm now studying in Frankfurt!",
      details: "Ayesha appreciated our transparent approach and realistic expectations. We helped her leverage her language skills and cultural background to strengthen her application for international business programs."
    }
  ];

  const stats = [
    { number: "150+", label: "Students Placed", icon: GraduationCap },
    { number: "95%", label: "Visa Success Rate", icon: Star },
    { number: "25+", label: "Partner Universities", icon: MapPin },
    { number: "3", label: "Years Experience", icon: Calendar }
  ];

  const openWhatsApp = (studentName?: string) => {
    const message = studentName 
      ? encodeURIComponent(`Hi! I read about ${studentName}'s success story and I'm interested in applying to German public universities. Can you help me?`)
      : encodeURIComponent("Hi! I'm inspired by your success stories and want to start my German university application. Can we discuss my options?");
    const whatsappUrl = `https://wa.me/923001234567?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Real students, real results - Pakistani students now studying in German public universities
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Students' Journeys</h2>
            <p className="text-xl text-gray-600">From Pakistan to Germany - these are their stories</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{story.image}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{story.city}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <blockquote className="text-gray-700 italic">
                      "{story.quote}"
                    </blockquote>
                  </div>

                  <div className="border-t pt-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-gray-500">University</span>
                        <p className="font-semibold text-gray-900">{story.university}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Program</span>
                        <p className="font-semibold text-gray-900">{story.program}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Previous GPA</span>
                        <p className="font-semibold text-gray-900">{story.previousGPA}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Admission Year</span>
                        <p className="font-semibold text-gray-900">{story.admissionYear}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{story.details}</p>

                    <button
                      onClick={() => openWhatsApp(story.name)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      Start Your Journey Like {story.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Coming Soon - Hear directly from our students</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-12 text-center">
            <div className="text-6xl mb-6">🎥</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Video Testimonials Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We're working on bringing you video testimonials from our students currently studying in Germany. 
              Stay tuned for their personal stories and experiences!
            </p>
            <button
              onClick={() => openWhatsApp()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Get Notified When Available
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Success Story Starts Here</h2>
          <p className="text-xl mb-8">
            Join our growing community of Pakistani students studying in German public universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/#lead-form'}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => openWhatsApp()}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Chat with Success Stories Team
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Students;

import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, CheckCircle, Star, ArrowRight, Check, Sparkles } from 'lucide-react';
import Layout from '../components/Layout';
import LeadForm from '../components/LeadForm';
import { ScrollAnimation } from '../hooks/useScrollAnimation';

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
    { icon: Award, title: "Low GPA Students", desc: "Even with GPA below 2.5, we find solutions" },
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
      gpa: "2.3",
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
      gpa: "2.5",
      quote: "Professional, honest, and they deliver what they promise. Highly recommended!"
    }
  ];

  const faqs = [
    {
      question: "Can I get admission with a 2.5 GPA?",
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
      <section className="gradient-hero text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient-x bg-300%"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <ScrollAnimation animation="fade-in-down">
              <div className="flex justify-center mb-6">
                <Sparkles className="w-16 h-16 text-secondary animate-float" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Get Admission in Germany's 
                <span className="block bg-gradient-to-r from-secondary to-secondary-glow bg-clip-text text-transparent mt-2">
                  Public Universities
                </span>
                <span className="block text-3xl md:text-4xl text-white/90 mt-4">Even with a Low GPA</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
                We only help students get into public universities — no private institutions, no false promises.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale-in" delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={scrollToForm}
                  className="btn-secondary py-4 px-8 rounded-xl font-semibold text-lg hover-scale hover-glow"
                >
                  Start Your Free Assessment
                </button>
                <button
                  onClick={openWhatsApp}
                  className="btn-glass py-4 px-8 rounded-xl font-semibold text-lg border-2 border-white/30 hover:border-white/50"
                >
                  Chat with Advisor
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Who We Help */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
                Who We Help
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialize in helping Pakistani students achieve their German education dreams
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeHelp.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                <div className="text-center p-8 bg-card rounded-2xl shadow-elegant hover-lift hover-glow group">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:animate-bounce-gentle">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Only Public Universities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent mb-6">
                Why Only Public Universities?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here's why we focus exclusively on public institutions
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPublicOnly.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-in-left" delay={index * 150}>
                <div className="flex items-start p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-glow rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-secondary-glow bg-clip-text text-transparent mb-6">
                Our 5-Step Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A clear roadmap to your German education
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <div className="text-center relative">
                  <div className="gradient-primary w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-primary hover-scale">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  {index < process.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary mx-auto mt-6 hidden md:block animate-float" />
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real students, real results
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} animation="fade-in-up" delay={index * 150}>
                <div className="bg-card p-8 rounded-2xl shadow-elegant hover-lift border border-border/50 group">
                  <div className="flex items-center mb-6">
                    <div className="gradient-primary rounded-xl w-14 h-14 flex items-center justify-center mr-4 group-hover:animate-pulse-glow">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                      <p className="text-muted-foreground text-sm">{testimonial.city}</p>
                    </div>
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">University:</span> {testimonial.university}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Previous GPA:</span> {testimonial.gpa}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent mb-6">
                Featured Universities
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Top German public universities we work with
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {universities.map((uni, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 50}>
                <div className="text-center p-6 bg-card rounded-2xl shadow-elegant hover-lift hover-glow group border border-border/30">
                  <div className="text-5xl mb-4 group-hover:animate-bounce-gentle">{uni.logo}</div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{uni.name}</h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Our Expertise - </span>
                <span className="bg-gradient-to-r from-secondary to-secondary-glow bg-clip-text text-transparent">How We Help You?</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((category, index) => (
              <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                <div className="bg-card p-8 rounded-2xl shadow-elegant hover-lift border border-border/50 group">
                  <h3 className="text-xl font-bold text-primary mb-6 text-center group-hover:text-primary-glow transition-colors">
                    {category.title}
                  </h3>
                  <ul className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent-glow rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground text-sm leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="py-20 gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="scale-in">
            <LeadForm />
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} animation="fade-in-left" delay={index * 100}>
                <div className="bg-card p-8 rounded-2xl shadow-elegant border border-border/50 hover-lift">
                  <h3 className="text-xl font-bold text-foreground mb-4">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 animate-gradient-x bg-300%"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We've helped students with low GPA get into Germany's top public universities.
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-in-up" delay={200}>
            <p className="text-2xl mb-12 text-white/90">Let's help you too.</p>
          </ScrollAnimation>
          <ScrollAnimation animation="scale-in" delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={scrollToForm}
                className="btn-secondary py-4 px-8 rounded-xl font-semibold text-lg hover-scale hover-glow"
              >
                Start Your Free Assessment
              </button>
              <button
                onClick={openWhatsApp}
                className="btn-glass py-4 px-8 rounded-xl font-semibold text-lg border-2 border-white/30 hover:border-white/50"
              >
                Chat on WhatsApp
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

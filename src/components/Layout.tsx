
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Success Stories', href: '/students' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 shadow-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <Link to="/" className="flex items-center group">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent group-hover:from-primary-glow group-hover:to-primary transition-all duration-300">
                Gradziet
              </span>
              <span className="text-sm text-muted-foreground ml-3 hidden sm:block font-medium">
                Public Universities Only
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold transition-all duration-300 relative py-2 px-1 ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-foreground hover:text-primary hover:bg-muted transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-lg border-t border-border/50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-secondary/20 animate-gradient-y bg-300%"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
                Gradziet
              </h3>
              <p className="text-white/80 mb-6 text-lg leading-relaxed">
                Helping Pakistani students get admission to Germany's public universities - 
                no private institutions, no false promises.
              </p>
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="font-semibold text-white">+49 1573 7304219</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-white transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Gradziet. All rights reserved. | Public Universities Only
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;

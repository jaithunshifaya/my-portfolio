import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Jaithun Shifaya
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Final-year B.Tech IT student passionate about creating innovative solutions through technology. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jaithunshifaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jaithun-shifaya03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/jaithunshifaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:jaithunshifaya@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education & Skills */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Education & Skills</h4>
            <ul className="space-y-2 text-gray-400">
              <li>B.Tech Information Technology</li>
              <li>Velammal College of Engineering</li>
              <li>Full Stack Development</li>
              <li>Android Development</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-400 mb-4 sm:mb-0">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Jaithun Shifaya</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-gray-400">
              © {currentYear} Jaithun Shifaya. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
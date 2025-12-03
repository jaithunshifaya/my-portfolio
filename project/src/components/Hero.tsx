import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Instagram } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'B.Tech IT Student',
    'Full Stack Developer',
    'Android Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jaithun Shifaya_IT_VCET.pdf';
    link.download = 'Jaithun_Shifaya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg overflow-hidden">
              <img 
                src="/profile.JPG" 
                alt="Jaithun Shifaya" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'flex';
                }}
              />
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold" style={{display: 'none'}}>
                JS
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Jaithun Shifaya</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 h-12">
            <span className="border-r-2 border-blue-400 animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Final-year B.Tech IT student at Velammal College of Engineering and Technology, Madurai. 
            Passionate about creating innovative solutions through technology.
          </p>

          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold mb-8 inline-block">
            Currently seeking full-time opportunities in software development, web technologies, or AI/ML roles
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToNext()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={downloadResume}
              className="flex items-center space-x-2 border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/jaithunshifaya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/jaithun-shifaya03" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/jaithunshifaya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="mailto:jaithunshifaya@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-500 hover:text-blue-400 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Award, Clock, Users, Target, Quote } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '8.48', label: 'CGPA (5th Sem)' },
    { icon: Clock, value: '2+', label: 'Years Learning' },
    { icon: Users, value: '10+', label: 'Projects Built' },
    { icon: Target, value: '100%', label: 'Dedication' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about technology and driven by the desire to create meaningful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl flex items-center justify-center mb-8 border border-gray-700">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl overflow-hidden">
                <img 
                  src="/profile.JPG" 
                  alt="Jaithun Shifaya" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold" style={{display: 'none'}}>
                  JS
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Crafting Digital Excellence
            </h3>

            <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600 mb-6">
              <div className="flex items-start space-x-4">
                <Quote className="text-blue-400 mt-1" size={24} />
                <div>
                  <p className="text-lg text-gray-300 italic leading-relaxed">
                    "First, solve the problem. Then, write the code."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- My Development Philosophy</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700/30 p-6 rounded-lg border border-gray-600">
              <h4 className="text-xl font-semibold text-white mb-4">Career Objective</h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                To secure a challenging position in a reputable organization where I can fully leverage my skills, 
                continuously grow through learning, and contribute meaningfully to the organization's success.
              </p>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently pursuing B.Tech in Information Technology at Velammal College of Engineering and Technology, 
              Madurai, with a CGPA of 8.48 (up to 5th semester). I specialize in full-stack development, 
              Android app development, and have a growing interest in AI/ML technologies.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map(({ icon: Icon, value, label }, index) => (
                <div key={index} className="text-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors border border-gray-600">
                  <Icon className="mx-auto mb-2 text-blue-400" size={24} />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
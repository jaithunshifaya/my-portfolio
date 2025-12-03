import React from 'react';
import { Award, ExternalLink, Calendar, Building, FileText } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Programming with Java',
      issuer: 'Amazon',
      date: '2024',
      type: 'Online Course',
      description: 'Comprehensive Java programming course covering object-oriented programming, data structures, and advanced Java concepts.',
      icon: '☕',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2024',
      type: 'Online Course',
      description: 'Complete web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and database management.',
      icon: '🌐',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'TCS iON Career Edge - Young Professional',
      issuer: 'TCS',
      date: '2023',
      type: 'Professional Development',
      description: 'Professional skills development program focusing on industry readiness and career preparation.',
      icon: '💼',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL',
      date: '2023',
      type: 'Elite Certificate',
      description: 'Advanced course on cybersecurity, privacy protection, and security measures in social media platforms.',
      icon: '🔒',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cybersecurity for Beginners',
      issuer: 'Tata Strive (Microsoft)',
      date: '2023',
      type: 'Certification',
      description: 'Foundational cybersecurity course covering security principles, threat detection, and protection strategies.',
      icon: '🛡️',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Oracle Fusion Cloud ERP – Certified Foundations Associate',
      issuer: 'Oracle',
      date: '2023',
      type: 'Professional Certification',
      description: 'Enterprise resource planning certification covering Oracle Cloud applications and business processes.',
      icon: '☁️',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Responsible and Safe AI Systems',
      issuer: 'NPTEL',
      date: '2023',
      type: 'Elite Certificate',
      description: 'Advanced course on AI ethics, responsible AI development, and safety considerations in artificial intelligence.',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const presentedPapers = [
    {
      title: 'Prediction and Visualization of Trends in Stock Prices',
      conference: 'Springer Scopus-indexed PEIS Conference',
      location: 'NIT Uttarakhand',
      date: '2024',
      description: 'Research paper on machine learning approaches for stock price prediction with comprehensive data visualization techniques.',
      type: 'Research Paper'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Continuous learning through professional certifications and academic achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl`}>
                  {cert.icon}
                </div>
                <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                  {cert.type}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
              
              <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Building size={14} />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{cert.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-blue-400">
                  <Award size={16} />
                  <span className="text-sm font-medium">Certified</span>
                </div>
                <button className="text-gray-400 hover:text-blue-400 transition-colors">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Presented Papers Section */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Presented Papers</h3>
            <p className="text-gray-400">Research contributions and academic presentations</p>
          </div>

          {presentedPapers.map((paper, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <FileText className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-white leading-tight">{paper.title}</h4>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/30">
                      {paper.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Building size={14} />
                      <span>{paper.conference}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📍</span>
                      <span>{paper.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{paper.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{paper.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Hobbies */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Languages</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">English</span>
                <span className="text-blue-400 font-semibold">Fluent</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">Tamil</span>
                <span className="text-blue-400 font-semibold">Native</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Hobbies</h3>
            <div className="grid grid-cols-1 gap-3">
              {['Traveling', 'Singing', 'Playing Throw Ball', 'Reading Tech Blogs', 'Coding Projects'].map((hobby, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
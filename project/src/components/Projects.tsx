import React from 'react';
import { ExternalLink, Github, Calendar, Tag, TrendingUp, Smartphone, Code, Globe, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Stock Price Prediction',
      description: 'ML-based stock trend analysis system that predicts stock price movements using historical data and machine learning algorithms. Features comprehensive data visualization and trend analysis.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Machine Learning', 'Data Analysis', 'Visualization'],
      githubUrl: 'https://github.com/jaithunshifaya/Stock-Price-Prediction.git',
      featured: true,
      date: '2024',
      icon: TrendingUp,
      category: 'Machine Learning'
    },
    {
      id: 2,
      title: 'HealthPulse – Appointment App',
      description: 'Android application for managing doctor appointments with features like appointment scheduling, reminders, patient reviews, and healthcare accessibility improvements.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Java', 'Android Studio', 'SQLite', 'XML'],
      githubUrl: 'https://github.com/jaithunshifaya/HealthPulse-Appointment.git',
      featured: true,
      date: '2024',
      icon: Smartphone,
      category: 'Mobile Development'
    },
    {
      id: 3,
      title: 'CodePen – React Code Editor',
      description: 'Web-based live code editor built with React, allowing real-time HTML, CSS, and JavaScript editing with instant preview. Features syntax highlighting and responsive design.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Web Development'],
      githubUrl: 'https://github.com/jaithunshifaya/CodePen-ReactApp.git',
      featured: true,
      date: '2024',
      icon: Code,
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Full Stack Portfolio Website',
      description: 'This responsive portfolio website built with React and modern web technologies, showcasing projects, skills, and professional experience with smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      githubUrl: '#',
      featured: false,
      date: '2024',
      icon: Globe,
      category: 'Web Development'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                  <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <project.icon className="text-blue-400" size={24} />
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border-2 border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-2 py-1 rounded text-xs">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <project.icon className="text-blue-400" size={20} />
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Details</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sports Section */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Sports & Achievements</h3>
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 px-6 py-4 rounded-lg border border-emerald-500/30">
              <Award className="text-emerald-400" size={24} />
              <div>
                <p className="text-white font-semibold">Active Throwball Player</p>
                <p className="text-gray-400 text-sm">Part of the winning team in school-level competitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
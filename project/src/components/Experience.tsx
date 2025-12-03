import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Android Development Intern',
      company: 'NSIC Technical Service Centre',
      location: 'Chennai',
      duration: 'Summer 2023',
      type: 'Internship',
      description: 'Built Android applications using Java and Android Studio, including a Calculator and Quiz App. Gained practical experience in mobile app development, focusing on UI design and functionality.',
      technologies: ['Java', 'Android Studio', 'XML', 'SQLite'],
      achievements: [
        'Developed fully functional Calculator app with advanced operations',
        'Created interactive Quiz application with scoring system',
        'Learned mobile app lifecycle and best practices'
      ]
    },
    {
      title: 'Web Development Workshop',
      company: 'NIT Trichy',
      location: 'Tiruchirappalli',
      duration: '2023',
      type: 'Workshop',
      description: 'Attended intensive workshop on Web Development, gaining hands-on experience in building web applications using modern technologies and enhancing practical skills in front-end development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      achievements: [
        'Built responsive web applications from scratch',
        'Learned modern web development frameworks',
        'Collaborated with peers on group projects'
      ]
    },
    {
      title: 'Big Data Analytics Workshop',
      company: 'NIT Trichy',
      location: 'Tiruchirappalli',
      duration: '2023',
      type: 'Workshop',
      description: 'Participated in comprehensive workshop on Big Data Analytics, exploring data processing techniques, analytics tools, and gaining insights into handling large-scale data systems.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Analytics'],
      achievements: [
        'Learned data processing and analysis techniques',
        'Worked with real-world datasets',
        'Understanding of big data ecosystem'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through internships, workshops, and hands-on learning experiences
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-xl text-blue-400 font-semibold">{exp.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {exp.type}
                </span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
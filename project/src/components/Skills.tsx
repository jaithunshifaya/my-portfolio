import React from 'react';
import { Code, Database, Globe, Smartphone, Palette, Server, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'C', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-emerald-500 to-emerald-600',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript ES6+', level: 80 },
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'Android Studio', level: 80 },
        { name: 'Visual Studio Code', level: 90 },
      ]
    },
    {
      title: 'Design & Development',
      icon: Palette,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'UI/UX Design', level: 70 },
        { name: 'Responsive Design', level: 85 },
        { name: 'Mobile Development', level: 80 },
        { name: 'Problem Solving', level: 90 },
      ]
    },
  ];

  const interests = [
    { name: 'Java Programming', icon: Code },
    { name: 'Front-End Development', icon: Globe },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'Machine Learning', icon: Brain },
    { name: 'Mobile Development', icon: Smartphone },
    { name: 'Full Stack Development', icon: Server },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build amazing applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Interest */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">Areas of Interest</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center">
                <interest.icon className="mx-auto mb-2 text-blue-400" size={24} />
                <p className="text-gray-300 text-sm font-medium">{interest.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Quick Learner', 'Leadership', 'Time Management', 'Optimistic', 'Team Player', 'Problem Solving', 'Communication', 'Adaptability'].map((skill, index) => (
              <div key={index} className="text-center p-3 bg-gray-800 rounded-lg border border-gray-600">
                <span className="text-gray-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
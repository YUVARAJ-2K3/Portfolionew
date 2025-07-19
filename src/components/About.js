import React, { useState } from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';
import SkillPill from './SkillPill';
import AboutImage from '../assets/images/laptop_code_programming_212332_3840x2400.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = {
    "Devops & Monitoring Tools": ["Ansible", "Jenkins", "Prometheus", "Grafana", "ELK Stack", "CI/CD"],
    "Cloud & Containerization": ["Docker", "Kubernetes", "Podman", "AWS"],
    "Web Development": ["HTML", "CSS", "React.js"],
    "Operating Systems": ["RHEL", "Linux", "Windows"],
    "Programming Languages": ["Python", "JavaScript", "Shell Scripting"],
    "UI/UX Design": ["Wireframing", "Prototyping", "User Research"],
    "Tools":["Git", "VS Code", "Figma"]

  };

  const education = [
    { degree: "Bachelor of Engineering", field: "Computer Science And Engineering", school: " Sri Sai Ram Engineering College, Chennai", year: "2022-2026" },
    { degree: "Diploma", field: "Mechanical Engineering", school: " Central Polytechnic College, Chennai", year: "2019-2022" },
    { degree: "SSLC", field: "Matriculation", school: " Srimathi Lakshmiammal Memorial Matriculation Higher Secondary School, Chennai", year: "2018-2019" },
  ];

  const locations = [
    { city: "Chennai", state: "Tamil Nadu", country: "India" },
    { city: "Bangalore", state: "Karnataka", country: "India" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-4">
                <h4 className="font-semibold text-red-400 mb-2">{category}</h4>
                <div>
                  {skillList.map(skill => <SkillPill key={skill} skill={skill} />)}
                </div>
              </div>
            ))}
          </div>
        );
      case 'education':
        return (
          <ul>
            {education.map(edu => (
              <li key={edu.degree} className="mb-2 flex items-start">
                <GraduationCap className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold">{edu.degree} in {edu.field}</p>
                  <p className="text-gray-400">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </div>
              </li>
            ))}
          </ul>
        );
      case 'location':
        return (
          <div>
            {locations.map(location => (
              <div key={location.city} className="flex items-center mb-2">
                <MapPin className="text-red-500 mr-3" />
                <p>{location.city}, {location.state}, {location.country}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-5 gap-12 items-center h-full min-h-[400px]">
          <div className="md:col-span-2 h-full flex items-stretch">
            <img 
              src={AboutImage}
              alt="Laptop on a dark desk" 
              className="h-full w-auto object-cover rounded-lg shadow-2xl mb-6 md:mb-0 flex-1"
            />
          </div>
          <div className="md:col-span-3 h-full flex flex-col justify-center">
            <p className="text-gray-300 mb-6 leading-relaxed">
            Passionate and detail-oriented programmer with a focus on development, automation, and user experience.Quick learner with strong problem-solving skills and adaptability across diverse tech domains.Eager to grow, take on challenges, and contribute to impactful projects.
            </p>
            <div className="flex border-b border-gray-700 mb-6">
              <button onClick={() => setActiveTab('skills')} className={`py-2 px-4 font-semibold transition-colors ${activeTab === 'skills' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400'}`}>Skills</button>
              <button onClick={() => setActiveTab('education')} className={`py-2 px-4 font-semibold transition-colors ${activeTab === 'education' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400'}`}>Education</button>
              <button onClick={() => setActiveTab('location')} className={`py-2 px-4 font-semibold transition-colors ${activeTab === 'location' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400'}`}>Location</button>
            </div>
            <div className="min-h-[200px]">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

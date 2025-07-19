import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import InternPeLogo from '../assets/images/227628899-c44dd6c1-dc56-4852-b515-2d3261dbff6f.jpg';
import AdvantageLogo from '../assets/images/advantage.jpg';
import BreaksLogo from '../assets/images/brakes-india.png';
import WheelsLogo from '../assets/images/wheels.png';

const Internships = () => {
    const internships = [
        {
            company: 'Vectra Technosoft Pvt Ltd',
            role: 'Technical Support Intern',
            description: 'Handled Ansible, Automation, and system monitoring.',
            logo: AdvantageLogo
        },
        {
            company: 'Vectra Technosoft Pvt Ltd',
            role: 'Linux System Administrator',
            description: 'Managed system administration tasks.',
            logo: AdvantageLogo
        },
        {
            company: 'InternPe',
            role: 'Web Development Intern',
            description: 'Worked on UI/UX and User Interface Design in a hybrid model.',
            logo: InternPeLogo
        },
        {
            company: 'Breaks India Limited',
            role: 'Internship Trainee',
            description: 'Worked on Quality Assurance and SAP Materials Management (SAP MM).',
            logo: BreaksLogo
        },
        {
            company: 'Wheels India Limited',
            role: 'Internship Trainee',
            description: 'Developed and maintained web applicationsResearched and developed new technologies in R&D.',
            logo: WheelsLogo
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(1);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? internships.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === internships.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    return (
        <section id="internships" className="py-20 bg-black-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle>Internships</SectionTitle>
                <div className="relative flex items-center justify-center h-[450px]">
                    <button onClick={prevSlide} className="absolute left-0 md:-left-12 z-10 p-3 bg-red-600 rounded-full text-white hover:bg-red-700 transition">
                        <ChevronLeft size={24} />
                    </button>
                    
                    <div className="w-full md:w-1/2 lg:w-1/3 relative">
                        {internships.map((internship, index) => (
                             <div key={index} className={`absolute w-full transition-all duration-500 ease-in-out
                                ${index === currentIndex ? 'opacity-100 transform scale-100 z-10' : 'opacity-50 transform scale-90 z-0'}
                                ${index === (currentIndex - 1 + internships.length) % internships.length ? 'transform translate-x-[-50%]' : ''}
                                ${index === (currentIndex + 1) % internships.length ? 'transform translate-x-[50%]' : ''}
                                ${ (index !== currentIndex && index !== (currentIndex - 1 + internships.length) % internships.length && index !== (currentIndex + 1) % internships.length) ? 'opacity-0' : ''}
                             `}>
                                <div className="bg-black border-2 border-red-600 p-8 rounded-lg shadow-lg text-center">
                                    <img src={internship.logo} alt={`${internship.company} logo`} className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-gray-700 object-cover"/>
                                    <h3 className="text-xl font-bold text-white">{internship.company}</h3>
                                    <h4 className="text-md text-red-400 mb-2">{internship.role}</h4>
                                    <p className="text-gray-300">{internship.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={nextSlide} className="absolute right-0 md:-right-12 z-10 p-3 bg-red-600 rounded-full text-white hover:bg-red-700 transition">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Internships;

import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

// Import project images
import ProjectImg1 from '../assets/images/OIP.jpeg';
import ProjectImg2 from '../assets/images/OIP (1).jpeg';
import ProjectImg3 from '../assets/images/OIP (2).jpeg';
import ProjectImg4 from '../assets/images/rhel9_desktop-1024x576.png';
import ProjectImg5 from '../assets/images/6259f7d1d6bb00c05a6ab3b0_SEO-Slack-Header-p-3200.png'
import ProjectImg6 from '../assets/images/grafana-dashboard-english.png'

const Portfolio = () => {
  const projects = [
    { title: "Design and fabrication of Fire System for crackers factory", description: "Mechanical design project.", img: ProjectImg1, link: "#" },
    { title: "Web Application in Linux using TOMCAT", description: "DevOps and server management.", img: ProjectImg2, link: "#" },
    { title: "Ultrasound Nerve Segmentation using AI & ML", description: "Medical simulation technology.", img: ProjectImg3, link: "#" },
    { title: "ELK Stack logging & Visualization in RHEL 9", description: "Data logging and analysis.", img: ProjectImg4, link: "#" },
    { title: "End to end Jenkins slack integration", description: "System monitoring solutions.", img: ProjectImg5, link: "#" },
    { title: "Prometheus and Grafana for real-time monitoring of RHEL servers", description: "E-commerce backend automation.", img: ProjectImg6, link: "#" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Portfolio</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

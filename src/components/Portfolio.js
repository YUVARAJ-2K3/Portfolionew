import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

// Import project images
import ProjectImg1 from '../assets/images/OIP.jpeg';
import ProjectImg2 from '../assets/images/OIP (1).jpeg';
import ProjectImg3 from '../assets/images/OIP (2).jpeg';
import ProjectImg4 from '../assets/images/rhel9_desktop-1024x576.png';
import ProjectImg5 from '../assets/images/6259f7d1d6bb00c05a6ab3b0_SEO-Slack-Header-p-3200.png';
import ProjectImg6 from '../assets/images/grafana-dashboard-english.png';
import ProjectImg7 from '../assets/images/cicdimage.png';

const Portfolio = () => {
  const projects = [
    { title: "Design and fabrication of Fire System for crackers factory", img: ProjectImg1, link: "https://drive.google.com/file/d/18L1Z8bEyy_nmqEvI97QG-8CXLYCrJc42/view?usp=sharing" },
    { title: "Web Application in Linux using TOMCAT",  img: ProjectImg2, link: "https://drive.google.com/file/d/1htxeJ41mNpj8TN5LSU1dl94nSDWuvg4R/view?usp=sharing" },
    { title: "Ultrasound Nerve Segmentation using AI & ML", img: ProjectImg3, link: "https://drive.google.com/file/d/1RhJ1KR-6t5DzyzG1Cyuin8PsZ-EnwZW-/view?usp=sharing" },
    { title: "ELK Stack logging & Visualization in RHEL 9", img: ProjectImg4, link: "https://www.linkedin.com/posts/yuvaraj-s-542053256_elkstack-rhel-linuxmonitoring-activity-7297294677714554880-5RSH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8CzEIBE8Z8pNSWOJohRYteTW4hAVHJEE0" },
    { title: "End to end Jenkins slack integration", img: ProjectImg5, link: "https://www.linkedin.com/posts/yuvaraj-s-542053256_jenkins-slack-devops-activity-7294044612061474816-m8YR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8CzEIBE8Z8pNSWOJohRYteTW4hAVHJEE0" },
    { title: "Prometheus and Grafana for real-time monitoring of RHEL servers",  img: ProjectImg6, link: "https://www.linkedin.com/posts/yuvaraj-s-542053256_monitoring-devops-prometheus-activity-7293908845448335360-ol47?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8CzEIBE8Z8pNSWOJohRYteTW4hAVHJEE0" },
    { title: "Deployed a webpage in Docker using CI/CD Pipeline", img: ProjectImg7, link: "https://www.linkedin.com/posts/yuvaraj-s-542053256_devops-ciabrcd-cloudcomputing-activity-7306359990078816256--_mN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8CzEIBE8Z8pNSWOJohRYteTW4hAVHJEE0" }
  ];

  return (
    <section id="projects" className="py-20 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

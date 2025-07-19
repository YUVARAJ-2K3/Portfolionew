import React from 'react';

const ProjectCard = ({ img, title, description, link }) => (
  <div className="bg-black-900 rounded-lg overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-800/20">
    <div className="relative h-56">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
      </div>
    </div>
    <div className="p-6">
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
        View
      </a>
    </div>
  </div>
);

export default ProjectCard;

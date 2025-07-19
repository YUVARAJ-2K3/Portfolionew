import React from 'react';
import HeroBackground from '../assets/images/d7232d86a64ec4aa0d74ba3077702dde.png';

const Hero = () => (
  <section id="home" className="h-screen bg-black flex items-center justify-center text-white relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={HeroBackground} 
        alt="Dark desk with keyboard and laptop" 
        className="w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </div>
    <div className="text-center z-10 p-4">
      <p className="text-red-500 font-semibold text-lg">Hi there, I'm</p>
      <h1 className="text-5xl md:text-7xl font-extrabold my-3">Yuvaraj S</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">DevOpster | Front-end Developer | programmer</p>
      <a
        href="https://drive.google.com/file/d/1Ey7KiSzrMI1xnJHJ27sM65MMCzsk-dCb/view?usp=sharing"
        className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
      >
        Resume
      </a>
    </div>
    <div className="absolute bottom-10 text-white animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
    </div>
  </section>
);

export default Hero;

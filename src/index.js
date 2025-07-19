import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import Certifications from './components/Certifications';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Certifications />
        <Internships />
        <Contact />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);

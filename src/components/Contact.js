import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Contact Me</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-400">
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            <div className="space-y-4">
                <a href="mailto:sureshyuvaraj2003@gmail.com" className="flex items-center group">
                    <Mail className="text-red-500 mr-4"/>
                    <span className="text-gray-300 group-hover:text-red-400 transition-colors">sureshyuvaraj2003@gmail.com</span>
                </a>
                <a href="tel:+919841721640" className="flex items-center group">
                    <Phone className="text-red-500 mr-4"/>
                    <span className="text-gray-300 group-hover:text-red-400 transition-colors">+91 98417 21640</span>
                </a>
            </div>
            <div className="flex space-x-4 pt-4">
                <a href="https://github.com/YUVARAJ-2K3" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"><Github/></a>
                <a href="https://www.linkedin.com/in/yuvaraj-s-542053256/" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors"><Linkedin/></a>
            </div>
          </div>
          <form className="space-y-6">
            <input type="text" placeholder="Name" className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="email" placeholder="Email" className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
            <textarea placeholder="Message" rows="5" className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
            <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

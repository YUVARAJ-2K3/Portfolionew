import React from 'react';

const Footer = () => (
    <footer className="bg-black-800 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Yuvaraj S. All rights reserved.</p>
            <p className="text-sm">Designed & Developed by Yuvaraj S</p>
        </div>
    </footer>
)

export default Footer;

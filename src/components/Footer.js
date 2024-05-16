import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex items-center">
          {/* Registration Symbol */}
          <i className="fa-solid fa-copyright text-gray-300"></i>
          <p className="text-gray-300 mx-2">HotelEase</p>
        </div>

        <div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://example.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side navigation
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // For social media icons

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Footer content section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-100">About Us</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              JSR Group of Institution is dedicated to shaping future leaders in healthcare education, fostering a culture of innovation and excellence. We focus on providing world-class education to our students.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-100">Quick Links</h3>
            <ul className="text-base sm:text-lg space-y-2">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
              <li><Link to="/admissions" className="hover:text-gray-400">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-100">Contact Us</h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">JSR Group of Institution, Bhopal, M.P.</p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">Email: <a href="mailto:contact@jsrgroup.edu" className="hover:text-gray-400">contact@jsrgroup.edu</a></p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">Phone: <a href="tel:+911234567890" className="hover:text-gray-400">+91 123 456 7890</a></p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-100">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://www.facebook.com" className="text-3xl hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.twitter.com" className="text-3xl hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com" className="text-3xl hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com" className="text-3xl hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center text-lg mt-8 text-gray-400">
          <p>&copy; {new Date().getFullYear()} JSR Group of Institution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

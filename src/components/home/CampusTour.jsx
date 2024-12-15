// CampusTour.js
import React from 'react';
import { Link } from 'react-router-dom';

function CampusTour() {
  return (
    <section className="py-16 bg-gray-100 px-4">
      <h2 className="text-center text-4xl font-extrabold mb-8">Take a Virtual Tour</h2>
      
      {/* Video section with responsive iframe */}
      <div className="relative w-full" style={{ paddingBottom: '40%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/xb2QZcIKkGg?autoplay=1&si=SRrn_z7nP1hdDwFC"
          title="Campus Tour Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Call to action for in-person tour */}
      <p className="text-center mt-6 text-lg">
        Want to visit us in person?{' '}
        <Link to="/about" className="text-blue-600 hover:underline">Schedule your campus tour</Link>
      </p>
    </section>
  );
}

export default CampusTour;

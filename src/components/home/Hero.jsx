import React, { useState, useEffect } from 'react';

function Hero() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D',
    'https://media.istockphoto.com/id/2163913008/photo/group-of-four-indian-asian-young-college-friends-with-backpack-books-laptop-standing-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=5LqAEwqn5Lh0hxLSQT3e0IoJaIhIhT4QZYI98_vYk8c=',
    'https://media.istockphoto.com/id/1461634216/photo/cheerful-group-of-graduated-students-jumping-at-college-campus-after-completion-of-degree.webp?a=1&b=1&s=612x612&w=0&k=20&c=95RoUv9tzSpcxBCKamVUdER6bSB41SyKka1aw4_95Vw=',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-change images every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // 3000ms = 3 seconds
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
        onClick={prevImage}
      >
        &#60;
      </button>
      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
        onClick={nextImage}
      >
        &#62;
      </button>
    </div>
  );
}

export default Hero;

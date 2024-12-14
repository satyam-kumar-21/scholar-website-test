import React, { useState, useEffect } from 'react';

function Hero() {
  const images = [
    {
      src: 'https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1646056639226.jpg-org',
      alt: 'University Campus',
      text: 'Welcome to JSR Bhopal, A Leading Institute in Nursing, Pharmacy, and Medical Education'
    },
    {
      src: 'https://th-i.thgim.com/public/incoming/6jfpqu/article68127794.ece/alternates/LANDSCAPE_1200/IMG_Medical_students__CO_2_1_HVCO8SCR.jpg',
      alt: 'College Friends',
      text: 'Join the JSR Bhopal Family and Build Your Future in the Medical and Health Sciences Field'
    },
    {
      src: 'https://images.hindustantimes.com/img/2022/03/01/550x309/810f9178-991f-11ec-82cf-231c0ab4e0db_1646112217565.jpeg',
      alt: 'Graduation Celebration',
      text: 'Empowering Future Healthcare Leaders. Graduate with Excellence at JSR Bhopal!'
    },
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
    <div className="relative w-[100vw] h-[25vh] md:w-[100vw] md:h-[80vh] overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
            {/* Blue Background Overlay with low opacity for improved text visibility */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-600 opacity-20" />
            {/* Text Overlay */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg sm:text-3xl md:text-4xl font-bold bg-black bg-opacity-50 p-4 sm:p-6 rounded-md shadow-xl w-[85%] sm:w-[70%] text-center">
              {image.text}
            </div>
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

import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useEffect } from 'react';

function App() {
  // Array of local images
  const slides = [
    { url: '/assets/Software1.JPG' },
    { url: '/assets/Software2.JPG' },
    { url: '/assets/Software3.JPG' },
    { url: '/assets/Software4.JPG' },
    { url: '/assets/Software5.JPG' },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto slide every 400ms
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);
  return (

    
 <div className="max-w-[900px] h-[600px] md:w-3/4 w-full m-auto py-16 px-4  relative group border-none mt-20  shadow-[15px_20px_20px_rgba(0,0,0,0.3),_inset_4px_4px_10px_white] hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.3),_inset_-4px_-4px_10px_white] transition-shadow duration-300 rounded-2xl  ">
      <h1 className='text-center text-2xl font-semibold'>Software Consultancy Website on ReactJs</h1> 
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: 'contain', // Ensures the image fits within the container
          backgroundPosition: 'center', // Keeps the image centered
          backgroundRepeat: 'no-repeat', // Prevents repeating the image
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>



    </div>

    
   
  );
}

export default App;

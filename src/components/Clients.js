import React, { useEffect, useRef } from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';
import one from "../images/clients/1.png";
import two from "../images/clients/2.png";
import three from "../images/clients/3.png";
import four from "../images/clients/4.png";
import five from "../images/clients/5.png";

const Clients = () => {
  const scrollContainerRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;
    
    // Auto-scroll functionality
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
        }
      }, 3000);
    };
    
    startAutoScroll();
    
    // Pause on hover
    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startAutoScroll();
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const clientImageStyle = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn',
    minWidth: '200px' // Ensures consistent width for scrolling
  };

  const clients = [
    { id: 1, image: one },
    { id: 2, image: two },
    { id: 3, image: three },
    { id: 4, image: four },
    { id: 5, image: five },
    // Duplicate for seamless looping
    { id: 6, image: one },
    { id: 7, image: two },
    { id: 8, image: three }
  ];

  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
          <div className='flex justify-center'>
            <div className='w-24 border-b-4 border-blue-900'></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our satisfied clients.
          </h2>
        </div>

        <div 
          className="p-16 overflow-x-hidden"
          data-aos="fade-in" 
          data-aos-delay="600"
        >
          <div 
            ref={scrollContainerRef}
            className="flex space-x-12 items-center scroll-smooth overflow-x-auto"
            style={{ scrollbarWidth: 'none' }} // Hide scrollbar for cleaner look
          >
            {clients.map((client) => (
              <div 
                key={client.id}
                className="flex-shrink-0 transition-all duration-500 ease-in-out opacity-70 hover:opacity-100 hover:scale-110"
                style={clientImageStyle}
              >
                <img 
                  src={client.image} 
                  alt={`client ${client.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
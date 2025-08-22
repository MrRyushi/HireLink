'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const briefcaseIcon = <FontAwesomeIcon icon={faBriefcase} className="text-white text-2xl" />;
  const bars = <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />;
  const [isMedium, setIsMedium] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMedium(window.innerWidth >= 824); // md breakpoint in Tailwind is 768px
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='bg-blue-800 text-white montserrat'>
        <div className='flex justify-between items-center px-6 md:px-10 lg:px-20 xl:px-28 h-16'>
          {/* Logo or Brand Name */}
          <button className="flex items-center space-x-2 text-xl md:text-3xl font-bold" onClick={() => window.location.href = '/' }>
            <span className='md:w-8 md:h-8 flex items-center'>{briefcaseIcon}</span>
            <span>HireLink</span>
          </button>

          {isMedium ? (
            <div className='flex justify-between items-center space-x-10'>
              <div className='flex space-x-5 lg:space-x-5 xl:space-x-10 lg:text-md xl:text-lg'>
                  <button className='underline-offset-4 hover:underline'>Hiring Search</button>
                  <button className='underline-offset-4 hover:underline'>Profile</button>
                  <button className='underline-offset-4 hover:underline'>Explore Companies</button>
              </div>

              <div className='lg:text-md xl:text-lg'>
                  <button className='underline-offset-4 hover:underline' onClick={() => window.location.href = '/login'}>Sign in</button>
              </div>
            </div>
            ) : (
            <div className='flex justify-end px-6'>
              <button className='w-6 h-6 text-2xl' onClick={handleClick}>{bars}</button>
              {isOpen && (
                <div className='absolute right-0 top-16 bg-white text-black shadow-lg rounded-lg p-4 w-48'>
                  <div className='flex flex-col space-y-3'>
                    <button className='hover:bg-gray-100'>Hiring Search</button>
                    <button className='hover:bg-gray-100'>Profile</button>
                    <button className='hover:bg-gray-100'>Explore Companies</button>
                    <button className='hover:bg-gray-100' onClick={() => window.location.href = '/login'}>Sign in</button>
                  </div>
                </div>
              )}
            </div>
            )}
        </div>
        
    </div>
  )
}

export default Navbar
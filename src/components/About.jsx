import React from 'react';
import Logo from '../assets/logo2.png';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#2c3e50] text-gray-300 flex items-center justify-center px-4'>
      <div className='max-w-[1000px] w-full' style={{ fontFamily: "'Poppins', sans-serif" }}>
        
        <div className='text-center mb-12'>
          <p className='text-3xl sm:text-4xl font-bold'>
            Hi, I'm Zeynep Esirgenci Kum. 👋  
          </p>
          <p className='text-lg sm:text-xl mt-4'>
            It's great to meet you! Feel free to explore and get to know my work.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 gap-10 items-center'>
          
          <div>
            <p className='text-md sm:text-lg leading-relaxed'>
              I’m a <span className='text-pink-400 font-semibold'>software developer</span> with a background in 
              <span className='text-pink-400 font-semibold'> Geomatics Engineering</span>.
              I specialize in developing <span className='text-pink-400 font-semibold'>frontend components</span> using JavaScript and TypeScript.
              I'm passionate about open source technologies and improving my skills every day,
              while building clean, user-centric software.
            </p>
          </div>

          <div className='flex justify-center'>
            <div className='relative group w-[200px]'>
              <img
                src={Logo}
                alt="Logo"
                className="w-full transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
              />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Ups!
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

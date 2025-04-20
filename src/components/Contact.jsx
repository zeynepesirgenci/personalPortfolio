import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full min-h-screen bg-[#2c3e50] text-gray-300 flex items-center justify-center py-20 px-4'
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className='max-w-[1000px] w-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#66fcf1]'>Contact</p>
          <p className='py-4'>Feel free to reach out to me.</p>
        </div>

        <div className='flex justify-center space-x-6'>
          <a
            href='mailto:zesirgenci@gmail.com'
            className='text-3xl text-[#66fcf1] hover:text-[#ffffff] transition duration-300'
            aria-label='Email'
          >
            <FaMailBulk />
          </a>

          <a
            href='https://github.com/zeynepesirgenci'
            target='_blank'
            rel='noopener noreferrer'
            className='text-3xl text-[#66fcf1] hover:text-[#ffffff] transition duration-300'
            aria-label='GitHub'
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/zeynep-esirgenci'
            target='_blank'
            rel='noopener noreferrer'
            className='text-3xl text-[#66fcf1] hover:text-[#ffffff] transition duration-300'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

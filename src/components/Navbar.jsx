import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white/80 backdrop-blur-md shadow-md rounded-b-3xl text-[#365c57] z-[100]'>
      <ul className='hidden md:flex'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/work">Work & Education</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <a href="/">Home</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href="/about">About</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href="/skills">Skills</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href="/work">Work & Education</a>
        </li>
        <li className='py-6 text-4xl'>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

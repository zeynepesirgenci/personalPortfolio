import React from 'react';
import { FaCode, FaServer, FaTools, FaSearch } from 'react-icons/fa';

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full min-h-screen bg-[#2c3e50] text-gray-300 flex items-center justify-center'
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className='max-w-[900px] w-full p-6 flex flex-col items-center justify-center'>
        <div className='mb-10 text-center'>
          <p className='text-4xl font-bold border-b-4 border-pink-600 inline-block'>Skills</p>
          <p className='pt-4 text-lg'>Technologies I’ve worked with or have experience using</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-6 w-full'>

          <div className='bg-[#34495e] rounded-2xl p-5 shadow-lg'>
            <div className='flex items-center gap-3 mb-3 text-xl font-semibold text-pink-400'>
              <FaCode /> Frontend Development
            </div>
            <ul className='list-disc list-inside pl-2 space-y-1'>
              <li>Languages & Markup: TypeScript, JavaScript, HTML, CSS</li>
              <li>Frameworks: React, Angular</li>
            </ul>
          </div>

          <div className='bg-[#34495e] rounded-2xl p-5 shadow-lg'>
            <div className='flex items-center gap-3 mb-3 text-xl font-semibold text-green-400'>
              <FaServer /> Backend Development
            </div>
            <ul className='list-disc list-inside pl-2 space-y-1'>
              <li>Languages: Node.js, Python, Java (Spring), C# (.NET)</li>
              <li>Databases: PostgreSQL, OracleDB</li>
            </ul>
          </div>

          <div className='bg-[#34495e] rounded-2xl p-5 shadow-lg'>
            <div className='flex items-center gap-3 mb-3 text-xl font-semibold text-yellow-400'>
              <FaTools /> DevOps & Deployment
            </div>
            <ul className='list-disc list-inside pl-2 space-y-1'>
              <li>Docker</li>
              <li>Linux (Debian-based)</li>
            </ul>
          </div>

          <div className='bg-[#34495e] rounded-2xl p-5 shadow-lg'>
            <div className='flex items-center gap-3 mb-3 text-xl font-semibold text-blue-400'>
              <FaSearch /> Web Fundamentals
            </div>
            <ul className='list-disc list-inside pl-2 space-y-1'>
              <li>SEO Principles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';

const Work = () => {
  return (
    <div
      name='work'
      className='w-full min-h-screen bg-[#2c3e50] text-gray-300 flex items-center justify-center py-20 px-4'
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className='max-w-[1000px] w-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#66fcf1]'>Experience</p>
          <p className='py-4'>Here's a snapshot of my academic background, work history, and language proficiency.</p>
        </div>

        <div className='mb-12'>
          <p className='text-2xl font-bold mb-2'>Education</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>
              <strong>Hacettepe University (2017–2022)</strong><br />
              BSc in Geomatics Engineering
            </li>
            <li>
              <strong>Bootcamp (2022)</strong><br />
              Development of a full-stack e-commerce website
            </li>
          </ul>
        </div>

        <div className='mb-12'>
          <p className='text-2xl font-bold mb-2'>Work Experience</p>
          <ul className='list-disc list-inside space-y-4'>
            <li>
              <strong>Software Developer (2023–Present)</strong><br />
              Developing and maintaining a GIS library using TypeScript/JavaScript and CesiumJS, as part of a large-scale military project. Frontend development of GIS tools, form validation systems, and data visualization, using a stack that includes TypeScript, JavaScript, React, Docker, and Debian-based environments.
            </li>
            <li>
              <strong>Software Developer (2022–2023)</strong><br />
              Participated in the maintenance of a full-stack web application project for the General Directorate of Highways. (ASP.NET, Angular, TypeScript, HTML, OracleDB)<br />
              Also contributed to the development of a full-stack accounting web application. (React, JavaScript, OracleDB)
            </li>
          </ul>
        </div>

        <div>
          <p className='text-2xl font-bold mb-2'>Languages</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>Turkish — Native</li>
            <li>English — Advanced</li>
            <li>French — Pre-intermediate (A2)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;

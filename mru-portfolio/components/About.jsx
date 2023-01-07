import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/me1.jpg';


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-[8px] flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <div className='bg-gray-200 p-2 rounded-xl my-4'>
            <h2 className='py-2 text-gray-600 text-justify'>
              Pursing: B.E. Information Technology
              
            </h2>
            <span className='text-gray-400 text-base'>from</span>
              <span>Xavier Institute of Engineering, Mumbai</span>
          </div>

          <div className='bg-gray-200 p-2 rounded-xl my-4'>
            <p className='py-2 text-gray-600 text-justify'>
              I'm a developer with a passion for creating engaging and user-friendly web applications. My skills include HTML, CSS, JavaScript, React, and Node.js.
              I'm always learning new technologies and techniques to improve my skills and stay up-to-date with the latest trends in web development.
            </p>
          </div>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='bg-white w-[90%] sm:w-[60%]  md:w-[100%] h-auto m-auto shadow-xl shadow-gray-300 rounded-xl flex items-center justify-center p-4 hover:shadow-gray-600 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
};

export default About;

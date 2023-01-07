import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Mrunal</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          I'm a developer with a passion for creating engaging and user-friendly web applications.
                 My skills include HTML, CSS, JavaScript, React, and Node.js. I'm always learning new technologies and techniques to improve my skills and stay up-to-date with the latest trends in web development.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='mx-[8px] rounded-full shadow-lg shadow-gray-400 p-9 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={25}/>
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className='mx-[8px] rounded-full shadow-lg shadow-gray-400 p-9 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={25}/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='mx-[8px] rounded-full shadow-lg shadow-gray-400 p-9 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={25}/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className='mx-[8px] rounded-full shadow-lg shadow-gray-400 p-9 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill size={25}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

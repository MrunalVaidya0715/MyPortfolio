import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  }


  return (
    <div className='fixed  w-full h-20 z-[100] shadow-xl'>
      <div className='flex justify-between items-center w-full h-full  px-10 2xl:px-16'>
        <Image src="/../public/assets/navLogo.png" alt="/" width='75' height='50' />
        <div>
          <ul className='hidden md:flex'>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>

          </ul>
          <div onClick={handleNav} className='md:hidden mr-8'>

            <AiOutlineMenu size={25} />
          </div>




        </div>

      </div>
      <div className={nav? 'md:hidden fixed left-0 top-0 h-screen w-full bg-black/70' : ''}>
        <div className={nav?'fixed  left-0 top-0 bg-[#ecf0f3] px-10 py-1 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-500':
                         'fixed  left-[-100%] top-0 bg-[#ecf0f3] p-10 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-500'}>
          <div>
            <div className='flex items-center justify-between'>
              <Image src="/../public/assets/navLogo.png" alt="/" width='75' height='35' />
              <div  onClick={handleNav} className='p-3 rounded-full shadow-xl shadow-gray-300 cursor-pointer  hover:shadow-gray-400'>
                <AiOutlineClose />
              </div>

            </div>
            <div className='mt-5 border-b-2 border-gray-300 p-1 text-blue-400'>
              <p className='py-3 w-[85%] md:w-[90%] '>Let's Build Something Legendary Together</p>
            </div>



          </div>
          <div className='py-4 flex flex-col justify-between'>
            <ul className='uppercase ' >
              <Link href='/'>
                <li className='py-3 m-3 text-sm hover:text-blue-400 hover:font-bold  ease-in-out duration-300'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-3  m-3 text-sm hover:text-blue-400 hover:font-bold  ease-in-out duration-300'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-3  m-3 text-sm hover:text-blue-400 hover:font-bold  ease-in-out duration-300'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-3  m-3 text-sm hover:text-blue-400 hover:font-bold  ease-in-out duration-300'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='py-3 m-3  text-sm hover:text-blue-400 hover:font-bold  ease-in-out duration-300'>Contact</li>
              </Link>

            </ul>
            <div className=''>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div>
                <div className='flex justify-between items-center w-full  sm:w-[85%]'>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <FaInstagram />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Navbar
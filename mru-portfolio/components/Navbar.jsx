import React, { useState, useEffect } from 'react'
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

  const [shadow, setShadow] = useState(false);
  useEffect(()=>{
    const handleShadow = () =>{
      if(window.scrollY >= 90){
        setShadow(true)
      }else{
        setShadow(false);
      }
      
      
      

    
    }
    window.addEventListener('scroll',handleShadow)
    console.log("ShadowEffect")
    
    return () => {
      window.removeEventListener('scroll', handleShadow)
      //console.log("Removed")
    }
    
  },[])


  return (
    <div  className={shadow? ('fixed bg-white w-full h-20 z-[100] shadow-xl'):('fixed bg-white w-full h-20 z-[100]')}>
      <div className='flex justify-between items-center w-full h-full  px-10 2xl:px-16'>
        <Image src="/../public/assets/navLogo.png" alt="/" width='75' height='50' />
        <div>
          <ul className='hidden md:flex'>
            <Link href="/#home">
              <li className='ml-10 text-lg uppercase border-b-2 hover:text-blue-400 hover:border-b-2 hover:border-black/60 ease-in duration-300'>Home</li>
            </Link>
            <Link href="/#about">
              <li className='ml-10 text-lg uppercase border-b-2 hover:text-blue-400 hover:border-b-2 hover:border-black/60 ease-in duration-300'>About</li>
            </Link>
            <Link href="/#skills">
              <li className='ml-10 text-lg uppercase border-b-2 hover:text-blue-400 hover:border-b-2 hover:border-black/60 ease-in duration-300'>Skills</li>
            </Link>
            <Link href="/#proj">
              <li className='ml-10 text-lg uppercase border-b-2 hover:text-blue-400 hover:border-b-2 hover:border-black/60 ease-in duration-300'>Projects</li>
            </Link>
            <Link href="/#contact">
              <li className='ml-10 text-lg uppercase border-b-2 hover:text-blue-400 hover:border-b-2 hover:border-black/60 ease-in duration-300'>Contact</li>
            </Link>

          </ul>
          <div onClick={handleNav} className='md:hidden mr-8 cursor-pointer'>

            <AiOutlineMenu size={25} className="hover:text-blue-400 ease-in duration-200" />
          </div>




        </div>

      </div>
      <div className={nav? 'md:hidden fixed left-0 top-0 h-screen w-full bg-black/70' : ''}>
        <div className={nav?'fixed  right-0 top-0 bg-[#ecf0f3] px-10 py-1 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-500':
                         'fixed  right-[-100%] top-0 bg-[#ecf0f3] p-10 h-screen w-[75%]  sm:w-[60%] md:w-[45%] ease-in duration-500'}>
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
          <div className='py-4  flex flex-col justify-between'>
            <ul className='uppercase' >
              <Link href='/#home'>
                <li className='py-3 m-3 text-md hover:text-blue-400 hover:ml-8  ease-in-out duration-300'>Home</li>
              </Link>
              <Link href='/#about'>
                <li className='py-3  m-3 text-md hover:text-blue-400 hover:ml-8  ease-in-out duration-300'>About</li>
              </Link>
              <Link href='/#skills'>
                <li className='py-3  m-3 text-md hover:text-blue-400 hover:ml-8 ease-in-out duration-300'>Skills</li>
              </Link>
              <Link href='/#proj'>
                <li className='py-3  m-3 text-md hover:text-blue-400 hover:ml-8 ease-in-out duration-300'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li className='py-3 m-3  text-md hover:text-blue-400  hover:ml-8 ease-in-out duration-300'>Contact</li>
              </Link>

            </ul>
            
          </div>
          <div className='flex flex-col absolute bottom-10'>
              <p className='uppercase pl-2 tracking-widest text-[#5651e5]'>Let's Connect</p>
              <div>
                <div className='flex justify-between items-center w-full  sm:w-[85%]'>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn size={20} />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <FaInstagram size={20}/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <FaGithub size={20}/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:shadow-gray-400 hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill size={20}/>
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
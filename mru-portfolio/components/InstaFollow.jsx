import Image from 'next/image'
import React from 'react'
//<Image src="/../public/assets/navLogo.png" alt="/" width='75' height='50' />

import { AiOutlineMail, AiOutlineBell, AiFillInstagram } from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
function InstaFollow() {
    return (
        <div className='w-full h-[400px] flex justify-center'>
            <div className='bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 w-[95%] sm:w-[560px] md:w-[530px] lg:w-[530px] 2xl:w-[530px] h-[530px]  p-[8px] rounded-t-[42px] flex justify-center items-center'>
                <div className='bg-black w-[100%] sm:w-[560px] md:w-[530px] lg:w-[530px] 2xl:w-[530px] h-[100%] rounded-t-[38px] flex flex-col justify-between py-[40px] px-[25px]'>{/* justify between */}
                    <div className='flex justify-between items-center'>{/* logged name, notification */}
                        <div className='text-md text-white flex items-center'>
                            <BsInstagram size={25}/>
                            <h2 className='ml-[20px] text-[25px]'>Contact Me</h2>
                        </div>
                        <div>
                            <AiOutlineBell size={30} style={{color:"white"}}/>

                        </div>
                    </div>
                    <div className='flex justify-between'>{/* Image, following */}
                        <div className='flex flex-[1]'>
                            <Image src="/../public/assets/me-back.jpg" alt="/" width='130' height='50' style={{borderRadius:"50%"}} />
                        </div>
                        <div className='flex flex-[2] justify-evenly items-center'>{/* Numbers */}
                            <div className='flex justify-center text-center flex-col text-white'>
                                <h2 className='text-[35px]'>6</h2>
                                <p>Projects</p>
                            </div>
                            <div className='flex justify-center text-center flex-col text-white'>
                                <h2 className='text-[35px]'>505</h2>
                                <p>Followers</p>
                            </div>
                            <div className='flex justify-center text-center flex-col text-white'>
                                <h2 className='text-[35px]'>485</h2>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between '>{/* Bio */}
                        <div className='text-white'>
                            <div className='w-[100%]'>
                               <p className='font-bold'>Mrunal Vaidya.&#128171;</p>
                               <p>20&#9889; </p>	
                               <p>XIE'24</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between py-[4px]'>{/* buttons */}
                        <div className='flex w-full justify-around '>

                            <button className='p-[8px] bg-blue-400 border-[1px] border-gray-600 mr-[8px] w-full  text-white tracking-wider rounded-lg hover:opacity-70 ease-in duration-100 active:opacity-40'>Follow</button>

                            <button className='bg-[#553939] p-[8px]  border-[1px] border-gray-600 mr-[8px] w-full  text-white tracking-wider rounded-lg hover:opacity-70 ease-in duration-100 active:opacity-40'>Message</button>


                        </div>
                        <div className='flex'>
                            <button className='bg-[#553939] p-[8px] border-[1px] border-gray-600 text-white tracking-wider rounded-lg hover:opacity-70 ease-in duration-100 active:opacity-40'><AiOutlineMail size={20} /></button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default InstaFollow
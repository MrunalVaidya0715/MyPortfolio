import React from 'react'
import InstaFollow from './InstaFollow'

function Contact() {
    return (
        <div id='contact' className='w-full mt-[150px]'>
            <div className='text-center relative top-[34px] hover:top-[12px] uppercase ease-in duration-200'>

                <h1 className='z-[10] font-extrabold text-transparent text-[65px] leading-snug sm:text-7xl sm:leading-snug md:text-8xl  lg:text-9xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 ease-in duration-200'>Contact me</h1>
            </div>
            {/* <div className='text-center relative top-0 uppercase z-[12] '>

                <h1 className=' font-extrabold text-transparent text-[65px] leading-snug sm:text-7xl sm:leading-snug md:text-8xl  lg:text-9xl bg-clip-text bg-gradient-to-r from-purple-900 to-blue-600 ease-in duration-200'>Contact me</h1>
            </div> */}


            <InstaFollow />




        </div>
    )
}

export default Contact
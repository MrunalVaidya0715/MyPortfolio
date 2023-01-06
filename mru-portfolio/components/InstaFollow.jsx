import Image from 'next/image'
import React, { useState } from 'react'
//<Image src="/../public/assets/navLogo.png" alt="/" width='75' height='50' />

import { AiOutlineMail, AiOutlineBell, } from 'react-icons/ai'
import { BsInstagram, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'
import InstaDM from './InstaDM';
import InstaProfile from './InstaProfile';
function InstaFollow() {
    const [dm, setDm] = useState(true);
    const handleMessage = () => {
        setDm(!dm);
    }

    return (
        <div className='w-full h-full flex justify-center'>
            <div className='z-[80] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 w-[95%] sm:w-[560px] md:w-[530px] lg:w-[530px] 2xl:w-[530px] h-[530px]  p-[8px] pb-[0px] rounded-t-[42px] flex justify-center items-center'>
                {
                    dm ? (

                        <InstaProfile dm={dm} setDm={setDm}/>

                    ) :
                        (
                            <InstaDM dm={dm} setDm={setDm}/>
                        )
                }
            </div>
        </div >
    )
}

export default InstaFollow
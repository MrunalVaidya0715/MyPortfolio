import Image from 'next/image'
import React from 'react'

function Skills() {
    return (
        <div id='skills' className=' max-w-[1240px] w-full md:h-screen m-auto p-4 '>

            <div className='flex justify-center w-full h-full flex-col'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                    Skills
                </p>

                <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-8 py-[20px] '>
                    <div className='flex items-center justify-around bg-white shadow-md hover:shadow-2xl rounded-lg p-[35px] ease-in duration-200'>
                        <Image src='/../public/assets/skills/html.png' width="65" height="50" alt="Not found" />
                        <div>
                            <p className='font-bold text-xl'>HTML</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-around bg-white shadow-md hover:shadow-2xl rounded-lg p-[35px] ease-in duration-200'>
                        <Image src='/../public/assets/skills/css.png' width="65" height="50" alt="Not found" />
                        <div>
                            <p className='font-bold text-xl'>CSS</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-around bg-white shadow-md hover:shadow-2xl rounded-lg p-[35px] ease-in duration-200'>
                        <Image src='/../public/assets/skills/javascript.png' width="65" height="50" alt="Not found" />
                        <div>
                            <p className='font-bold text-xl'>JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-around bg-white shadow-md hover:shadow-2xl rounded-lg p-[35px] ease-in duration-200'>
                        <Image src='/../public/assets/skills/react.png' width="65" height="50" alt="Not found" />
                        <div>
                            <p className='font-bold text-xl'>REACT JS</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-around bg-white shadow-md hover:shadow-2xl rounded-lg p-[35px] ease-in duration-200'>
                        <Image src='/../public/assets/skills/nextjs.png' width="65" height="50" alt="Not found" />
                        <div>
                            <p className='font-bold text-xl'>NEXT JS</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-around bg-white shadow-md hover:shadow-2xl rounded-lg p-[35px] ease-in duration-200'>
                        <Image src='/../public/assets/skills/tailwind.png' width="65" height="50" alt="Not found" />
                        <div>
                            <p className='font-bold text-xl'>TAILWIND CSS</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-around bg-white shadow-md hover:shadow-2xl rounded-lg p-[35px] ease-in duration-200'>
                        <Image src='/../public/assets/skills/node.png' width="65" height="50" alt="Not found" />
                        <div>
                            <p className='font-bold text-xl'>NODE JS</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-around bg-white shadow-md hover:shadow-2xl rounded-lg p-[35px] ease-in duration-200'>
                        <Image src='/../public/assets/skills/mongo.png' width="65" height="50" alt="Not found" />
                        <div>
                            <p className='font-bold text-xl'>MONGO DB</p>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Skills
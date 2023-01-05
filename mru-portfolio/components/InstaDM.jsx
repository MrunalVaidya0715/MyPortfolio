import Image from 'next/image'
import React from 'react'
import { BiArrowBack, BiSend } from 'react-icons/bi'

function InstaDM(props) {
    return (
        <div className='bg-black w-[100%] sm:w-[560px] md:w-[530px] lg:w-[530px] 2xl:w-[530px] h-[100%] rounded-t-[38px] flex flex-col justify-between py-[40px] px-[25px]'>{/*Justify content */}
            <div className='flex items-center justify-between'>{/*profile Info */}
                <div className='flex items-center'>{/*back button , ProfileImg */}
                    <div onClick={() => props.setDm(!props.dm)} className='mr-[30px] text-white cursor-pointer'>
                        <BiArrowBack size={30} />
                    </div>
                    <div  onClick={() => props.setDm(!props.dm) } className='cursor-pointer'>
                        <Image src="/../public/assets/me-back.jpg" alt="/" width='45' height='50' style={{ borderRadius: "50%" }} />

                    </div>
                    <div className='flex flex-col py-[2px] px-[20px] '>
                        <div>
                            <p className='text-white'>mru.v_</p>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <p className='text-gray-500'>Active</p>
                                

                            </div>
                            <div className=' w-[10px] h-[10px] ml-[4px] rounded-full bg-yellow-400'>

                                </div>
                        </div>
                    </div>
                </div>
                <div className='text-3xl cursor-pointer hover:rotate-12 ease-in duration-200'>{/*Wave HI */}
                    &#128075;
                </div>
            </div>
            <div className='flex rounded-2xl bg-[#553939] p-[9px] h-[40px]'>
                <div className='flex justify-between w-full items-center'>{/*type text */}
                    <div className=''>{/*Input Text */}
                        <input type="text" autoFocus style={{ backgroundColor: "transparent" }}></input>

                    </div>
                    <div className='text-white cursor-pointer' onClick={() => {
                         alert("Message Delivered Successfully!")
                         props.setDm(!props.dm)
                         
                    }}>{/*Send button */}
                        <BiSend size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstaDM
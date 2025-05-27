import React from 'react'
import Image from 'next/image'
import loginImage from '../assets/loginpage.png'
import { FcGoogle } from "react-icons/fc";

const GettingStarted = () => {
  return (
    <div className='w-full h-full flex justify-center items-center  overflow-hidden border-r-2 border-gray-200 bg-darkprimary'>
    
          {/* <Image src={loginImage} alt='login img' className='w-full h-full relative'  /> */}

          <div className='absolute'>
        <h1 className='py-4 font-bold text-2xl  text-fontWhite '> Getting Started </h1>
              <button className='flex gap-4 p-4 bg-white w-full items-center rounded-md'><FcGoogle size={25} /> SIGN IN WITH GOOGLE </button>
          </div>
        </div>
  )
}

export default GettingStarted
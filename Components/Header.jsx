 "use client"
import React from 'react'
import { useState } from 'react'
import AuthModal from './AuthModal';
const Header = () => {
  const [open , setOpen] = useState(false);


  const handleLoginClick = () => {
    setOpen(true);
  }

  return ( <> 
    <nav className='p-5'>
   <ul className='flex justify-between items-center'> 
   <div className='flex gap-4 fontsemibold text-lg font-geist'>
          <li> Home </li>
          <li> About </li>
          <li> contact </li>
   </div>
        <li> <button className='bg-yellow p-3  rounded-md font-geist font-semibold ' onClick={handleLoginClick}>Login</button>  </li>
   </ul>


    </nav>
    <AuthModal open={open} setOpen={setOpen} />
    
  </>
  )
}

export default Header
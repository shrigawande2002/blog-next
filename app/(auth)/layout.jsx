import GettingStarted from '@/Components/GettingStarted'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='bg-[#28282B] h-full flex  justify-center items-center'>
            <div className=' bg-darkprimary h-3/4 w-3/4 shadow-2xl rounded-xl overflow-hidden h'>
                <div className=' grid  grid-cols-1 md:grid-cols-2 bg-darkprimary h-full'>
                    <div  className=''><GettingStarted/> </div>
                    <div className='bg-darkprimary h-full'> {children} </div></div>
            </div>
        </div>
    )
}

export default Layout
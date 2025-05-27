
import React, { act } from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { loginAction, registerAction } from "@/actions/login";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useActionState } from 'react';

const AuthModal = ({ open, setOpen }) => {
    
    const [isLogin, setIsLogin] = React.useState(true);
    const [state, action, isPending] = useActionState(undefined, loginAction)
    
    return (
        <Modal
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            width={{ xs: "90%", sm: 500, md: 500, lg: 500, xl: 500, xxl: 500 }}
            centered
        >

            <div>
                <h1 className='font-geist text-xl font-semibold text-darkprimary  flex  justify-center '> {isLogin ? "Login" : "Register"} </h1>


                <form action={action} className='flex flex-col gap-4 mt-10 justify-center items-center'>

                    <div className='flex flex-col gap-4 justify-center'>

                        {!isLogin && (<> <label htmlFor="name" className='text-darkprimary font-semibold font-geist text-sm '>  Name </label>
                        <p className='flex items-center gap-2 mt-4'>
                                <FaUserCircle size={22} className='' />
                                <input type="text" placeholder='Name' autoComplete='off' className='outline-none border-b w-96 rounded-md  ' />
                            </p></>)}
                        <label htmlFor="email" className='text-darkprimary font-semibold font-geist text-sm '>  Email </label>
                        <p className='flex items-center gap-2 mt-4'>
                            <MdEmail size={22} className='' />
                            <input type="email" placeholder='E-mail' autoComplete='off' className='outline-none border-b w-96 ' />
                        </p>

                        <label htmlFor="password" className='text-darkprimary font-semibold font-geist text-sm mt-4'>  Password </label>
                        <p className='flex items-center gap-2 mt-4'>
                            <FaLock size={22} className='' />
                            <input type="password" placeholder='Password' autoComplete='off' className='outline-none border-b w-96 ' />
                        </p>

                        {!isLogin && (<>  <label htmlFor="conformpassword" className='text-darkprimary font-semibold font-geist text-sm mt-4'> Conform Password </label>
                        <p className='flex items-center gap-2 mt-4'>
                                <FaLock size={22} className='' />
                            <input type="password" placeholder='conform Password' className='outline-none border-b w-96 ' />
                            </p></>)}


                    </div>
                    <button className='bg-yellow border-none font-geist text-sm font-semibold  p-2 rounded-md  px-4'> {isLogin ? "Login" : "Register"} </button>
                    <p className='text-sm text-gray-500'>Don't have an account? <button onClick={() => setIsLogin(!isLogin)} className='text-yellow font-semibold'> {isLogin ? "Register" : "Login"} </button> </p>
                </form>
                 
            </div>

        </Modal>
    )
}


AuthModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
}
export default AuthModal
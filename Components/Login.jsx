"use client"
import React from 'react'
import { useActionState } from 'react';
import {loginAction} from "@/actions/login";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const Login = ({ setActiveTab }) => {
    const [state, action, isPending] = useActionState(loginAction, undefined);
    console.log("Login action state", isPending);
    return (
        <form action={action} className=' '>
            <div className=' mt-16 lg:mt-36 flex gap-4 flex-col items-center'>
                <input type="text" name='email' className="input" placeholder="Enter Email" />
                <input type="text" name='password' className="input" placeholder="Enter Password" />
                <button className='p-2 rounded-md border bg-yellow font-semibold text-darkprimary px-10 border-none'  >  {isPending ? <Spin indicator={<LoadingOutlined spin />} size="default" /> : "Login"} </button>
            </div>
            <div className='flex justify-center mt-4'>
                <p className='text-sm text-gray-500'>Don't have an account? <button onClick={() => setActiveTab("register")} className='text-yellow font-semibold'> Register</button></p>
            </div>
        </form>
    )
}

export default Login
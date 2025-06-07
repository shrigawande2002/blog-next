"use client"
import React from 'react'
import { useActionState } from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const CreateForm = ({handler}) => {

    const [state, action, isPending] = useActionState(handler, undefined)
    
    return (
        <div className='px-64 py-10 rounded-md'>
            <div className=' shadow-xl rounded-xl border border-gray-50 p-20'>
                <h1 className='text-2xl font-bold font-geist flex justify-center items-center'> Create New Post </h1>

                <form action={action} className='flex flex-col gap-4'>
                    <div className='flex flex-col '>
                        <label htmlFor="title" className='font-semibold font-geist '> Titlte </label>
                        <input type="text" name='title' placeholder='Enter Title' className='p-2 outline-none border border-gray-400 rounded-md shadow-md mt-4' defaultValue={state?.title} />
                    </div>
                    {state?.error && state?.error?.title && <p className='error'>{state?.error?.title}</p>}

                    <div className='flex flex-col '>

                        <label htmlFor="title" className='font-semibold font-geist '> Content </label>
                        <textarea type="text" name='content' rows={6} placeholder='Enter Content' className='p-2 outline-none border border-gray-400 rounded-md shadow-md mt-4'defaultValue={state?.content} />
                    </div>
                    {state?.error && state?.error?.content && <p className='error'>{state?.error?.content}</p>}
                    <button className='p-2 rounded-md border bg-yellow font-semibold text-darkprimary px-10 border-none'> {isPending ? <Spin
                                            indicator={<LoadingOutlined spin color='white' />}
                                            size="defult"
                    
                                            className="flex justify-center items-center  px-10"
                                        /> : "Submit "}</button>
                </form>

            </div>
        </div>
    )
}

export default CreateForm

import { CreatePost } from '@/actions/createPost'
import CreateForm from '@/Components/CreateForm'
import React from 'react'

const page = () => {
  return (
    <div>
          
          <CreateForm handler={CreatePost}/>
    </div>
  )
}

export default page

import { CreatePost } from '@/actions/createPost'
import CreateForm from '@/Components/CreateForm'
import React from 'react'

const page = () => {
  return (<CreateForm handler={CreatePost} />)
}

export default page

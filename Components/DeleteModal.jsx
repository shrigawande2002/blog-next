'use client';

import React, { useState } from 'react';
import { Modal, message } from 'antd';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { deletePost } from '@/actions/createPost'; // your server action

const DeleteModal = ({ postsFromServer }) => {
  const [posts, setPosts] = useState(postsFromServer);
  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    deletePost(selectedPost._id);
    console.log("Deleting post with ID:", selectedPost._id);
    
  };

  const formatDate = (dateStr) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(dateStr));


  return (
    <>
      <table className="min-w-full bg-darkprimary text-fontWhite border border-yellow rounded-lg overflow-hidden shadow-md">
        <thead>
          <tr className="bg-yellow text-darkprimary">
            <th className="px-6 py-3 text-center text-sm font-semibold uppercase">Sr.No</th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Title</th>
            <th className="px-6 py-3 text-center text-sm font-semibold uppercase">Action</th>
            <th className="px-6 py-3 text-center text-sm font-semibold uppercase">Created At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-yellow/40">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <tr key={post._id} className="hover:bg-yellow/10 transition-colors duration-200">
                <td className="px-6 py-4 text-center">{index + 1}</td>
                <td className="px-6 py-4 flex gap-4 text-left">
                  <img src={post.img} alt="img" className="w-8 h-8 rounded-md" />
                  {post.title}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-4 text-yellow text-lg">
                    <button title="Edit" className="hover:text-yellow/70">
                      <FiEdit />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => {
                        setSelectedPost(post);
                        setOpen(true);
                      }}
                      className="hover:text-red-400"
                    >
                      <FiTrash />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                
                   {formatDate(post.createdAt)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center px-6 py-4">
                No posts found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal
        title={<h1 className='font-geist text-xl font-semibold text-yellow bg-darkprimary '> Delete Post</h1>}
        open={open}
        onCancel={() => setOpen(false)}
        okText="Delete"
        cancelText="Cancel"
        centered
        className='custom-auth-modal'
        closeIcon={<span className='text-yellow'>X</span>}
        footer={
      <div className="flex justify-end ">
            <button
              className="bg-red-500 text-white font-geist px-4 py-2 rounded hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="bg-gray-300 text-darkprimary px-4 py-2 font-geist rounded ml-2 hover:bg-gray-400"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        }
      >
        <p className='p-4 text-white font-geist text-base'>Are you sure you want to delete this post?</p>
      </Modal>
    </>
  );
};

export default DeleteModal;

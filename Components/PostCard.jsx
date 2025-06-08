"use client";

import React from 'react';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="bg-darkprimary p-4 rounded-md shadow-md shadow-slate-950">
      <img src={post.img} alt="Post" className="w-full h-60 object-cover rounded-md" />
      <h1 className="text-2xl font-bold font-geist text-white mt-4">{post.title}</h1>
      <p className="text-white font-geist mt-2 line-clamp-2">{post.content}</p>
      <Link
        href={`/post/${post._id}`}
        className="inline-block mt-4 text-yellow font-semibold hover:underline"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostCard;

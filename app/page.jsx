import { getCollection } from '@/lib/db';
import PostCard from '@/components/PostCard';
import React from 'react';

const Page = async () => {
  const getPostCollection = await getCollection('posts');
  const postsRaw = await getPostCollection?.find().toArray();

  if (!postsRaw) {
    return <div>Failed to fetch the data</div>;
  }

  // Serialize MongoDB ObjectId fields
  const posts = postsRaw.map((post) => ({
    ...post,
    _id: post._id.toString(),
    useId: post.useId?.toString(), // Safely handle optional field
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-darkprimary p-10">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Page;

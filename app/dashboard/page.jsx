import { getCollection } from '@/lib/db';
import getAuth from '@/lib/getAuth';
import { ObjectId } from 'mongodb';
import DeleteModal from '@/Components/DeleteModal'; // adjust path

const page = async () => {
  const user = await getAuth();
  const postCollection = await getCollection('posts');

  const userPost = await postCollection
    .find({ useId: ObjectId.createFromHexString(user.userID) })
    .sort({ $natural: -1 })
    .toArray();

  const posts = userPost.map(post => ({
    _id: post._id.toString(),
    title: post.title,
    img: post.img,
    createdAt: post._id.getTimestamp().toISOString(),
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-yellow font-geist justify-center flex items-center">
        Your Posts
      </h1>
      <div className="overflow-x-auto px-4 sm:px-8 lg:px-16 py-6">
        <DeleteModal postsFromServer={posts} />
      </div>
    </div>
  );
};

export default page;

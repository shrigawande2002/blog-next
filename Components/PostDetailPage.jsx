import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";

const PostDetailPage = async ({ params }) => {
  const collection = await getCollection("posts");
  const post = await collection.findOne({ _id: new ObjectId(params.id) });

  if (!post) return <div>Post not found</div>;

  return (
    <div className="p-10 text-white bg-darkprimary">
      <img src={post.img} alt="Post" className="w-full h-80 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg">{post.content}</p>
    </div>
  );
};

export default PostDetailPage;

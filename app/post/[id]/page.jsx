import { getCollection } from "@/lib/db";
import { ObjectId } from "mongodb";
import Link from "next/link";

const PostDetailPage = async ({ params }) => {
  const collection = await getCollection("posts");

  const post = await collection.findOne({ _id: new ObjectId(params.id) });
  if (!post) return <div>Post not found</div>;

  // Fetch 3 similar posts (exclude current post)
  const similarPosts = await collection
    .find({ _id: { $ne: new ObjectId(params.id) } })
    .limit(3)
    .toArray();

  const contentChunks = post.content.match(/(.|[\r\n]){1,500}/g) || [];

  return (
    <div className="p-4 sm:p-10 text-white bg-darkprimary grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Post Content */}
      <div className="lg:col-span-3">
        <img
          src={post.img}
          alt="Post"
          className="w-full h-60 sm:h-80 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{post.title}</h1>
        {contentChunks.map((chunk, index) => (
          <p key={index} className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
            {chunk.trim()}
          </p>
        ))}
      </div>

      {/* Sidebar for Similar Posts */}
      <aside className="lg:col-span-1 border-l border-gray-700 pl-6">
        <h2 className="text-xl font-semibold mb-4 text-yellow-400">Similar Posts</h2>
        <div className="space-y-4">
          {similarPosts.map((similar) => (
            <Link key={similar._id} href={`/post/${similar._id}`} className="block group">
              <div className="bg-black rounded-md shadow-sm overflow-hidden hover:bg-dark/70 transition">
                <img
                  src={similar.img}
                  alt={similar.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-white text-sm font-semibold group-hover:text-yellow-300 truncate">
                    {similar.title}
                  </h3>
                  <p className="text-gray-400 text-xs line-clamp-2">
                    {similar.content.slice(0, 80)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default PostDetailPage;

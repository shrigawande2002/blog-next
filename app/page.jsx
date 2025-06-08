import { getCollection } from '@/lib/db';
import PostCard from '@/components/PostCard';
import SwiperSlider from '@/components/SwiperSlider';
import HeroSection from '@/components/HeroSection'; // import your client component

const Page = async () => {
  const getPostCollection = await getCollection('posts');
  const postsRaw = await getPostCollection?.find().toArray();

  if (!postsRaw) {
    return <div className="text-center py-10 text-red-400">Failed to fetch the data</div>;
  }

  const posts = postsRaw.map((post) => ({
    ...post,
    _id: post._id.toString(),
    useId: post.useId?.toString(),
  }));

  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="bg-darkprimary text-fontWhite min-h-screen flex flex-col font-geist">
      {/* HeroSection imported from above */}
      <HeroSection />

      {/* Featured Posts */}
      <section className="my-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow inline-block pb-1">
          Featured Posts
        </h2>
        <SwiperSlider posts={featuredPosts} />
      </section>

      {/* All Posts */}
      <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-10 pb-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow inline-block pb-1">
          All Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          className="transform hover:scale-[1.03] hover:shadow-lg transition-shadow transition-transform duration-300"
        />
      ))}
    </div>
      </section>

      {/* Feature Tiles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-10 py-14">
        <h2 className="text-3xl font-bold mb-10 text-center text-yellow">
          Explore More
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* About Tile */}
          <div className="bg-[#222] border border-yellow/30 rounded-2xl p-6 shadow-lg hover:shadow-yellow/30 transition duration-300">
            <h3 className="text-xl font-bold text-yellow mb-2">About This Blog</h3>
            <p className="text-fontWhite/80 text-sm">
              Learn more about the mission behind our stories and what drives us to share meaningful content every day.
            </p>
          </div>

          {/* Popular Category Tile */}
          <div className="bg-[#222] border border-yellow/30 rounded-2xl p-6 shadow-lg hover:shadow-yellow/30 transition duration-300">
            <h3 className="text-xl font-bold text-yellow mb-2">Popular Categories</h3>
            <ul className="text-fontWhite/80 text-sm list-disc list-inside">
              <li>Tech & Development</li>
              <li>Design Inspiration</li>
              <li>Life Lessons</li>
            </ul>
          </div>

          {/* Newsletter Tile */}
          <div className="bg-[#222] border border-yellow/30 rounded-2xl p-6 shadow-lg hover:shadow-yellow/30 transition duration-300">
            <h3 className="text-xl font-bold text-yellow mb-2">Stay in the Loop</h3>
            <p className="text-fontWhite/80 text-sm mb-4">
              Subscribe to our newsletter to get weekly insights, stories, and updates delivered to your inbox.
            </p>
            <button className="px-4 py-2 bg-yellow text-darkprimary rounded-full font-semibold hover:bg-yellow/90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>


      {/* Footer */}

    </div>

  );
};

export default Page;

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkprimary text-white py-10 px-6  border-t border-gray-700 font-geist">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">MyBlog</h2>
          <p className="text-gray-400 text-sm">
            A modern blog platform to share your thoughts, ideas, and stories.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
            {/* <li><Link href="/create/post" className="hover:text-yellow-400">Create Post</Link></li> */}
          </ul>
        </div>

        {/* Contact Info or Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: <a href="mailto:info@InspiWord.com" className="hover:text-yellow-400">info@InspiWord.com</a></li>
            <li>GitHub: <a href="https://github.com/InspiWord" target="_blank" className="hover:text-yellow-400">InspiWord  </a></li>
            <li>Twitter: <a href="https://twitter.com/InspiWord " target="_blank" className="hover:text-yellow-400">@InspiWord</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} InspiWord. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

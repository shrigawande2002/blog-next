"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logOut } from "@/actions/login";
import { useState } from "react";
import AuthModal from "./AuthModal";
import logo from "../assets/logo.png";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import "../app/globals.css";

export default function NavLinks({ authUser }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const isActive = (href) => pathname === href 
    ? "text-yellow underline" 
    : "text-white hover:text-gray-300";

  return (
    <nav className="w-full bg-darkprimary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full hidden md:block"
          />
          <span className="text-xl md:text-2xl font-bold text-yellow">
            InspiWord
          </span>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            Contact
          </Link>

          {authUser ? (
            <>
              <Link href="/dashboard" className={isActive("/dashboard")}>
                Dashboard
              </Link>
              <Link href="/create/post" className={isActive("/create/post")}>
                Create Post
              </Link>
              <form action={logOut}>
                <button 
                  type="submit"
                  className="text-white hover:text-yellow transition-colors"
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <button
              className="bg-yellow px-4 py-2 text-black rounded-md font-semibold hover:bg-yellow-600 transition-colors"
              onClick={() => setOpen(true)}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button - Hidden on desktop */}
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Only shows when mobileOpen is true */}
      {mobileOpen && (
        <div className="md:hidden bg-darkprimary px-4 py-2 space-y-4 border-t border-gray-800">
          <Link 
            href="/about" 
            className={`block py-2 ${isActive("/about")}`}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`block py-2 ${isActive("/contact")}`}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          
          {authUser ? (
            <>
              <Link 
                href="/dashboard" 
                className={`block py-2 ${isActive("/dashboard")}`}
                onClick={() => setMobileOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/create/post" 
                className={`block py-2 ${isActive("/create/post")}`}
                onClick={() => setMobileOpen(false)}
              >
                Create Post
              </Link>
              <form action={logOut}>
                <button 
                  type="submit" 
                  className="block py-2 text-white hover:text-yellow w-full text-left"
                  onClick={() => setMobileOpen(false)}
                >
                  Logout
                </button>
              </form>
            </>
          ) : (
            <button
              className="w-full bg-yellow p-2 rounded-md text-black font-semibold text-left"
              onClick={() => {
                setOpen(true);
                setMobileOpen(false);
              }}
            >
              Login
            </button>
          )}
        </div>
      )}
      
      {/* Auth Modal - Rendered outside navigation */}
      <AuthModal open={open} setOpen={setOpen} />
    </nav>
  );
}
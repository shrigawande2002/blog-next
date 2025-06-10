"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logOut } from "@/actions/login";
import { useState } from "react";
import AuthModal from "./AuthModal";
import logo from "../assets/logo.png";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavLinks({ authUser }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => (pathname === href ? "active-link" : "");

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full">
        <div className="gap-2 md:gap-6 font-semibold text-lg font-geist sticky z-50 p-2 md:p-4 py-8 justify-center items-center flex md:flex">
          <Link href="/" className="items-center gap-2 flex">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full hidden md:flex"
            />
            <span className="text-xl md:text-2xl font-bold text-yellow font-geist">
              InspiWord
            </span>
          </Link>

          <li className="hidden md:block">
            <Link href="/about" className={isActive("/about")}>
              About
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>

          {/* Desktop Auth Buttons */}
          <li className="hidden md:flex ml-auto gap-4">
            {authUser ? (
              <>
                <Link href="/dashboard" className={isActive("/dashboard")}>
                  Dashboard
                </Link>
                <Link href="/create/post" className={isActive("/create/post")}>
                  Create Post
                </Link>
                <form action={logOut}>
                  <button type="submit">Logout</button>
                </form>
              </>
            ) : (
              <>
                <button
                  className="bg-yellow p-2 text-black rounded-md font-geist font-semibold"
                  onClick={() => setOpen(true)}
                >
                  Login
                </button>
                <AuthModal open={open} setOpen={setOpen} />
              </>
            )}
          </li>

          {/* Hamburger Icon */}
          <button
            className="md:hidden ml-auto text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE DROPDOWN BELOW NAV */}
        {mobileOpen && (
          <div className="flex flex-col gap-4 px-6 py-4 font-geist md:hidden bg-darkprimary shadow-md z-40">
            <Link href="/about" className={isActive("/about")} onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/contact" className={isActive("/contact")} onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            {authUser ? (
              <>
                <Link href="/dashboard" className={isActive("/dashboard")} onClick={() => setMobileOpen(false)}>
                  Dashboard
                </Link>
                <Link href="/create/post" className={isActive("/create/post")} onClick={() => setMobileOpen(false)}>
                  Create Post
                </Link>
                <form action={logOut}>
                  <button type="submit" onClick={() => setMobileOpen(false)}>
                    Logout
                  </button>
                </form>
              </>
            ) : (
              <>
                <button
                  className="bg-yellow p-2 rounded-md text-black font-semibold"
                  onClick={() => {
                    setOpen(true);
                    setMobileOpen(false);
                  }}
                >
                  Login
                </button>
                <AuthModal open={open} setOpen={setOpen} />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

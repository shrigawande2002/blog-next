// ✅ app/components/NavLinks.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logOut } from "@/actions/login";
import LoginButton from "./LoginButton";
import { useState } from "react";
import AuthModal from "./AuthModal";
import logo from "../assets/logo.png";
import Image from "next/image";
export default function NavLinks({ authUser }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    pathname === href ? "active-link" : "";

  return (
    <>
      <div className="flex gap-6 font-semibold text-lg font-geist sticky z-50 p-4 py-8 justify-center items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={50} height={50} className="rounded-full " />
          <span className="text-xl md:text-2xl font-bold text-yellow font-geist">InspiWord</span>
        </Link>
        {/* <li>
          <Link href="/" className={isActive("/")}>Home</Link>
        </li> */}
        <li>
          <Link href="/about" className={isActive("/about")}>About</Link>
        </li>
        <li>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>
        </li>
      </div>

      <li>
        {authUser ? (
          <ul className="flex gap-4 font-semibold text-lg font-geist">
            <li>
              <Link href="/dashboard" className={isActive("/dashboard")}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/create/post" className={isActive("/create/post")}>
                Create Post
              </Link>
            </li>
            <form action={logOut} /* dummy */>
              <button type="submit">Logout</button>
            </form>
          </ul>
        ) : (
            <>
              <button
                className="bg-yellow p-3 rounded-md font-geist font-semibold"
                onClick={() => setOpen(true)}
              >
                Login
              </button>
              <AuthModal open={open} setOpen={setOpen} />
            </>
        )}
      </li>

      {/* <LoginButton /> */}
    </>
  );
}

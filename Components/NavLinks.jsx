// ✅ app/components/NavLinks.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ authUser }) {
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href ? "active-link" : "";

  return (
    <>
      <div className="flex gap-4 font-semibold text-lg font-geist sticky z-50 ">
        <li>
          <Link href="/" className={isActive("/")}>Home</Link>
        </li>
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
            <form action={() => {}} /* dummy */>
              <button type="submit">Logout</button>
            </form>
          </ul>
        ) : (
          <li>Login</li>
        )}
      </li>
    </>
  );
}

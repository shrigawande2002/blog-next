import getAuth from "@/lib/getAuth";
import LoginButton from "./LoginButton";
import { logOut } from "@/actions/login";
import Link from "next/link";

export default async function Header() {
  const authUser = await getAuth();
  // console.log("Authenticated user:", authUser);

  return (
    <nav className="p-5">
      <ul className="flex justify-between items-center">
        <div className="flex gap-4 fontsemibold text-lg font-geist">
          <li><Link href="/"> Home</Link></li>
          <li><Link href="/about"> About</Link></li>
          <li><Link href="/contact"> Contact</Link></li>

        </div>
        <li>
          {authUser ? (<>
            <ul className="flex gap-4 fontsemibold text-lg font-geist">

              <li ><Link href="/dashboard"> Dashboard</Link></li>
              <li ><Link href="/create/post"> Create Post</Link></li>
              <form action={logOut}>
                <button>Logout</button>
              </form>
            </ul>

          </>
          ) : (
            <LoginButton />
          )}
        </li>
      </ul>
    </nav>
  );
}

// app/components/Header.jsx
import getAuth from "@/lib/getAuth";
import LoginButton from "./LoginButton";

import NavLinks from "./NavLinks"; // 👈 client-side link rendering

export default async function Header() {
  const authUser = await getAuth();

  return (
    <nav className="p-5 bg-darkprimary text-white">
      <ul className="flex justify-between items-center">
        <NavLinks authUser={authUser} />
      </ul>
    </nav>
  );
}

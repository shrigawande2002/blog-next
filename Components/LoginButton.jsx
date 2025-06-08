"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

export default function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="bg-yellow p-3 rounded-md font-geist font-semibold"
        onClick={() => setOpen(true)}
      >
        Login
      </button>
      <AuthModal open={open} setOpen={setOpen} />
    </>
  );
}

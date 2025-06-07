"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

const LoginButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-yellow p-3 rounded-md font-geist font-semibold"
      >
        Login
      </button>
      <AuthModal open={open} setOpen={setOpen} />
    </>
  );
};

export default LoginButton;

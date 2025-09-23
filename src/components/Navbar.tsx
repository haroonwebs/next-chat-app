"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[10vh] flex items-center justify-between bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10">
      <Link className="font-bold text-xl" href="/">
        Logo
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        <Link className="navlinks hover:text-black" href="/">
          Home
        </Link>
        <Link className="navlinks hover:text-black" href="/users">
          Users
        </Link>
        <Link className="navlinks hover:text-black" href="/friends">
          Friends
        </Link>
        <Link className="navlinks hover:text-black" href="/auth/login">
          Login
        </Link>
        <Link className="navlinks hover:text-black" href="/auth/signup">
          Signup
        </Link>
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white md:hidden shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/users" onClick={() => setIsOpen(false)}>
                Users
              </Link>
            </li>
            <li>
              <Link href="/friends" onClick={() => setIsOpen(false)}>
                Friends
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="text-black hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/auth/signup"
                className="text-black hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

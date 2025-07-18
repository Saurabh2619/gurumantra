"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="shadow-sm w-full">
        <div className="container flex items-center justify-between h-16 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1">
            <span>🌀</span>
            <h1 className="font-bold text-lg">Logo</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">Home</Link>
            <Link href="/program">Program</Link>
            <Link href="/exams">Exams</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-2">
            <button className="border-2 border-blue-800 px-3 py-1 text-sm rounded hover:bg-blue-800 hover:text-white transition">
              Log In
            </button>
            <button className="border-2 border-blue-800 px-3 py-1 text-sm rounded hover:bg-blue-800 hover:text-white transition">
              Register
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-blue-800" /> : <Menu className="text-blue-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden fixed top-0 left-0 w-4/5 h-screen bg-[#0d47a1] text-white flex flex-col items-center justify-center space-y-6 z-50">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold">
              GuruMantra
            </Link>
            <nav className="flex flex-col items-center space-y-6 text-xl font-semibold">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                Home
              </Link>
              <Link href="/program" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                Program
              </Link>
              <Link href="/exams" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                Exams
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                About Us
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
      <p className=" sm:text-yellow-500 md:text-green-500 ">
  Hello Colors
</p>


    </>
  );
}

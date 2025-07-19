"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// // import { div } from "framer-motion/client";


export default function Navbar() {
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
    const [isExamDropdownOpen, setIsExamDropdownOpen] = useState(false);
    const [mobileProgramDropdown, setMobileProgramDropdown] = useState(false);
  //   const [mobileExamDropdown, setMobileExamDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="shadow-md w-full">
        <div className="container flex items-center justify-between h-16 mx-auto max-w-7xl">
          <Link href="/">
           🌀
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative" onMouseEnter={()=>setIsProgramDropdownOpen(true)} onMouseLeave={()=>setIsProgramDropdownOpen(false)}>
                <button className="flex items-center gap-1">Program <ChevronDown size={16} className={`transition-transform ${isProgramDropdownOpen ? "rotate-180":""}`}/></button>
                <AnimatePresence>
                    {isProgramDropdownOpen &&(
                        <motion.div initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white shadow-lg border border-gray-200 rounded-md z-50 ">
                        <Link href="" className="hover:bg-blue-50 block px-4 py-2">home</Link>
                        <Link href="" className="hover:bg-blue-50 block px-4 py-2">home</Link>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="relative"
            onMouseEnter={()=> setIsExamDropdownOpen(true)}
            onMouseLeave={()=>setIsExamDropdownOpen(false)}>
                <button className="flex items-center gap-1">Exam <ChevronDown size={16} className={`transition-transform ${isExamDropdownOpen ? "rotate-180":""}`}/></button>
                <AnimatePresence>
                {isExamDropdownOpen && (
                    <motion.div initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-white left-1/2 transform -translate-x-1/2 shadow-lg border border-gray-200 mt-2 w-40 ">
                        <Link href="" className="hover:bg-blue-50 block px-4 py-2">ghar 1</Link>
                        <Link href="" className="hover:bg-blue-50 block px-4 py-2">ghar 2</Link>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Link href="">Home 3</Link>
            <Link href="">Home 4</Link>
          </nav>

          <div className="hidden md:flex gap-3 text-lg font-bold">
            <button className="border-2 border-blue-600 rounded-sm py-1 px-2.5 hover:bg-blue-800 hover:text-white">Login</button>
            <button className="border-2 border-blue-600 rounded-sm py-1 px-2.5 hover:bg-blue-800 hover:text-white">Register</button>
          </div>

{/*Mobile button*/ }
        <div className="md:hidden">
          <button onClick={()=> setIsOpen(!isOpen)}>{isOpen?<X/>:<Menu/>}</button>
        </div>
          
        </div>

        {isOpen &&(

          <div className="md:hidden flex flex-col bg-blue-200 justify-center items-center top-0 w-4/5 h-screen fixed space-y-6">
            <Link href="">Guru Mantra</Link>
            <nav className=" items-center flex flex-col space-y-7">
              <Link href="">Home</Link>
              <div className=" flex flex-col items-center">
                <div className="flex items-center">

                </div>
              </div>
              <Link href="">Home</Link>
              <Link href="">Home</Link>
              <Link href="">Home</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

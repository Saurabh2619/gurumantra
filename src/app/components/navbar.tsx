"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronUp, GraduationCap } from "lucide-react"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-sm transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-xl"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-blue-700" />
          <h1 className="text-3xl font-bold text-blue-900">GuruMantra</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-lg">
          <Link
            href="/"
            className="font-medium text-blue-900 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/mba"
            className="font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            MBA
          </Link>
          <Link
            href="#"
            className="font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Programs
          </Link>
          <Link
            href="/about"
            className="font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex border-blue-700 text-blue-700 hover:bg-blue-700">
            Log in
          </Button>
          <Button className="hidden md:flex bg-blue-700 hover:bg-blue-600">
            Get Started
          </Button>

          <motion.button
            className="md:hidden z-50 text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-lg z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%", borderRadius: "50% 0 0 50%" }}
              animate={{ x: "0%", borderRadius: "0" }}
              exit={{ x: "-100%", borderRadius: "50% 0 0 50%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-4/5 h-screen bg-[#0d47a1]  backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-lg z-50"
            >
              <motion.div>
                <Link href="/" className="text-3xl font-bold text-white mb-6" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-8 w-8 text-white" />
                    <span>GuruMantra</span>
                  </div>
                </Link>
              </motion.div>

              <nav className="flex flex-col items-center space-y-6">
                {[
                  { name: "Home", path: "/" },
                  { name: "Colleges", path: "/colleges" },
                  { name: "Programs", path: "/programs" },
                  { name: "About Us", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2 + index * 0.15,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Link
                        href={item.path}
                        className="text-white hover:text-yellow-400 text-xl font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.name === "Programs" && (
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-white">
                          {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      )}
                    </div>
                    {item.name === "Programs" && isDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="pl-6 space-y-2 text-white"
                      >
                        <li>
                          <Link
                            href="/programs/undergraduate"
                            className="block px-4 py-2 hover:bg-blue-700/80 rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            Undergraduate
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/programs/graduate"
                            className="block px-4 py-2 hover:bg-blue-700/80 rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            Graduate
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/programs/certificate"
                            className="block px-4 py-2 hover:bg-blue-700/80 rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            Certificate
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-8 flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Button>
                <Button
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-400/90"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

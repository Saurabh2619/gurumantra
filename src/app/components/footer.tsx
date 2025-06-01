"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden mt-auto">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 py-6 relative z-10">
        
        {/* Logo and Description */}
        <div className="text-center md:text-left mb-6 md:mb-0 max-w-sm">
          <h2 className="text-3xl font-extrabold text-[#2196f3]">GuruMantra</h2>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Your go-to platform for in-depth college details, admissions, and career guidance.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-gray-300 text-md font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/mba", label: "MBA" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="hover:text-blue-400 transition-all duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-6 md:mt-0">
          {[
            { href: "#", icon: <Facebook size={24} />, label: "Facebook" },
            { href: "#", icon: <Instagram size={24} />, label: "Instagram" },
            { href: "#", icon: <Twitter size={24} />, label: "Twitter" },
            { href: "#", icon: <Linkedin size={24} />, label: "LinkedIn" },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-blue-400 transition-all duration-300"
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Animated Background Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"
      />

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4 relative z-10">
        &copy; {year ?? ""} GuruMantra. All rights reserved.
      </div>
    </footer>
  );
}

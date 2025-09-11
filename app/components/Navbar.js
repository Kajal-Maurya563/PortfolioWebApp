"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-neutral-800 text-gray-400 p-4 flex justify-around items-center rounded-b-lg relative">
      {/* Logo */}
      <div className="mx-7 text-2xl font-bold">K</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12">
        <li>
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-300 transition-colors duration-200">
            Projects&Works
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-gray-300 transition-colors duration-200">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/getintouch" className="hover:text-gray-300 transition-colors duration-200">
            Get In Touch
          </Link>
        </li>
      </ul>
      

      {/* Hamburger (Mobile Only) */}
      <div
        className="hamburger md:hidden cursor-pointer hover:bg-gray-600 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div> */}
         <img src="/icons/hamburger.svg" alt="hamburger" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-800 flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-300 transition-colors duration-200">
            Projects&Works
          </Link>
          <Link href="/skills" className="hover:text-gray-300 transition-colors duration-200">
            Skills
          </Link>
          <Link href="/getintouch" className="hover:text-gray-300 transition-colors duration-200">
            Get In Touch
          </Link>

        </div>
      )}
    </nav>
  );
}

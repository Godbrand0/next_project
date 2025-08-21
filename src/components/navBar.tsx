"use client"; // Important for Next.js 13+ app directory

import { FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

import ResponsiveMenu from "./responsiveMenu";
import { useState } from "react";

export default function NavBar() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-7 py-4 bg-[#b7d5d6] fixed top-0 w-full z-25">
      <h1 className="text-4xl font-bold">trip & fun</h1>

      <ResponsiveMenu setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className="flex gap-2">
        <button
          className="lg:hidden p-2 text-2xl "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FiX className="cursor-pointer" />
          ) : (
            <FiMenu className="cursor-pointer hover:text-gray-900" />
          )}
        </button>

        <div className="flex items-center relative">
          <h1 className="hidden lg:block">My cart:</h1>
          <FaShoppingCart className="text-xl lg:hidden cursor-pointer hover:text-gray-900" />
          <span className="py-[0.1rem] px-[0.4rem] rounded-[50%] text-xs bg-black">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}

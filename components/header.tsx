"use client";

import React from "react";
//import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const slideDown = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  };


  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="hidden sm:block fixed top-0 left-1/2 h-[4.5rem] w-full max-w-[90%] sm:max-w-[46rem] px-4 sm:px-6 -translate-x-1/2 rounded-full border border-[#bcc4aa]/40 bg-[#e8eddf]/40 shadow-lg backdrop-blur-md sm:top-6 sm:h-[3.25rem] dark:bg-[#1e251d]/40 dark:border-[#384032]/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* Desktop Nav */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2 z-50">
        <ul className="flex items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-800 dark:text-[#e4f2dc]">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "px-3 py-3 hover:text-[#7a8b61] transition dark:hover:text-[#b9d5a1]",
                  {
                    "text-[#414d36] dark:text-[#a0b494]": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-[#dcecc9] dark:bg-[#3d4633] rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile icon */}
      <div className="sm:hidden fixed top-4 right-4 z-50">
        <button
          className="text-3xl text-[#414d36] dark:text-white"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile slide*/}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 text-lg font-medium bg-[#e8eddf]/60 dark:bg-[#1e251d]/60 backdrop-blur-md"
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {links.map((link) => (
              <Link
                key={link.hash}
                href={link.hash}
                className="text-[#414d36] dark:text-white hover:text-[#7a8b61] dark:hover:text-[#b9d5a1] transition"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

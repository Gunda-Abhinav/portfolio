"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      title="Toggle Light/Dark Theme"
      onClick={toggleTheme}
      className={`
        fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full 
        flex items-center justify-center
        shadow-lg transition-all duration-300 
        hover:scale-110 active:scale-105
        ${
          theme === "light"
            ? "bg-[#e8eddf] text-[#1e251d] border border-[#bcc4aa]"
            : "bg-[#1e251d] text-[#e8eddf] border border-[#3d4633]"
        }
      `}
    >
      {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}

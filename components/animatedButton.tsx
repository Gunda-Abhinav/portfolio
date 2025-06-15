"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function AnimatedButton({
  children,
  onClick,
  href,
  download,
  disabled = false,
  className,
}: AnimatedButtonProps) {
  const sharedClass =
    "group flex items-center justify-center gap-2 h-9 px-4 rounded-full text-xs font-medium transition-all ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const baseClass = disabled
    ? "bg-[#a8b798] text-white dark:bg-[#5e6f47] dark:text-white cursor-not-allowed opacity-70"
    : "";

  const element = (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onClick}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`${sharedClass} ${baseClass} ${className ?? ""}`}
    >
      {children}
    </motion.button>
  );

  return href ? (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${sharedClass} ${baseClass} ${className ?? ""} text-center`}
    >
      {children}
    </motion.a>
  ) : (
    element
  );
}

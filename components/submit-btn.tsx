"use client";

import React, { useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const liveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pending && liveRef.current) {
      liveRef.current.textContent = "Sending message...";
    } else if (liveRef.current) {
      liveRef.current.textContent = "";
    }
  }, [pending]);

  return (
    <>
      <motion.button
        type="submit"
        disabled={pending}
        className={`
          group relative flex items-center justify-center gap-2
          h-[3rem] w-full sm:w-[8rem]
          rounded-full px-4 py-2
          text-sm font-medium
          transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${pending
            ? "bg-[#a8b798] text-white dark:bg-[#5e6f47] dark:text-white"
            : "bg-[#414d36] text-white hover:bg-[#3b452f] dark:bg-[#e8eddf] dark:text-[#1e251d] dark:hover:bg-[#d4dec9]"
          }
          disabled:cursor-not-allowed disabled:opacity-70
        `}
        whileHover={!pending ? { scale: 1.05 } : {}}
        whileTap={!pending ? { scale: 0.95 } : {}}
      >
        <AnimatePresence mode="wait" initial={false}>
          {pending ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-white dark:border-black"
            />
          ) : (
            <motion.div
              key="text"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="flex items-center gap-2"
            >
              Submit{" "}
              <motion.span
                className="text-xs opacity-70"
                whileHover={{
                  x: 4,
                  y: -4,
                  rotate: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <FaPaperPlane />
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <div
        ref={liveRef}
        aria-live="polite"
        className="sr-only"
      />
    </>
  );
}

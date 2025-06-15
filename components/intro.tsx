"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Typewriter } from "react-simple-typewriter";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        className="flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Image */}
        <motion.div
          variants={fadeInUp}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          whileHover={{ rotate: -6, scale: 1.05 }}
          whileTap={{ rotate: -6, scale: 1.05 }}
          className="relative inline-block rounded-full"
        >
          <div className="absolute inset-0 rounded-full z-[-1] bg-[#414d36] dark:bg-white blur-2xl scale-80 opacity-20"></div>

          <Image
            src={`/abhi.jpg`}
            alt="Abhi portrait"
            width="195"
            height="195"
            quality="95"
            priority
            className="h-60 w-60 rounded-full object-cover border-[0.30rem] border-[#414d36] dark:border-white shadow-xl transition-transform hover:scale-105"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          variants={fadeInUp}
        >
          <span className="font-bold">Hello, I'm Abhinav Gunda.</span>
          <br />
          <span>I am a{" "}</span>
          <span className="font-bold text-[#414d36] dark:text-[#b9d5a1]">
            <Typewriter
              words={[
                "Software Engineer",
                "Web Developer",
                "Full Stack Engineer",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 px-4 text-lg font-medium"
          variants={fadeInUp}
        >
          <Link
            href="#contact"
            className="group bg-[#7a8b61] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-[#6c7d55] active:scale-100 transition"

            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-[#bcc4aa] dark:bg-[#1e251d] dark:text-[#d2e0c6]"

            href="/abhinavResume.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/gunda-abhinav/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Gunda-Abhinav"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
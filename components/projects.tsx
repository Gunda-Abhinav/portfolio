"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData, projectDetails } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Zoom } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./animatedButton";

const flipIn = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  exit: {
    rotateY: 90,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const contentAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1 }
  })
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[number] | null>(null);

  return (
    <section ref={ref} id="projects" className="mb-28 max-w-5xl mx-auto scroll-mt-28 sm:mb-40">
      <Zoom triggerOnce>
        <SectionHeading>My Projects</SectionHeading>
      </Zoom>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, transition: { duration: 0.03 } }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.01, duration: 0.02, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between h-full bg-white dark:bg-white/10 dark:text-white border border-black/5 rounded-xl p-4 shadow-md cursor-pointer hover:shadow-lg transition-all"
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-white/70">{project.description}</p>
            </div>

            <ul className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, i) => (
                <li
                  key={i}
                  className="bg-black/[0.7] px-2 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <AnimatedButton onClick={() => setSelectedProject(project)}
                className="bg-[#414d36] text-white dark:bg-[#e8eddf] dark:text-[#1e251d]">
                Read more
              </AnimatedButton>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={flipIn}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#e8eddf] dark:bg-[#1e251d] text-[#1e251d] dark:text-[#e8eddf] max-w-2xl w-full rounded-xl shadow-xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-xl font-bold text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                ×
              </button>
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial="hidden"
                animate="visible"
                variants={contentAnimation}
                custom={0}
              >
                {selectedProject.title}
              </motion.h3>
              <motion.ul
                className="list-disc pl-5 text-sm mb-4 space-y-2 text-gray-800 dark:text-white/80"
                initial="hidden"
                animate="visible"
              >
                {projectDetails[selectedProject.title]?.details.map((point, idx) => (
                  <motion.li key={idx} variants={contentAnimation} custom={idx}>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
              {projectDetails[selectedProject.title]?.github && (
                <motion.div
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm"
                  initial="hidden"
                  animate="visible"
                  variants={contentAnimation}
                  custom={projectDetails[selectedProject.title].details.length + 1}
                >
                  <div className="mt-auto pt-4">
                    <AnimatedButton href={projectDetails[selectedProject.title]?.github}
                      className="bg-[#414d36] text-white dark:bg-[#e8eddf] dark:text-[#1e251d]">
                      View on GitHub
                    </AnimatedButton>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

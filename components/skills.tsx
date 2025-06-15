"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Zoom, Fade } from "react-awesome-reveal";
import { categorizedSkills } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-5xl mx-auto scroll-mt-28 text-center sm:mb-40"
    >
      <Zoom triggerOnce>
        <SectionHeading>My Skills</SectionHeading>
      </Zoom>

      <div className="grid gap-10 mt-10 md:grid-cols-2">
        {categorizedSkills.map((group, groupIndex) => (
          <div key={group.category} className="text-left">
            <Fade cascade damping={0.1} triggerOnce direction="up">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    className="bg-white borderBlack rounded-xl px-4 py-2 text-sm dark:bg-white/10 dark:text-white/80"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
}

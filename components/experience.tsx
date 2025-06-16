"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { Fade, Zoom } from "react-awesome-reveal";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section id="experience" ref={ref}
      // className="scroll-mt-28 mb-28 sm:mb-40"
      className="scroll-mt-28 mb-28 sm:mb-40 px-4 py-10 rounded-2xl shadow-md dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-white/10">
      <Zoom triggerOnce>
        <SectionHeading>Experience</SectionHeading>
      </Zoom>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <Fade
              direction="up"
              triggerOnce
              damping={0.15}
              delay={index * 100}
              key={index}
            >
              <div className="mb-10">
                <VerticalTimelineElement
                  position={index % 2 === 0 ? "left" : "right"}
                  contentStyle={{
                    background:
                      theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    borderRadius: "1rem",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                  }}
                  icon={item.icon}
                  iconStyle={{
                    background:
                      theme === "light" ? "#5e6f47" : "#ffffff",
                    fontSize: "1.5rem",
                    zIndex: 1,
                    boxShadow: theme === "light"
                      ? "0 0 0 4.55px #dcecc9, 0 0 8px rgba(122, 139, 97, 0.3)"
                      : "0 0 0 4.55px #ffffff, 0 0 12px rgba(255, 255, 255, 0.3)",
                    color: theme === "light" ? "white" : "#3c3c3c",
                  }}
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 sm:mb-0">
                    {item.date}
                  </div>
                  <motion.h3 className="font-semibold capitalize"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    {item.title}
                  </motion.h3>
                  <p className="font-normal !mt-0">{item.location}</p>

                  <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-white/75 space-y-1">
                    {item.description.map((point, i) => (
                      <motion.li key={i}
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 250 }}>{point}
                      </motion.li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              </div>
            </Fade>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

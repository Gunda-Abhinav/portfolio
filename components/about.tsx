"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { Zoom, Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <Zoom triggerOnce cascade damping={0.2}>
        <SectionHeading>About Me</SectionHeading>
      </Zoom>

      <Fade
        direction="up"
        triggerOnce
        delay={500} // milliseconds
        cascade
        damping={0.1}
      >
        <p className="text-gray-700 dark:text-white/80 mt-6">
          Full-Stack Software Engineer with 4+ years of experience building scalable, high-performance
          web and enterprise applications in the Insurance domain. Proficient in C#, .NET, Angular, and 
          React, with expertise in designing RESTful APIs, implementing microservices, and optimizing 
          backend systems for speed and reliability. Skilled in deploying cloud-native solutions on both 
          AWS and GCP, leveraging services like Cloud Functions and Kubernetes for robust and 
          cost-effective infrastructure. Experienced in Agile environments, mentoring junior engineers,
          and delivering secure, maintainable applications that drive business impact.
        </p>
      </Fade>
    </section>
  );
}
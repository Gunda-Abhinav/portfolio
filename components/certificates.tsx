"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { certificatesData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Zoom } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import AnimatedButton from "./animatedButton";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Certificates() {
  const { ref } = useSectionInView("Certificates", 0.5);
  const [selectedCert, setSelectedCert] = useState<typeof certificatesData[number] | null>(null);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section id="certificates" className="mb-28 max-w-5xl mx-auto scroll-mt-28 sm:mb-40">
      <Zoom triggerOnce>
        <SectionHeading>My Certificates</SectionHeading>
      </Zoom>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-white/10 dark:text-white border border-black/5 rounded-xl p-4 shadow-md flex flex-col items-start"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
            <p className="text-sm text-gray-600 dark:text-white/60 mb-4">{cert.issuer}</p>
            <div className="mt-auto">
              <AnimatedButton
                onClick={() => setSelectedCert(cert)}
                className="mt-auto bg-[#414d36] text-white dark:bg-[#e8eddf] dark:text-[#1e251d] px-4 py-2 rounded-full text-sm transition hover:scale-105"
              >
                View Certificate
              </AnimatedButton>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative bg-[#e8eddf] text-[#1e251d] dark:bg-[#1e251d] dark:text-[#e8eddf] rounded-xl p-4 max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-4 text-xl text-[#5e6f47] dark:text-[#dcecc9]
             bg-white dark:bg-[#2a2a2a] shadow-md rounded-full w-8 h-8 flex items-center justify-center
             hover:text-red-500 transition"
              >
                ×
              </button>
              <Image
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                width={900}
                height={600}
                className="rounded-lg w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

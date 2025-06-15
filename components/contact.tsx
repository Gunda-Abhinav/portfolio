"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { Zoom, Fade } from "react-awesome-reveal";
import Modal from "./modal";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [modalStatus, setModalStatus] = React.useState<"idle" | "sending" | "sent">("idle");
  const [showThankYou, setShowThankYou] = React.useState(false);


  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1, }}
      viewport={{ once: true, }}
    >
      <Zoom triggerOnce>
        <SectionHeading>Contact me</SectionHeading>
      </Zoom>

      <Fade
        direction="up"
        triggerOnce
        delay={500}
        cascade
        damping={0.1}
      >
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Whether it's a project idea, feedback, or a simple hello — 
          I’d love to hear from you! Drop a message below or email me at {" "}
          <a className="underline" href="mailto:abhinavg2829@gmail.com">
            <strong>abhinavg2829@gmail.com</strong>
          </a>{" "}
        </p>


        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            setModalStatus("sending");
            await new Promise((resolve) => setTimeout(resolve, 300));
            const { data, error } = await sendEmail(formData);

            if (error) {
              setModalStatus("idle");
              toast.error(error);
              return;
            }

            setModalStatus("sent");
            setShowThankYou(true);
            const form = document.querySelector("#contact-form") as HTMLFormElement;
            form?.reset();

            // Close on 3.5 seconds
            setTimeout(() => {
              const form = document.querySelector("#contact-form") as HTMLFormElement;
              form?.reset();
              setShowThankYou(false)
              setModalStatus("idle");
            }, 3500);
          }}
          id="contact-form"
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg border border-[#bcc4aa] p-4 bg-white dark:bg-[#1e251d] dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none text-gray-800 dark:text-[#e8eddf]"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
          <AnimatePresence>
            {showThankYou && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 text-sm text-[#4d5b3d] dark:text-[#dcecc9] font-semibold flex items-center justify-center gap-2"
              >
                <span className="text-lg">✅</span> Thank you! Your message has been sent.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Fade>
      <Modal status={modalStatus} onClose={() => setModalStatus("idle")} />
    </motion.section>
  );
}

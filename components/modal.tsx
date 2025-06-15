"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  status: "idle" | "sending" | "sent";
  onClose: () => void;
}

export default function Modal({ status, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {status !== "idle" && (
        <motion.div
          key="modal"
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="rounded-xl px-6 py-4 text-center shadow-xl border border-[#bcc4aa]
                       bg-[#e8eddf] text-[#1e251d] dark:bg-[#1e251d] dark:text-[#e8eddf] dark:border-[#3c4533]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-semibold">
              {status === "sending" ? "Sending..." : "Message Sent!"}
            </p>
            {status === "sent" && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="mt-3 text-4xl"
              >
                ✅
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

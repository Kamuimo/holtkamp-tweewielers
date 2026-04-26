"use client";

import { motion } from "framer-motion";

/**
 * template.tsx remounts on every route change, so this gives us a fresh
 * `motion.div` per page — no flash before the animation kicks in.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      style={{ willChange: "opacity" }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}

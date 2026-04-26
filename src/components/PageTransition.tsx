"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1], // Material standard — pure opacity = GPU-cheap
        }}
        style={{ willChange: "opacity" }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  showDivider?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  showDivider = true,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-20 md:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform-gpu"
      >
        {children}
      </motion.div>
      {showDivider && (
        <div className="section-divider max-w-4xl mx-auto mt-20" />
      )}
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1] text-text-primary-light dark:text-text-primary-dark"
      >
        {title}
        <span className="text-white/20">.</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

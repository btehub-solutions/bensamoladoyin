"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillBadge({ name, level, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-mono text-text-primary-light dark:text-text-primary-dark group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-slate-200/50 dark:bg-dark-bg rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
          className="h-full rounded-full bg-white relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { communityItems } from "@/data/community";
import {
  FiMic,
  FiBookOpen,
  FiCode,
  FiUsers,
  FiHeart,
  FiExternalLink,
} from "react-icons/fi";

const typeIcons: Record<string, React.ElementType> = {
  talk: FiMic,
  article: FiBookOpen,
  workshop: FiCode,
  "open-source": FiCode,
  mentorship: FiUsers,
};

const typeLabels: Record<string, string> = {
  talk: "Conference Talk",
  article: "Article / Newsletter",
  workshop: "Workshop",
  "open-source": "Open Source",
  mentorship: "Mentorship",
};

const typeColors: Record<string, string> = {
  talk: "text-white bg-white/10 border-white/20",
  article: "text-white bg-white/10 border-white/20",
  workshop: "text-white bg-white/10 border-white/20",
  "open-source": "text-white bg-white/10 border-white/20",
  mentorship: "text-white bg-white/10 border-white/20",
};

export default function CommunitySection() {
  return (
    <SectionWrapper id="community">
      <SectionHeading
        title="Community & Impact"
        subtitle="Giving back through teaching, speaking, and open source"
      />

      <div className="max-w-4xl mx-auto space-y-5">
        {communityItems.map((item, index) => {
          const Icon = typeIcons[item.type] || FiHeart;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="group flex gap-4 p-6 rounded-2xl bg-white dark:bg-black border border-light-border dark:border-dark-border glow-card transform-gpu backface-hidden shadow-sm hover:shadow-md hover:border-white/30"
              style={{
                transition: "border-color 0.3s ease, box-shadow 0.3s ease"
              }}
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-base font-display font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${typeColors[item.type]}`}
                  >
                    {typeLabels[item.type]}
                  </span>
                </div>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-body leading-relaxed mb-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark">
                    {item.date}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors"
                    >
                      View
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

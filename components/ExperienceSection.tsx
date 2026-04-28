"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { experiences } from "@/data/experience";
import { RiMapPinLine, RiCalendarLine, RiArrowRightSLine } from "react-icons/ri";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey in AI and Machine Learning"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)] md:text-left"
              } pl-8 md:pl-0`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-white border-4 border-light-bg dark:border-dark-bg z-10 left-0 md:left-1/2 transform -translate-x-1/2`}
              >
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
              </div>

              {/* Card */}
              <div 
                className="p-6 rounded-2xl bg-white dark:bg-black border border-light-border dark:border-dark-border hover:shadow-xl hover:shadow-white/5 hover:border-white/30 glow-card transform-gpu backface-hidden"
                style={{
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                  willChange: "transform, opacity"
                }}
              >
                {/* Header */}
                <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
                    {exp.role}
                  </h3>
                  <a 
                    href={exp.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white font-body font-bold mt-1 hover:underline transition-all"
                  >
                    {exp.organization}
                  </a>
                  <div className={`flex items-center gap-4 mt-2 text-sm text-text-muted-light dark:text-text-muted-dark font-body ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="flex items-center gap-1">
                      <RiMapPinLine className="w-[14px] h-[14px]" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <RiCalendarLine className="w-[14px] h-[14px]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className={`space-y-3 mb-6 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  {exp.description.map((bullet, i) => (
                    <li
                      key={i}
                      className={`text-sm text-text-muted-light dark:text-text-muted-dark font-body flex items-start gap-2 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <RiArrowRightSLine 
                        className={`text-white/40 mt-1 shrink-0 ${index % 2 === 0 ? "rotate-180" : ""}`} 
                        size={16} 
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className={`flex flex-wrap gap-1.5 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-light-bg dark:bg-dark-bg text-xs font-mono text-text-muted-light dark:text-text-muted-dark border border-light-border dark:border-dark-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

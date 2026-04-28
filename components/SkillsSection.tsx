"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import SkillBadge from "./SkillBadge";
import { skillCategories } from "@/data/skills";
import { 
  SiPython, SiTensorflow, SiPytorch, SiJavascript, SiTypescript, SiDocker, 
  SiKubernetes, SiFastapi, SiFlask, SiNextdotjs, SiReact, 
  SiPostgresql, SiMongodb, SiRedis, SiPandas, SiScikitlearn, SiKeras, SiHuggingface,
  SiOpenai, SiAnthropic, SiN8N, SiVercel, SiApachekafka
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import React from "react";

const iconMap: Record<string, React.ElementType> = {
  "Python": SiPython, "TensorFlow": SiTensorflow, "PyTorch": SiPytorch,
  "JavaScript": SiJavascript, "TypeScript": SiTypescript, "Docker": SiDocker,
  "Kubernetes": SiKubernetes, "AWS": FaAws, "FastAPI": SiFastapi,
  "Flask": SiFlask, "Next.js": SiNextdotjs, "React": SiReact,
  "PostgreSQL": SiPostgresql, "MongoDB": SiMongodb, "Redis": SiRedis,
  "Pandas": SiPandas, "Scikit-learn": SiScikitlearn, "Keras": SiKeras,
  "Hugging Face": SiHuggingface, "OpenAI API": SiOpenai, "Anthropic Claude": SiAnthropic,
  "n8n": SiN8N, "Vercel": SiVercel, "Apache Kafka": SiApachekafka
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Built on the right foundations."
        subtitle="We use battle tested, production grade tools to build AI systems that are fast, scalable, and maintainable."
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {skillCategories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={`px-4 py-2 rounded-xl text-sm font-body transition-all duration-300 ${
              activeCategory === index
                ? "bg-white text-black font-bold shadow-lg shadow-white/10"
                : "bg-light-card dark:bg-black text-text-muted-light dark:text-text-muted-dark border border-light-border dark:border-dark-border hover:border-white/30"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5 p-6 md:p-8 rounded-2xl bg-white/5 dark:bg-black border border-light-border dark:border-dark-border">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* All Skills Marquee */}
      <div className="mt-16 overflow-hidden">
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-body mb-8 text-center">
          All Technologies
        </p>
        
        <div className="flex flex-col gap-4 marquee-mask">
          {/* Row 1: Scrolling Left */}
          <div className="animate-marquee-left flex gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={`row1-${i}`} className="flex gap-4">
                {skillCategories
                  .flatMap((cat) => cat.skills)
                  .slice(0, Math.ceil(skillCategories.flatMap(c => c.skills).length / 2))
                  .map((skill) => {
                    const Icon = iconMap[skill.name];
                    return (
                      <span
                        key={`${skill.name}-row1-${i}`}
                        className="px-5 py-2.5 rounded-full bg-black border border-white/10 text-sm font-mono text-text-muted-light dark:text-text-muted-dark cursor-default whitespace-nowrap flex items-center gap-2.5 hover:border-white/30 transition-colors"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {skill.name}
                      </span>
                    );
                  })}
              </div>
            ))}
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="animate-marquee-right flex gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={`row2-${i}`} className="flex gap-4">
                {skillCategories
                  .flatMap((cat) => cat.skills)
                  .slice(Math.ceil(skillCategories.flatMap(c => c.skills).length / 2))
                  .map((skill) => {
                    const Icon = iconMap[skill.name];
                    return (
                      <span
                        key={`${skill.name}-row2-${i}`}
                        className="px-5 py-2.5 rounded-full bg-black border border-white/10 text-sm font-mono text-text-muted-light dark:text-text-muted-dark cursor-default whitespace-nowrap flex items-center gap-2.5 hover:border-white/30 transition-colors"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {skill.name}
                      </span>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

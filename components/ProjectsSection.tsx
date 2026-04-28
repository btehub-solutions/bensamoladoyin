"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects, projectCategories } from "@/data/projects";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of my most impactful AI and ML engineering work"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-xl text-sm font-body transition-all duration-300 ${
              activeFilter === category
                ? "bg-white text-black font-bold shadow-lg shadow-white/10"
                : "bg-light-card dark:bg-black text-text-muted-light dark:text-text-muted-dark border border-light-border dark:border-dark-border hover:border-white/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View all projects CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/btehub-solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-light-border dark:border-dark-border text-text-muted-light dark:text-text-muted-dark hover:text-white hover:border-white/40 font-body text-sm transition-all duration-300"
        >
          View all projects on GitHub
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </motion.div>
    </SectionWrapper>
  );
}

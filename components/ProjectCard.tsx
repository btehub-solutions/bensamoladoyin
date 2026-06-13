"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { RiGithubFill } from "react-icons/ri";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const domainColorMap: Record<string, string> = {
  "Generative AI": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "AI Application": "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  "Web Application": "bg-blue-500/10 text-blue-300 border-blue-500/20",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const domainStyle =
    domainColorMap[project.category] ||
    "bg-white/5 text-white border-white/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 1, 0.5, 1] 
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative rounded-2xl bg-black dark:bg-black border border-light-border dark:border-dark-border overflow-hidden shadow-none hover:border-white/30 transition-all duration-500 glow-card transform-gpu backface-hidden flex flex-col h-full"
      style={{
        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)"
      }}
    >
      {/* Project Image / Gradient Header */}
      <div className="relative h-48 overflow-hidden bg-black/50 transform-gpu">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out transform-gpu"
              loading="lazy"
            />
            {/* Overlay Gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-display font-bold text-white">
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          </div>
        )}

        {/* Category Badge - Always visible on top of image/gradient */}
        <div className="absolute bottom-4 left-4 z-10">
          <span
            className={`text-[10px] uppercase tracking-wider font-mono px-3 py-1 rounded-full border backdrop-blur-md ${domainStyle}`}
          >
            {project.category}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-mono backdrop-blur-md">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-2 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark font-body leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-white/5 text-xs font-mono text-text-muted-dark border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-light-border dark:border-dark-border mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-body text-text-muted-dark hover:text-white transition-colors duration-300"
            >
              <RiGithubFill className="w-5 h-5" />
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-body text-text-muted-dark hover:text-white transition-colors duration-300"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          <div className="ml-auto">
            <FiArrowUpRight className="w-5 h-5 text-text-muted-dark group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}


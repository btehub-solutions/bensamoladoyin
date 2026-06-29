"use client";

import { motion } from "framer-motion";
import { 
  RiMailLine, 
  RiPhoneLine, 
  RiMapPinLine, 
  RiLinkedinBoxLine, 
  RiGithubLine, 
  RiDownloadLine,
  RiArrowLeftLine,
  RiExternalLinkLine
} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0F] py-12 px-4 sm:px-6 lg:px-8 ">
      {/* Navigation / Header Buttons (Hidden when printing) */}
      <div className="max-w-[850px] mx-auto mb-8 flex items-center justify-between print:hidden">
        <Link 
          href="/"
          className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors group"
        >
          <RiArrowLeftLine className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>
        
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg hover:bg-neutral-200 transition-all shadow-md active:scale-95 font-bold"
        >
          <RiDownloadLine size={18} />
          <span>Download PDF</span>
        </button>
      </div>

      {/* CV Paper Component */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[850px] mx-auto bg-white dark:bg-dark-card shadow-2xl overflow-hidden rounded-xl border border-light-border dark:border-dark-border "
        id="cv-content"
      >
        {/* CV Header */}
        <div className="bg-slate-900 dark:bg-slate-950 p-8 sm:p-12 text-white ">
          <div className="flex flex-col md:flex-row items-center gap-8 md:items-start">
            {/* Profile Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-slate-700/50 shadow-xl shrink-0">
                <Image
                  src="/images/profile.jpg?v=3"
                  alt="Ben Sam Oladoyin"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2 tracking-tight">
                Ben Sam Oladoyin
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-300 mb-6">
                Founder of Trax & BTEHub Solutions | AI/ML Engineer
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-slate-400">
                <a href="mailto:bensamoladoyin1@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                  <RiMailLine className="text-white/60" />
                  <span>bensamoladoyin1@gmail.com</span>
                </a>
                <a href="tel:+2347045422815" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                  <RiPhoneLine className="text-white/60" />
                  <span>+234 704 542 2815</span>
                </a>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <RiMapPinLine className="text-white/60" />
                  <span>Abeokuta, Nigeria</span>
                </div>
                <a href="https://bensamoladoyin.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                  <RiExternalLinkLine className="text-white/60" />
                  <span>bensamoladoyin.vercel.app</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CV Body */}
        <div className="p-8 sm:p-12 grid grid-cols-1 md:grid-cols-3 gap-12 bg-white dark:bg-dark-card text-slate-800 dark:text-slate-200 ">
          
          {/* Main Content (2/3) */}
          <div className="md:col-span-2 space-y-10">
            {/* Professional Summary */}
            <section>
              <h2 className="text-lg font-display font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white border-b-2 border-slate-100 dark:border-slate-800 pb-2 mb-4">
                Professional Summary
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 ">
                Results-driven AI & ML Engineer and Founder of <strong className="text-slate-900 dark:text-white ">Trax</strong> and <strong className="text-slate-900 dark:text-white ">BTEHub Solutions</strong>, specializing in architecting 
                intelligent systems, automation workflows, and scalable AI solutions. Demonstrated 
                expertise in building autonomous agents and integrating advanced LLMs into production 
                environments. Committed to transforming complex AI research into high-impact digital 
                products that solve real-world problems.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg font-display font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white border-b-2 border-slate-100 dark:border-slate-800 pb-2 mb-6">
                Work Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white ">{exp.role}</h3>
                    <span className="text-sm font-medium text-white/60 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <div className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-3 uppercase tracking-wider">
                      {exp.organization} • {exp.location}
                    </div>
                    <ul className="space-y-2 list-none">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="text-[14.5px] text-slate-600 dark:text-slate-400 flex gap-2">
                          <span className="text-white mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full border border-white/20"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education / Key Projects */}
            <section>
              <h2 className="text-lg font-display font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white border-b-2 border-slate-100 dark:border-slate-800 pb-2 mb-6">
                Recent Projects
              </h2>
              <div className="space-y-6">
                <div className="group">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    AlertDrive AI
                    <span className="text-[12px] font-normal text-slate-400">Driver Safety System</span>
                  </h4>
                  <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-1">
                    An AI-powered computer vision system for real-time driver fatigue and distraction detection using OpenCV and PyTorch.
                  </p>
                </div>
                <div className="group">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    TaxNaija
                    <span className="text-[12px] font-normal text-slate-400">AI Tax Assistant</span>
                  </h4>
                  <p className="text-[14px] text-slate-600 dark:text-slate-400 mt-1">
                    Intelligent tax assessment and classification platform for Nigerian businesses and employees using NLP.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar (1/3) */}
          <div className="space-y-10">
            {/* Social Links */}
            <section>
              <h2 className="text-sm font-display font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                Links
              </h2>
              <div className="space-y-3">
                <a href="https://linkedin.com/in/ben-sam-oladoyin-527966233" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-white transition-colors">
                  <RiLinkedinBoxLine size={20} className="text-white/60" />
                  <span className="text-sm">Ben Sam Oladoyin</span>
                </a>
                <a href="https://github.com/btehub-solutions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-white transition-colors">
                  <RiGithubLine size={20} className="text-white/60" />
                  <span className="text-sm">btehub-solutions</span>
                </a>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-sm font-display font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
                Expertise
              </h2>
              <div className="space-y-6">
                {skillCategories.slice(0, 4).map((cat) => (
                  <div key={cat.name}>
                    <h3 className="text-[11px] font-bold uppercase text-slate-400 tracking-wider mb-2">{cat.name}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map(skill => (
                        <span key={skill.name} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded text-[11px] font-medium border border-slate-200/50 dark:border-slate-700/50 ">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-sm font-display font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-sm">
                    <p className="font-bold text-slate-800 dark:text-slate-200 leading-tight mb-1">
                      {cert.title}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                ))}
                
                {/* 22+ other credentials drive link */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 font-medium">
                  <a 
                    href="https://drive.google.com/drive/folders/16W-Gx5xHapQaPfgfOLFDlNvE8oFrfzke?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-slate-900 dark:hover:text-white transition-colors block"
                  >
                    <span>• Plus 22+ other professional AI/ML credentials on Google Drive:</span>
                    <span className="font-mono text-[9.5px] block mt-1.5 text-slate-400 break-all select-all">
                      drive.google.com/drive/folders/16W-Gx5xHapQaPfgfOLFDlNvE8oFrfzke
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-sm font-display font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
                Languages
              </h2>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400 ">
                <p className="flex justify-between">
                  <span>English</span>
                  <span className="text-white/60 font-medium italic">Fluent</span>
                </p>
                <p className="flex justify-between">
                  <span>Hausa</span>
                  <span className="text-white/60 font-medium italic">Fluent</span>
                </p>
                <p className="flex justify-between">
                  <span>Yoruba</span>
                  <span className="text-slate-400 font-medium italic">Native</span>
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 p-8 text-center ">
          <p className="text-[11px] text-slate-400 uppercase tracking-[0.3em]">
            References available upon request
          </p>
        </div>
      </motion.div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            background-color: #0A0A0F !important;
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          nav, footer, .navbar-hidden {
            display: none !important;
          }
          @page {
            margin: 0;
            size: A4 portrait;
          }
          /* Force the container to be desktop width so grid doesn't collapse */
          #cv-content {
            width: 850px !important;
            max-width: 850px !important;
            margin: 0 auto !important;
            transform: scale(0.95);
            transform-origin: top center;
          }
        }
      `}</style>
    </div>
  );
}

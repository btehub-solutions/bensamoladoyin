"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { FiCode, FiCpu, FiTrendingUp, FiUsers } from "react-icons/fi";
import Image from "next/image";

const highlights = [
  {
    icon: FiCpu,
    value: "10+",
    label: "ML Models Deployed",
  },
  {
    icon: FiCode,
    value: "15+",
    label: "Projects Completed",
  },
  {
    icon: FiTrendingUp,
    value: "3+",
    label: "Years of Experience",
  },
  {
    icon: FiUsers,
    value: "5+",
    label: "Clients Served",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Passionate about building AI solutions that make a real difference"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Gradient border ring */}
            <div className="absolute -inset-1 bg-white/20 rounded-full opacity-30 blur-sm" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border">
              {/* Avatar profile photo */}
              <Image 
                src="/images/profile.jpg"
                alt="Ben Sam Oladoyin Avatar"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl bg-black dark:bg-black border border-light-border dark:border-dark-border shadow-xl backdrop-blur-sm"
            >
              <div className="text-white font-display font-bold text-lg">
                3+ Years
              </div>
              <div className="text-xs text-text-muted-light dark:text-text-muted-dark font-mono">
                in AI/ML
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark font-body leading-relaxed">
            <p>
              <strong>Ben Sam Oladoyin</strong> is a high-performance AI & Machine Learning Engineer and Founder of <strong>BTEHub Solutions</strong>, where he bridges the gap between complex intelligence and professional-grade business application. He specializes in building autonomous AI agents, intelligent workflows, and cinematic digital products that empower brands to scale with precision.
            </p>
            <p>
              I specialize in transforming ideas into working products - from designing 
              autonomous AI agents to deploying production-ready ML models. My engineering 
              mindset is rooted in creating measurable outcomes, ensuring that every 
              system I build is not just a prototype, but a scalable tool for efficiency.
            </p>
            <p>
              Through <strong>BTEHub Daily</strong> and my tutorial series, I advocate for 
              making AI accessible. I believe that technology achieves its greatest impact 
              when it is demystified and put into the hands of those who need it to grow. 
              My mission is to empower individuals and organizations to adopt AI with 
              confidence and precision.
            </p>
          </div>

          {/* Tech focus tags */}
          <div className="flex flex-wrap gap-2">
            {[
              "Deep Learning",
              "Computer Vision",
              "NLP",
              "MLOps",
              "Generative AI",
              "Edge AI",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-white/5 text-white text-sm font-mono border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-black dark:bg-black border border-light-border dark:border-dark-border text-center hover:border-white/30 glow-card transform-gpu backface-hidden shadow-none hover:shadow-xl"
              style={{
                transition: "border-color 0.3s ease, box-shadow 0.3s ease"
              }}
            >
            <item.icon className="w-6 h-6 text-white mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-1">
              {item.value}
            </div>
            <div className="text-sm text-text-muted-light dark:text-text-muted-dark font-body">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

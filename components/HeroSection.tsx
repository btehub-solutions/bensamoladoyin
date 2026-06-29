"use client";

import { motion } from "framer-motion";
import TypedText from "./TypedText";
import { RiGithubFill, RiLinkedinFill, RiFacebookFill, RiWhatsappFill, RiArrowDownLine, RiDownloadLine } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";

const neuralNodes = [
  { cx: 50, cy: 100, r: 6 },
  { cx: 50, cy: 200, r: 6 },
  { cx: 50, cy: 300, r: 6 },
  { cx: 150, cy: 50, r: 8 },
  { cx: 150, cy: 150, r: 8 },
  { cx: 150, cy: 250, r: 8 },
  { cx: 150, cy: 350, r: 8 },
  { cx: 250, cy: 100, r: 8 },
  { cx: 250, cy: 200, r: 8 },
  { cx: 250, cy: 300, r: 8 },
  { cx: 350, cy: 150, r: 10 },
  { cx: 350, cy: 250, r: 10 },
];

const neuralEdges = [
  // Layer 1 -> Layer 2
  { path: "M 50 100 L 150 50", delay: "0s" },
  { path: "M 50 100 L 150 150", delay: "0.2s" },
  { path: "M 50 200 L 150 150", delay: "0.4s" },
  { path: "M 50 200 L 150 250", delay: "0.1s" },
  { path: "M 50 300 L 150 250", delay: "0.5s" },
  { path: "M 50 300 L 150 350", delay: "0.6s" },
  // Layer 2 -> Layer 3
  { path: "M 150 50 L 250 100", delay: "0.3s" },
  { path: "M 150 150 L 250 100", delay: "0.7s" },
  { path: "M 150 150 L 250 200", delay: "0.2s" },
  { path: "M 150 250 L 250 200", delay: "0.8s" },
  { path: "M 150 250 L 250 300", delay: "0.4s" },
  { path: "M 150 350 L 250 300", delay: "0.9s" },
  // Layer 3 -> Layer 4
  { path: "M 250 100 L 350 150", delay: "0.1s" },
  { path: "M 250 200 L 350 150", delay: "0.5s" },
  { path: "M 250 200 L 350 250", delay: "0.6s" },
  { path: "M 250 300 L 350 250", delay: "0.3s" },
];

export default function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollIndicator(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen w-full flex items-start md:items-center justify-center overflow-hidden pt-12 md:pt-0">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 bg-black"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center pt-24 pb-12 w-full">
          
          {/* Left Column */}
          <div className="flex flex-col items-start text-left shrink-0 w-full transform-gpu">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-text-muted-light dark:text-text-muted-dark text-sm font-body animate-[floatBadge_3s_ease-in-out_infinite]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Full-Time Roles
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[36px] md:text-[46px] lg:text-[56px] font-display font-bold leading-[1.1] mb-4 text-text-primary-light dark:text-text-primary-dark"
            >
              Ben Sam <span className="text-white relative inline-block border-b-2 border-white/20 pb-1">Oladoyin</span>
            </motion.h1>

            {/* H2 - Typed Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-[20px] md:text-[24px] font-display text-white h-[36px] mb-6"
            >
              <TypedText
                strings={[
                  "Founder of Trax (trax.ng).",
                  "Founder of BTEHub Solutions.",
                  "I build intelligent AI systems.",
                  "I engineer autonomous agents.",
                  "I turn data into decisions.",
                  "I ship ML models to production.",
                ]}
                typeSpeed={50}
                deleteSpeed={30}
                delayBetween={2000}
              />
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[16px] font-body text-text-muted-light dark:text-text-muted-dark max-w-xl mb-10 leading-relaxed text-left"
            >
              <strong>Ben Sam Oladoyin</strong> is a high-performance AI & Machine Learning Engineer and Founder of <strong>BTEHub Solutions</strong> and <strong>Trax</strong> (<a href="https://trax.ng" target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-bold">trax.ng</a>). He specializes in bridging the gap between advanced AI research and professional-grade implementation. With expertise in autonomous agents and cinematic digital architecture, Ben empowers brands to scale through intelligent automation.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto transform-gpu">
              <motion.a
                href="#projects"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-body font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all duration-300"
                style={{ backgroundSize: "100%" }}
              >
                View My Work
                <RiArrowDownLine size={16} />
              </motion.a>
              <motion.a
                href="/cv"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/40 bg-transparent text-white font-body font-bold hover:border-white transition-all flex items-center justify-center gap-2"
              >
                <RiDownloadLine size={18} className="text-white" />
                Download CV
              </motion.a>
            </div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://github.com/btehub-solutions"
                target="_blank"
                rel="noreferrer"
                className="text-text-muted-light dark:text-text-muted-dark hover:text-white dark:hover:text-white transition-all duration-200 hover:scale-125 focus:scale-125 focus:text-white"
                title="View GitHub"
              >
                <RiGithubFill className="w-6 h-6" />
              </a>
              <div className="h-4 w-[1px] bg-light-border dark:bg-dark-border" />
              <a
                href="https://www.linkedin.com/in/ben-sam-oladoyin-527966233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noreferrer"
                className="text-text-muted-light dark:text-text-muted-dark hover:text-white dark:hover:text-white transition-all duration-200 hover:scale-125 focus:scale-125 focus:text-white"
                title="Connect on LinkedIn"
              >
                <RiLinkedinFill className="w-6 h-6" />
              </a>
              <div className="h-4 w-[1px] bg-light-border dark:bg-dark-border" />
              <a
                href="https://www.facebook.com/share/16KthtYMDY/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="text-text-muted-light dark:text-text-muted-dark hover:text-white dark:hover:text-white transition-all duration-200 hover:scale-125 focus:scale-125 focus:text-white"
                title="Follow on Facebook"
              >
                <RiFacebookFill className="w-6 h-6" />
              </a>
              <div className="h-4 w-[1px] bg-light-border dark:bg-dark-border" />
              <a
                href="https://wa.me/2347045422815"
                target="_blank"
                rel="noreferrer"
                className="text-text-muted-light dark:text-text-muted-dark hover:text-white dark:hover:text-white transition-all duration-200 hover:scale-125 focus:scale-125 focus:text-white"
                title="Message on WhatsApp"
              >
                <RiWhatsappFill className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - SVG Neural Network */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:flex relative lg:h-full min-h-[400px] items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center animate-[breatheSvg_6s_ease-in-out_infinite]">
              {/* No glow background for pure black DNA */}
              <div className="absolute inset-0 bg-transparent"></div>
              
              <svg viewBox="0 0 400 400" width="100%" height="auto" className="w-full h-full relative z-10 overflow-visible">
                <defs>
                  <filter id="glow-dark">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glow-light">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <style>
                    {`
                      @keyframes pulseNode {
                        0%, 100% { opacity: 0.6; transform: scale(0.95); }
                        50% { opacity: 1; transform: scale(1.05); }
                      }
                      @keyframes travelSignal {
                        0% { stroke-dashoffset: 200; opacity: 0; }
                        20% { opacity: 1; }
                        80% { opacity: 1; }
                        100% { stroke-dashoffset: 0; opacity: 0; }
                      }
                      .node-anim {
                        transform-origin: center;
                        animation: pulseNode 3s infinite ease-in-out;
                        will-change: transform, opacity;
                        filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.8));
                      }
                      .signal-anim {
                        stroke-dasharray: 8 200;
                        animation: travelSignal 2.5s infinite linear;
                        will-change: stroke-dashoffset, opacity;
                      }
                    `}
                  </style>
                </defs>

                {/* Edges */}
                <g className="stroke-accent-violet/30">
                  {neuralEdges.map((edge, i) => (
                    <path
                      key={`edge-${i}`}
                      d={edge.path}
                      strokeWidth="1.5"
                      fill="none"
                    />
                  ))}
                </g>

                {/* Signals traveling along edges */}
                <g>
                  {neuralEdges.map((edge, i) => (
                    <path
                      key={`signal-${i}`}
                      d={edge.path}
                      className="signal-anim"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      style={{
                        stroke: "#FFFFFF",
                        animationDelay: edge.delay
                      }}
                    />
                  ))}
                </g>

                {/* Nodes */}
                <g>
                  {neuralNodes.map((node, i) => (
                    <circle
                      key={`node-${i}`}
                      cx={node.cx}
                      cy={node.cy}
                      r={node.r}
                      className="node-anim"
                      style={{
                        fill: "#FFFFFF",
                        transformOrigin: `${node.cx}px ${node.cy}px`,
                        animationDelay: `${i * 0.15}s`
                      }}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </motion.div>
          
        </div>
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transition-opacity duration-300">
          <span className="font-mono text-[11px] tracking-widest text-text-muted-light dark:text-text-muted-dark -rotate-90 mb-4 uppercase">scroll</span>
          <div className="w-[1px] h-10 bg-light-border dark:bg-dark-border relative overflow-hidden">
            <div className="w-full h-1/2 bg-white absolute top-0 left-0 animate-[travelLine_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes breatheSvg {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        @keyframes travelLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}} />
    </section>
  );
}

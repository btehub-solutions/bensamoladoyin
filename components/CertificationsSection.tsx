"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { certifications } from "@/data/certifications";
import { FiAward, FiExternalLink, FiX } from "react-icons/fi";
import Image from "next/image";

export default function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover)");
    setIsDesktop(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
    <SectionWrapper id="certifications">
      <SectionHeading
        title="Certifications"
        subtitle="Professional credentials from industry-leading educators"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={
              isDesktop
                ? { y: -5, transition: { duration: 0.3, ease: "easeOut" } }
                : undefined
            }
            className="group relative flex flex-col rounded-2xl bg-white dark:bg-black border border-light-border dark:border-dark-border overflow-hidden h-full shadow-sm hover:shadow-xl hover:border-white/30 glow-card"
            style={{
              transitionProperty: "border-color, box-shadow",
              transitionDuration: "300ms",
              transitionTimingFunction: "ease-out"
            }}
          >
            {/* Image Preview - Since these are high-res Udemy certs, object-cover looks great */}
            <button 
              onClick={() => setSelectedImage(cert.image || null)}
              className="relative aspect-[4/3] w-full overflow-hidden border-b border-light-border dark:border-dark-border bg-[#1a1a1a] cursor-zoom-in"
            >
              {cert.image ? (
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  unoptimized
                  quality={100}
                  className="object-cover lg:group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FiAward className="w-12 h-12 text-accent-violet/20" />
                </div>
              )}
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-accent-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 dark:bg-black/90 p-3 rounded-full shadow-xl">
                  <FiExternalLink className="w-6 h-6 text-accent-violet" />
                </div>
              </div>
            </button>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiAward className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-white/10 text-white border border-white/20 font-bold">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-2 group-hover:text-white transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-white/60 font-body mb-6 font-medium">
                {cert.issuer}
              </p>

              <div className="mt-auto">
                {cert.image && (
                  <button
                    onClick={() => setSelectedImage(cert.image || null)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors font-body py-2"
                  >
                    View Full Certificate
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Decorative corner gradient */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-violet/5 to-transparent rounded-tr-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
    
    {/* Premium Lightbox Modal - Portfolio-wide overlay */}
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 backdrop-blur-xl bg-black/90"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-auto md:h-[85vh] flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Certificate"
                fill
                unoptimized
                className="object-contain rounded-xl shadow-2xl border border-white/20 ring-1 ring-white/10"
                priority
              />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 md:-top-16 right-0 md:-right-16 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 backdrop-blur-md z-[110]"
            >
              <FiX className="w-6 h-6 md:w-8 h-8" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

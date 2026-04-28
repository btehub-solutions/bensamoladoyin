"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-[64px] w-full transition-all duration-300 ease-in-out ${
        isScrolled 
          ? "bg-black/90 dark:bg-black/90 backdrop-blur-md border-b border-light-border dark:border-dark-border" 
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-1 group">
            <span className="font-display font-bold text-lg text-text-primary-light dark:text-text-primary-dark group-hover:text-white transition duration-200">
              Ben Sam Oladoyin
            </span>
            <span className="w-[4px] h-[4px] rounded-full bg-white opacity-20"></span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] font-body transition-colors duration-300 py-2 ${
                    isActive 
                      ? "text-white font-medium" 
                      : "text-text-muted-light dark:text-text-muted-dark hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="flex items-center gap-4 ml-2">
              <div className="relative flex items-center justify-center">
                <a href="#contact">
                  <motion.button
                    whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                    className="px-4 py-2 rounded-full text-black text-[14px] font-bold bg-white transition-all duration-300 shadow-md shadow-white/10"
                  >
                    Hire Me
                  </motion.button>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Right side */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-text-primary-light dark:text-text-primary-dark hover:text-white transition-colors"
              aria-label="Open mobile menu"
            >
              <RiMenuLine className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Behind drawer overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-[60] h-full w-[75vw] max-w-[320px] bg-black dark:bg-black border-l border-light-border dark:border-dark-border flex flex-col items-center pt-[64px]"
          >
            <div className="absolute top-0 right-0 h-[64px] flex items-center px-4 sm:px-6 w-full justify-between">
              <Link href="/" className="flex items-baseline gap-1 group" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="font-display font-bold text-lg text-text-primary-light dark:text-text-primary-dark group-hover:text-white transition duration-200">
                  Ben Sam Oladoyin
                </span>
                <span className="w-[4px] h-[4px] rounded-full bg-white opacity-20"></span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary-light dark:text-text-primary-dark hover:text-white transition-colors"
                aria-label="Close mobile menu"
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 w-full flex flex-col p-6 overflow-y-auto">
              <div className="flex flex-col w-full">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[18px] font-body py-4 border-b border-light-border dark:border-dark-border w-full text-center transition-colors duration-300 ${
                        isActive 
                          ? "text-white font-medium" 
                          : "text-text-muted-light dark:text-text-muted-dark hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
              <div className="mt-auto w-full flex flex-col items-center gap-6 pt-6">
                <div className="relative w-full flex items-center justify-center isolate">
                  <a href="#contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full px-6 py-3 rounded-full text-black text-base font-bold bg-white transition-all duration-300 shadow-md shadow-white/10"
                    >
                      Hire Me
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.15); opacity: 0; }
        }
      `}} />
    </>
  );
}


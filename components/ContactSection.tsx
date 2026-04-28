"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { 
  RiMapPinLine, 
  RiMailLine, 
  RiLinkedinFill, 
  RiGithubFill,
  RiFacebookFill,
  RiWhatsappFill,
  RiLoader4Line,
  RiCheckLine,
  RiErrorWarningLine
} from "react-icons/ri";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("https://formspree.io/f/maqazkga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" showDivider={false}>
      <div className="flex flex-col items-start mb-12">
        <span className="text-white font-display font-medium text-sm tracking-wider uppercase mb-2">
          Contact
        </span>
        <h2 className="text-[32px] md:text-[40px] font-display font-bold text-text-primary-light dark:text-text-primary-dark">
          Let&apos;s Build Something Intelligent
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 w-full">
        {/* Left - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <p className="font-body text-[16px] text-text-muted-light dark:text-text-muted-dark max-w-sm leading-relaxed">
            Open to full-time AI/ML Engineering roles globally. Based in Nigeria, available remotely. Let&apos;s connect and build something that matters.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <RiMapPinLine className="w-[18px] h-[18px] text-white" />
              <span className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark">
                Abeokuta / Lagos, Nigeria
              </span>
            </div>
            <div className="flex items-center gap-3">
              <RiMailLine className="w-[18px] h-[18px] text-white" />
              <a href="mailto:bensamoladoyin1@gmail.com" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors">
                bensamoladoyin1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiLinkedinFill className="w-[18px] h-[18px] text-white" />
              <a href="https://www.linkedin.com/in/ben-sam-oladoyin-527966233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiGithubFill className="w-[18px] h-[18px] text-white" />
              <a href="https://github.com/btehub-solutions" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors">
                GitHub Organization
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiFacebookFill className="w-[18px] h-[18px] text-white" />
              <a href="https://www.facebook.com/share/16KthtYMDY/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors">
                Facebook Page
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiWhatsappFill className="w-[18px] h-[18px] text-white" />
              <a href="https://wa.me/2347045422815" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors">
                WhatsApp Contact
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border text-text-primary-light dark:text-text-primary-dark font-body text-[14px] placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none transition-colors ${
                  errors.name ? "border-red-400" : "border-light-border dark:border-dark-border focus:border-white focus:ring-1 focus:ring-white"
                }`}
                placeholder="Full Name"
              />
              {errors.name && <span className="font-body text-[12px] text-red-400 pl-1">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border text-text-primary-light dark:text-text-primary-dark font-body text-[14px] placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none transition-colors ${
                  errors.email ? "border-red-400" : "border-light-border dark:border-dark-border focus:border-white focus:ring-1 focus:ring-white"
                }`}
                placeholder="Email"
              />
              {errors.email && <span className="font-body text-[12px] text-red-400 pl-1">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border text-text-primary-light dark:text-text-primary-dark font-body text-[14px] placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none transition-colors ${
                  errors.subject ? "border-red-400" : "border-light-border dark:border-dark-border focus:border-white focus:ring-1 focus:ring-white"
                }`}
                placeholder="Subject"
              />
              {errors.subject && <span className="font-body text-[12px] text-red-400 pl-1">{errors.subject}</span>}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border text-text-primary-light dark:text-text-primary-dark font-body text-[14px] placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none transition-colors resize-none ${
                  errors.message ? "border-red-400" : "border-light-border dark:border-dark-border focus:border-white focus:ring-1 focus:ring-white"
                }`}
                placeholder="Message"
              />
              {errors.message && <span className="font-body text-[12px] text-red-400 pl-1">{errors.message}</span>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "loading"}
              className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-display font-bold text-[15px] shadow-lg shadow-white/10 hover:shadow-white/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "idle" && "Send Message"}
              {status === "loading" && (
                <>
                  <RiLoader4Line className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <RiCheckLine className="w-5 h-5 text-white" />
                  <span className="text-white">Message Sent!</span>
                </>
              )}
              {status === "error" && (
                <>
                  <RiErrorWarningLine className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Something went wrong</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

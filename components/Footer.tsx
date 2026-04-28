"use client";

import { RiGithubFill, RiLinkedinFill, RiFacebookFill, RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-8 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Row 1 */}
        <div className="flex flex-col items-center gap-1 mb-6">
          <span className="font-display font-bold text-lg text-text-primary-light dark:text-text-primary-dark">
            Ben Sam Oladoyin
          </span>
          <span className="font-body text-[13px] text-text-muted-light dark:text-text-muted-dark">
            AI & ML Engineer · BTEHub Solutions
          </span>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8 max-w-2xl mx-auto">
          {["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Community", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-[12px] md:text-[13px] text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/btehub-solutions"
              target="_blank"
              rel="noreferrer"
              className="text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors"
              title="GitHub"
            >
              <RiGithubFill size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ben-sam-oladoyin-527966233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
              className="text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors"
              title="LinkedIn"
            >
              <RiLinkedinFill size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/16KthtYMDY/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors"
              title="Facebook"
            >
              <RiFacebookFill size={20} />
            </a>
            <a
              href="https://wa.me/2347045422815"
              target="_blank"
              rel="noreferrer"
              className="text-text-muted-light dark:text-text-muted-dark hover:text-white transition-colors"
              title="WhatsApp"
            >
              <RiWhatsappFill size={20} />
            </a>
          </div>
          <p className="font-body text-[12px] text-text-muted-light dark:text-text-muted-dark mt-4">
            © {new Date().getFullYear()} Ben Sam Oladoyin. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}


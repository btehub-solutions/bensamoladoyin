"use client";

import { useState, useEffect } from "react";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export default function TypedText({
  strings,
  typeSpeed = 80,
  deleteSpeed = 40,
  delayBetween = 2000,
  className = "",
}: TypedTextProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentFullString = strings[currentStringIndex];

    if (!isDeleting) {
      if (currentText !== currentFullString) {
        timer = setTimeout(() => {
          setCurrentText(currentFullString.slice(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else {
      if (currentText !== "") {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {currentText}
      <span 
        className="inline-block text-white ml-1 font-light" 
        style={{ animation: "blink 0.75s ease infinite" }}
      >
        |
      </span>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
      `}} />
    </span>
  );
}

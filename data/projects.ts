export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    id: "btehub-solutions",
    title: "BTEHub Solutions",
    description:
      "A premium AI engineering and education hub dedicated to high-performance automation and gallery-quality digital design.",
    longDescription:
      "BTEHub Solutions: A premium AI engineering and education hub dedicated to high-performance automation and gallery-quality digital design. We offer bespoke AI services, cinematic web architectures, and elite mentorship, transforming complex technology into professional-grade solutions for the next generation of digital-first brands and innovators.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "AI/ML"],
    category: "AI Application",
    image: "/images/projects/btehub_hero.png",
    github: "https://github.com/btehub-solutions",
    live: "https://btehub.vercel.app",
    featured: true,
  },
  {
    id: "trax",
    title: "Trax (trax.ng)",
    description:
      "Ogun State's tech news and startup media platform tracking the local technology movement, funding rounds, and builder ecosystem.",
    longDescription:
      "Trax is Ogun State's tech news and startup media platform. It tracks the local technology movement, covers startup funding rounds, details tech ecosystem events (like Founders Friday Abeokuta), and highlights agritech, fintech, and digital innovations across the state.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "React", "SEO"],
    category: "Web Application",
    image: "/images/projects/trax.png",
    github: "https://github.com/btehub-solutions/Trax",
    live: "https://trax.ng",
    featured: true,
  },
  {
    id: "coreai",
    title: "CoreAI Monorepo",
    description:
      "A production-ready AI automation monorepo combining Next.js with FastAPI, integrating Gemini and Anthropic for scalable workflows.",
    longDescription:
      "CoreAI is a high-performance monorepo designed for enterprise automation. It orchestrates intelligent workflows by dynamically routing between Google Gemini and Anthropic Claude APIs. Built with async database management, secure user authentication, and real-time analytical logs, it represents a scalable pipeline for modern generative AI applications.",
    techStack: ["FastAPI", "Next.js", "Gemini API", "Claude API", "PostgreSQL", "TypeScript", "Python"],
    category: "AI Application",
    image: "/images/projects/coreai.png",
    github: "https://github.com/btehub-solutions/CoreAI",
    featured: true,
  },
  {
    id: "alertdrive-ai",
    title: "AlertDrive AI",
    description:
      "Real-time driver monitoring system for drowsiness and distraction detection using computer vision and deep learning.",
    longDescription:
      "A professional-grade Driver Monitoring System (DMS) that uses MediaPipe facial landmark tracking, geometric Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) calculations for precise drowsiness and yawn detection, plus head pose estimation for distraction monitoring. Includes auto-calibration and real-time audio alerts.",
    techStack: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "MediaPipe",
      "MobileNetV2",
      "NumPy",
    ],
    category: "Computer Vision",
    image: "/images/projects/alertdrive.png",
    github: "https://github.com/btehub-solutions/AlertDrive_AI.git",
    featured: true,
  },
  {
    id: "taxnaija",
    title: "TaxNaija",
    description:
      "AI-powered tax classification and liability prediction platform for Nigerian employees and businesses.",
    longDescription:
      "A comprehensive AI-driven tax solution built with Flask. It provides automated tax classification for employees and predictive tax liability analytics for businesses, ensuring compliance with Nigerian tax regulations through machine learning.",
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "React", "PostgreSQL"],
    category: "AI Application",
    image: "/images/projects/taxnaija.png",
    github: "https://github.com/btehub-solutions/TaxNaija.git",
    featured: true,
  },
  {
    id: "vibeai",
    title: "VibeAI",
    description:
      "A next-gen AI learning platform designed for future-ready professionals. Features a dynamic interface with over 2,500 active learners and a focus on mastering AI-fluent communication.",
    longDescription:
      "A next-gen AI learning platform designed for future-ready professionals. Features a dynamic interface with over 2,500 active learners and a focus on mastering AI-fluent communication.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "React"],
    category: "Generative AI",
    image: "/images/projects/vibeai.png",
    github: "https://github.com/btehub-solutions/vibeai-frontend",
    live: "http://vibeaihub.vercel.app/",
    featured: true,
    metrics: ["2,500+ Active Learners", "AI-Powered Interactions"],
  },
  {
    id: "asa",
    title: "Asa Art Marketplace",
    description: "A digital gallery and e-commerce platform celebrating African art and Yoruba heritage, connecting artists with collectors.",
    longDescription: "Asa is a curated digital gallery celebrating African art. It features secure transactions, artist profiles, and high-performance image rendering to showcase Adire textiles, Benin Bronzes, and contemporary works.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "E-commerce"],
    category: "Web Application",
    image: "/images/projects/asa.png",
    github: "https://github.com/btehub-solutions/Asa",
    featured: false,
  },
];

export const projectCategories = [
  "All",
  "Computer Vision",
  "NLP",
  "Generative AI",
  "AI Application",
  "Web Application",
];


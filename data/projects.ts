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
    id: "vetlink-connect",
    title: "VetLink Connect",
    description:
      "A premium agribusiness platform for Divine Agvet featuring 'Authentic Medicines. Zero Compromise.' homegrown solutions for Nigerian livestock farms.",
    longDescription:
      "A high-impact agribusiness portal for Divine Agvet, focused on delivering authentic animal medicines direct from factory to farm. The platform modernizes livestock solutions with a trust-first approach for vets and farmers nationwide.",
    techStack: ["React", "Node.js", "FastAPI", "Python", "PostgreSQL"],
    category: "AI Application",
    image: "/images/projects/vetlink_hero.png",
    github: "https://github.com/btehub-solutions/vetlink-connect",
    live: "https://www.divineagvet.com/",
    featured: false,
    metrics: ["Homegrown Solutions", "Authentic Medicines"],
  },
  {
    id: "olas-realtor",
    title: "Olas Realtor Consulting",
    description:
      "A comprehensive real estate consulting platform for Olas Realtor Ltd. Bridging property discovery and professional training with an integrated AI chatbot for the Nigerian market.",
    longDescription:
      "A comprehensive real estate consulting platform for Olas Realtor Ltd. Bridging property discovery and professional training with an integrated AI chatbot for the Nigerian market.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Vercel"],
    category: "Web Application",
    image: "/images/projects/olas.png",
    github: "https://github.com/btehub-solutions/Olas-Realtor-Consulting-Ltd",
    live: "https://olasrealtor.com/",
    featured: false,
    metrics: ["Property Discovery", "Professional Training"],
  },
  {
    id: "ojaybee-farms",
    title: "O-Jay-Bee Farms Elevate",
    description:
      "A digital transformation showcase for O-Jay-Bee Farms, highlighting 'Trusted Agricultural Production & Processing' across Ogun State and Lagos.",
    longDescription:
      "A comprehensive digital platform for O-Jay-Bee Farms, streamlining the production and supply of premium catfish, broilers, garri, and yam flakes. Modernizing traditional agriculture with efficient digital workflows.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    category: "Web Application",
    image: "/images/projects/ojaybee_hero.png",
    github: "https://github.com/btehub-solutions/o-jay-bee-farms-elevate",
    live: "https://ojaybeefarms.vercel.app/",
    featured: false,
    metrics: ["Agribusiness Modernization", "Ogun State Farms"],
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


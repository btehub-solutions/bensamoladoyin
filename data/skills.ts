export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow & Keras", level: 92 },
      { name: "PyTorch", level: 88 },
      { name: "Scikit-learn", level: 95 },
      { name: "Computer Vision (OpenCV & MediaPipe)", level: 90 },
      { name: "Generative AI & LLMs (Gemini, Claude, OpenAI)", level: 93 },
      { name: "LangChain & AI Agents", level: 86 },
      { name: "Hugging Face", level: 85 },
    ],
  },
  {
    name: "Cloud, MLOps & Data Engineering",
    skills: [
      { name: "AWS & Amazon SageMaker", level: 85 },
      { name: "Docker & Kubernetes", level: 82 },
      { name: "MLflow", level: 80 },
      { name: "Apache Kafka", level: 75 },
      { name: "Git, GitHub & CI/CD", level: 92 },
    ],
  },
  {
    name: "Data Science & Environments",
    skills: [
      { name: "Jupyter Notebook", level: 95 },
      { name: "Anaconda", level: 90 },
      { name: "Google Colab", level: 92 },
      { name: "Pandas & NumPy", level: 94 },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 96 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    name: "Web & API Development",
    skills: [
      { name: "Next.js & React", level: 82 },
      { name: "FastAPI & Flask", level: 88 },
      { name: "Tailwind CSS & Framer Motion", level: 90 },
      { name: "REST & GraphQL APIs", level: 92 },
    ],
  },
  {
    name: "Databases & Vector Search",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB & Redis", level: 82 },
      { name: "Pinecone (Vector DB)", level: 85 },
    ],
  },
];

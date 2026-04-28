export interface Experience {
  id: string;
  role: string;
  organization: string;
  organizationUrl: string;
  type: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-0",
    role: "Founder & Lead Engineer",
    organization: "BTEHub Solutions",
    organizationUrl: "https://btehub.vercel.app",
    type: "Position",
    location: "Abeokuta, Nigeria",
    period: "2023 - Present",
    description: [
      "Driving a tech-forward AI brand that builds intelligent systems, automation workflows, and modern web applications to help businesses scale and solve complex problems using applied AI.",
      "Designing end-to-end AI/ML systems focused on real-world implementation rather than just prototypes",
      "Building autonomous AI agents and intelligent workflows that significantly improve business productivity",
      "Developing scalable digital products by integrating advanced AI models into modern web architectures",
      "Leading 'BTEHub Daily' thought leadership, delivering simplified AI insights and tutorials to the community",
    ],
    tags: ["Python", "Next.js", "AI Agents", "LLMs", "Workflow Automation", "API Orchestration"],
  },
  {
    id: "exp-1",
    role: "AI/ML Engineer & Head of Digital Strategy",
    organization: "NBI Institute",
    organizationUrl: "https://nbiinstitute.com",
    type: "Position",
    location: "Abeokuta, Ogun State, Nigeria",
    period: "2025 - Present",
    description: [
      "Leading AI and digital strategy at NBI Institute, the No. 1 vocational institution in Ogun State, with over 2,500 students enrolled across tech and skill acquisition programmes.",
      "Driving the integration of Artificial Intelligence, Data Analytics, and emerging technologies into the institute's curriculum and digital operations.",
      "Overseeing digital strategy across the institute's platforms including the student portal, affiliate system, and alumni network.",
      "Facilitating hands-on AI and tech training for students preparing for paid internships and global career opportunities."
    ],
    tags: [
      "AI Engineering", 
      "Digital Strategy", 
      "EdTech", 
      "NLP", 
      "Machine Learning",
      "Abeokuta"
    ]
  },
  {
    id: "exp-2",
    role: "Cluster Team Lead",
    organization: "Ogun Tech Community",
    organizationUrl: "https://oguntechcommunity.org",
    type: "Position",
    location: "Abeokuta, Ogun State, Nigeria",
    period: "2025 - Present",
    description: [
      "Leading a cluster team within the Ogun Tech Community, a network of 50 plus innovation hubs, co-working spaces, startups, and tech organizations across Ogun State.",
      "Driving capacity development, events, and networking initiatives to advance the technology and innovation ecosystem in Ogun State.",
      "Connecting tech talent, startups, and organizations to local and international funding, support, and growth opportunities.",
      "Contributing to policy advocacy efforts that create a stable and supportive environment for entrepreneurs and investors in the region."
    ],
    tags: [
      "Community Leadership",
      "Tech Ecosystem",
      "Capacity Development",
      "Startups",
      "Ogun State"
    ]
  },
];


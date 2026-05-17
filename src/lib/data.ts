import { Project, Skill, Experience, Certification, Education } from "@/types";

export const personalInfo = {
  name: "Rajeev Nandan Damarla",
  title: "AI/ML Engineer | Generative AI Developer | Full Stack Developer",
  email: "rajeevnandan382@gmail.com",
  phone: "+91 9481509488",
  location: "GITAM, Visakhapatnam -- 530045",
  github: "https://github.com/Rajeev91691",
  linkedin: "https://www.linkedin.com/in/rajeev-nandan-d-59b367293",
  huggingface: "https://huggingface.co/Rajeev91691",
  certificationsUrl: "https://github.com/Rajeev91691/Certifications",
  resume: "/resume.pdf",
};

export const summary =
  "B.Tech CSE student (GPA: 9.24/10) specializing in Generative AI and ML. Built diffusion models, RAG systems, and real-time object detection using PyTorch, Hugging Face, and deployed on Hugging Face Spaces. Seeking ML/GenAI internship to apply strong foundation in AI/ML, Python, and deep learning frameworks.";

export const education: Education[] = [
  {
    institution: "Gandhi Institute of Technology and Management -- School of Technology",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    duration: "2023 -- Present",
    gpa: "9.24/10 (Semester GPA: 9.55/10)",
    achievements: [
      "Artificial Intelligence, Artificial Intelligence Applications, Natural Language Processing, Data Warehousing and Mining",
      "Database Management Systems, Design and Analysis of Algorithms, Operating Systems, Computer Networks",
      "Linear Algebra, Discrete Mathematics, Graph Theory, Probability and Statistics",
    ],
  },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "Programming", level: 95 },
  { name: "JavaScript", category: "Programming", level: 85 },
  { name: "TypeScript", category: "Programming", level: 80 },
  { name: "C", category: "Programming", level: 85 },
  { name: "C++", category: "Programming", level: 80 },
  { name: "Java", category: "Programming", level: 75 },
  { name: "SQL", category: "Programming", level: 85 },
  { name: "HTML/CSS", category: "Programming", level: 90 },

  // AI/ML & Data Science
  { name: "PyTorch", category: "AI/ML", level: 90 },
  { name: "TensorFlow", category: "AI/ML", level: 85 },
  { name: "Keras", category: "AI/ML", level: 85 },
  { name: "Scikit-learn", category: "AI/ML", level: 85 },
  { name: "Hugging Face", category: "AI/ML", level: 90 },
  { name: "Diffusion Models", category: "AI/ML", level: 90 },
  { name: "RAG", category: "AI/ML", level: 85 },
  { name: "FAISS", category: "AI/ML", level: 85 },
  { name: "Pandas", category: "AI/ML", level: 85 },
  { name: "NumPy", category: "AI/ML", level: 90 },
  { name: "Jupyter Notebook", category: "AI/ML", level: 90 },
  { name: "Google Colab", category: "AI/ML", level: 90 },
  { name: "Computer Vision", category: "AI/ML", level: 85 },
  { name: "NLP", category: "AI/ML", level: 85 },

  // Web Development
  { name: "React.js", category: "Web Development", level: 85 },
  { name: "Next.js", category: "Web Development", level: 80 },
  { name: "Node.js", category: "Web Development", level: 75 },
  { name: "Vercel", category: "Web Development", level: 80 },

  // Databases
  { name: "MySQL", category: "Databases", level: 85 },
  { name: "Oracle SQL", category: "Databases", level: 75 },
  { name: "Microsoft SQL Server", category: "Databases", level: 75 },
  { name: "SQLite", category: "Databases", level: 80 },

  // Cyber Security
  { name: "Wireshark", category: "Cyber Security", level: 80 },
  { name: "Splunk", category: "Cyber Security", level: 75 },
  { name: "Kali Linux", category: "Cyber Security", level: 80 },
  { name: "Nessus", category: "Cyber Security", level: 75 },
  { name: "Metasploit", category: "Cyber Security", level: 75 },
  { name: "Snort", category: "Cyber Security", level: 75 },
  { name: "ELK Stack", category: "Cyber Security", level: 70 },
  { name: "Network Security", category: "Cyber Security", level: 80 },

  // Tools
  { name: "Git", category: "Productivity Tools", level: 85 },
  { name: "MS Office", category: "Productivity Tools", level: 90 },
  { name: "Google Docs", category: "Productivity Tools", level: 90 },
  { name: "Canva", category: "Productivity Tools", level: 85 },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Image Generation using Diffusion Model",
    description:
      "Developed text-to-image diffusion model generating 512x512px images from prompts, achieving CLIP score of 0.78 for alignment and creativity.",
    longDescription:
      "Built using PyTorch with Stable Diffusion architecture. Processed and filtered 10K+ synthetic training samples, improving dataset quality and reducing training time by 30%. Deployed interactive Gradio interface on Hugging Face Spaces, serving 500+ image generations with <2s average latency.",
    technologies: [
      "PyTorch",
      "Diffusion Models",
      "Hugging Face",
      "Gradio",
      "CLIP",
    ],
    category: "AI/ML",
    demo: "https://huggingface.co/spaces/Rajeev91691/image-gen",
    featured: true,
  },
  {
    id: "2",
    title: "Insight GPT",
    description:
      "Developed domain-specific LLM using Retrieval-Augmented Generation (RAG) with FAISS, processing 500+ PDFs (~80K pages) for semantic search.",
    longDescription:
      "Built a RAG-powered system using FAISS vector database for efficient semantic search. Achieved 0.82 top-1 retrieval accuracy on 200-query evaluation set, reducing answer latency by 35% through caching and optimized indexing. Implemented PDF ingestion pipeline handling 50 documents/hour, deployed on Hugging Face Spaces with real-time query interface.",
    technologies: [
      "RAG",
      "FAISS",
      "Hugging Face",
      "LangChain",
      "Gradio",
      "PDF Processing",
    ],
    category: "AI/ML",
    demo: "https://huggingface.co/spaces/Rajeev91691/genai-assistant",
    featured: true,
  },
  {
    id: "3",
    title: "Real-Time Object Detection",
    description:
      "Implemented client-side real-time object detection using DETR-ResNet-50, processing webcam feed at 15 FPS with <100 ms latency.",
    longDescription:
      "Built using PyTorch with DETR-ResNet-50 architecture for efficient object detection. Achieved mAP@0.5 of 0.68 on COCO val subset, displaying bounding boxes with confidence scores in-browser. Optimized model loading and inference, reducing initialization time by 40% and memory footprint by 25% through quantization.",
    technologies: [
      "PyTorch",
      "DETR",
      "Object Detection",
      "Hugging Face",
      "Gradio",
      "Computer Vision",
    ],
    category: "AI/ML",
    demo: "https://huggingface.co/spaces/Rajeev91691/Object-Detection",
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Indian Institute of Technology, Kanpur",
    position: "Generative AI Intern",
    duration: "June 2025 -- August 2025",
    description: [
      "Developed diffusion model pipelines in PyTorch, improving image generation quality (FID score reduction of 15%)",
      "Reduced inference latency by 22% through batching and mixed precision in PyTorch diffusion model pipelines",
      "Implemented LLM experimentation framework comparing 3 architectures, documenting results that improved baseline output quality by 18% on internal evaluation prompts",
      "Collaborated with 2 team members to present weekly progress, incorporating feedback to refine model evaluation protocols and prompt sets",
    ],
    current: false,
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Generative AI Internship Certificate",
    issuer: "IIT Kanpur",
    date: "2025",
    credentialUrl:
      "https://acrobat.adobe.com/id/urn:aaid:sc:AP:4913a4f8-1ead-4529-8ef8-c829b7aa3078",
  },
];

export const techStack = [
  { name: "Python", icon: "🐍", color: "bg-yellow-500" },
  { name: "PyTorch", icon: "🔥", color: "bg-orange-600" },
  { name: "TensorFlow", icon: "🧠", color: "bg-orange-500" },
  { name: "React", icon: "⚛️", color: "bg-blue-500" },
  { name: "Next.js", icon: "▲", color: "bg-slate-800" },
  { name: "Hugging Face", icon: "🤗", color: "bg-yellow-400" },
  { name: "RAG", icon: "📚", color: "bg-purple-500" },
  { name: "FAISS", icon: "🔍", color: "bg-blue-600" },
];

export const skillCategories = [
  {
    name: "AI/ML & Data Science",
    color: "#8b5cf6",
    skills: skills.filter((s) => s.category === "AI/ML"),
  },
  {
    name: "Programming Languages",
    color: "#6366f1",
    skills: skills.filter((s) => s.category === "Programming"),
  },
  {
    name: "Web Development",
    color: "#06b6d4",
    skills: skills.filter((s) => s.category === "Web Development"),
  },
  {
    name: "Cyber Security",
    color: "#ec4899",
    skills: skills.filter((s) => s.category === "Cyber Security"),
  },
  {
    name: "Databases",
    color: "#f59e0b",
    skills: skills.filter((s) => s.category === "Databases"),
  },
  {
    name: "Productivity Tools",
    color: "#10b981",
    skills: skills.filter((s) => s.category === "Productivity Tools"),
  },
];
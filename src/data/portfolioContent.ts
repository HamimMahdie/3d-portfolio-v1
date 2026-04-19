export const portfolioProfile = {
  name: "Hamim Mahdie",
  shortName: "HAMIM",
  lastName: "MAHDIE",
  rolePrefix: "Software Engineer &",
  rolePrimary: "AI Builder",
  roleSecondary: "Systems Thinker",
  about:
    "I'm a software engineer who closes the gap between promising ideas and reliable products. Across commerce, AI, and research, I've built backend systems, intelligent workflows, and data-heavy features that move fast in production and hold up under real usage.",
  location: "Hartford, CT",
  email: "hamimmahdie2@gmail.com",
  linkedin: "https://www.linkedin.com/in/hamim-mahdie-5455ab1b2/",
  github: "https://github.com/HamimMahdie",
  resumePath: "/resume.pdf",
};

export const portfolioStrengths = [
  {
    title: "SHIP THE HARD PART",
    subtitle: "From vague asks to production-ready systems",
    description:
      "I thrive where product, backend, and data meet. That means translating messy requirements into working software, stabilizing systems under pressure, and turning prototypes into tools people can actually rely on.",
    tags: [
      "Trusted collaborator",
      "Clear communication",
      "Self-driven",
      "Ownership",
      "Team player",
      "Positive collaboration",
    ],
  },
  {
    title: "TRUSTED COLLABORATOR",
    subtitle: "Technical depth with communication people trust",
    description:
      "My best work is not just code shipped. It's bringing clarity, momentum, and reliability to a team. Leadership across campus roles sharpened how I communicate, unblock others, and take responsibility when outcomes matter.",
    tags: [
      "Cross-functional collaboration",
      "Ownership",
      "Mentoring energy",
      "Business judgment",
      "Stakeholder trust",
      "Leadership",
    ],
  },
];

export const portfolioExperience = [
  {
    role: "Software Engineer I",
    company: "Urban Outfitters, Inc",
    meta: "Philadelphia, PA",
    period: "2025–Now",
    summary:
      "Built and stabilized commerce-facing backend systems using Kotlin and Spring Boot. Improved the reverse return kiosk flow, hardened Kafka event pipelines around 30 RPS, and resolved production DB defects that were breaking downstream APIs.",
  },
  {
    role: "Software Engineering Intern",
    company: "Urban Outfitters, Inc",
    meta: "Philadelphia, PA",
    period: "Summer 2025",
    summary:
      "Created an agentic documentation workflow with MCP tool calling to reduce manual documentation overhead, refactored billing logic through the Recurly V3 API, and persisted operational events to BigQuery and Kafka for analytics and observability.",
  },
  {
    role: "AI Engineering Intern",
    company: "Reality AI",
    meta: "New York, NY",
    period: "2024",
    summary:
      "Built NLP and retrieval features with LangChain, context-aware summarization, and Gemini text-to-text APIs. The work improved document understanding and pushed LLM hallucinations down through semantic search and dynamic context injection.",
  },
  {
    role: "Machine Learning Research Assistant",
    company: "Trinity College",
    meta: "Hartford, CT",
    period: "2024",
    summary:
      "Led model experimentation for insurance fraud detection, driving a Random Forest pipeline to 90% accuracy and improving neural network performance through disciplined tuning across optimizers, dropout, dense layers, and batch normalization.",
  },
];

export const portfolioProjects = [
  {
    title: "AI Wellness Platform",
    category: "Applied AI product for campus support",
    tools:
      "Gemini-Pro, Next.js, FastAPI, sentiment-aware recommendations, feedback loops",
    image: "/images/hamim-micromeditations.png",
    liveLink: "https://micromeditations.vercel.app/",
    repoLink: undefined,
  },
  {
    title: "Exchange Rate Prediction",
    category: "Cloud-native forecasting and data platform",
    tools: "Python, Flask, Docker, Kubernetes, GCP, LSTM modeling",
    image: "/images/hamim-fxp.png",
    liveLink: undefined,
    repoLink: "https://github.com/HamimMahdie/Forex-Predictor",
  },
  {
    title: "Library Management System",
    category: "Full-stack CRUD system with test-first backend",
    tools: "Java, Spring Boot, REST APIs, H2, JPA Repository",
    image: "/images/hamim-library.jpeg",
    liveLink: undefined,
    repoLink: "https://github.com/HamimMahdie/book_library",
  },
  {
    title: "Food Pantry Scheduler",
    category: "Volunteer operations platform for campus logistics",
    tools: "Python, Flask, SQLite, dashboards, Gmail SMTP notifications",
    image: "/images/hamim-foodpantry.png",
    liveLink: undefined,
    repoLink: "https://github.com/HamimMahdie/FoodnStuffscheduler",
  },
];

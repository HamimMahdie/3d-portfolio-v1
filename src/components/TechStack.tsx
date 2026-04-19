import { useEffect, useState, type CSSProperties } from "react";
import "./styles/TechStack.css";

const toolkitFamilies = [
  {
    title: "Languages",
    accent: "#78d7ff",
    summary: "Core languages I reach for across systems, data, and product work.",
    items: [
      "Java",
      "Kotlin",
      "C",
      "Python",
      "Ruby",
      "Assembly",
      "SQL",
      "JavaScript",
    ],
  },
  {
    title: "Backend / Systems",
    accent: "#8cc84b",
    summary: "Production-first engineering across services, APIs, data layers, and system design.",
    items: [
      "Spring Boot",
      "Node.js",
      "Flask",
      "FastAPI",
      "REST APIs",
      "Kafka",
      "Microservices",
      "JUnit",
      "PostgreSQL",
      "NoSQL",
    ],
  },
  {
    title: "AI / ML",
    accent: "#ff8f52",
    summary: "Research and applied AI tooling for fast iteration and real product value.",
    items: [
      "TensorFlow",
      "PyTorch",
      "Jupyter",
      "LLM Workflows",
      "RAG Systems",
      "Scikit-learn",
      "LangChain",
    ],
  },
  {
    title: "Cloud / DevOps",
    accent: "#5a86ff",
    summary: "Infrastructure, automation, and delivery practices that move ideas into reliable systems.",
    items: [
      "Docker",
      "Kubernetes",
      "Google Cloud Platform",
      "Terraform",
      "ArgoCD",
      "Kustomize",
      "Git",
      "Linux (Ubuntu)",
      "CI / CD",
      "GitHub Actions",
      "Agile (Scrum)",
    ],
  },
  {
    title: "Frontend",
    accent: "#f7df1e",
    summary: "Interface tooling for polished, responsive, user-facing experiences.",
    items: ["React", "HTML", "CSS", "Tailwind", "Responsive UI"],
  },
];

const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % toolkitFamilies.length);
    }, 3200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused]);

  const activeFamily = toolkitFamilies[activeIndex];

  return (
    <section className="techstack" id="toolkit">
      <div className="techstack-shell section-container">
        <div className="techstack-copywrap">
          <p className="techstack-label">Core Toolkit</p>
          <h2>How I Build</h2>
          <p className="techstack-copy">
            A fast view into the stack I use to ship backend systems, applied AI
            products, and polished user experiences.
          </p>
        </div>

        <div
          className="toolkit-spotlight"
          style={{ ["--toolkit-accent" as string]: activeFamily.accent } as CSSProperties}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="toolkit-spotlight-glow"></div>

          <div className="toolkit-feature" key={activeFamily.title}>
            <div className="toolkit-feature-meta">
              <span className="toolkit-feature-kicker">Active Focus</span>
              <span className="toolkit-feature-count">
                0{activeIndex + 1} / 0{toolkitFamilies.length}
              </span>
            </div>

            <div className="toolkit-feature-head">
              <span className="toolkit-feature-dot"></span>
              <h3>{activeFamily.title}</h3>
            </div>

            <p className="toolkit-feature-summary">{activeFamily.summary}</p>

            <div className="toolkit-feature-chips">
              {activeFamily.items.map((item) => (
                <span key={`${activeFamily.title}-${item}`} className="toolkit-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="toolkit-grid" role="tablist" aria-label="Skill categories">
            {toolkitFamilies.map((family, index) => (
              <button
                key={family.title}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={`toolkit-card ${
                  index === activeIndex ? "toolkit-card-active" : ""
                }`}
                style={
                  { ["--toolkit-card-accent" as string]: family.accent } as CSSProperties
                }
                onClick={() => setActiveIndex(index)}
                onFocus={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onBlur={() => setIsPaused(false)}
              >
                <div className="toolkit-card-head">
                  <span className="toolkit-card-dot"></span>
                  <span className="toolkit-card-title">{family.title}</span>
                </div>
                <div className="toolkit-card-preview">
                  {family.items.slice(0, 3).map((item) => (
                    <span key={`${family.title}-${item}-preview`}>{item}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

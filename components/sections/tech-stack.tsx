import { Section, SectionTitle, SectionSubtitle } from "@/components/shared/section";
import { TechBadge } from "@/components/badges/tech-badge";

// --------- COMPONENT ---------
export function TechStack() {
  const techStack = {
    "AI & ML": [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Qwen",
      "Vision-LLMs",
      "RLHF methods",
    ],
    "Backend & Infrastructure": [
      "Node.js",
      "Express",
      "Python APIs",
      "Docker",
      "GCP (Cloud Run, Vertex AI)",
      "Lambda Labs GPU",
      "OSCER SLURM",
      "Delta AI",
      "WandB",
      "Phoenix Arize",
    ],
    Frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "CSS",
      "Responsive Design",
    ],
    Databases: [
      "MongoDB",
      "PostgreSQL",
      "ChromaDB",
      "Redis",
      "Firestore",
    ],
  };

  return (
    <Section>
      <SectionTitle text="Tech Stack" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category} className="space-y-3">
            <SectionSubtitle text={category} />
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}


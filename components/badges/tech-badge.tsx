import { Badge } from "../ui/badge";

// --------- COLOR MAPPING ---------
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getTechColor = (tech: string): string => {
  const colorMap: Record<string, string> = {
    // AI & ML
    "PyTorch": "#EE4C2C",
    "TensorFlow": "#FF6F00",
    "LangChain": "#1C3C3C",
    "LangGraph": "#1C3C3C",
    "LlamaIndex": "#4A90E2",
    "Qwen": "#6366F1",
    "Vision-LLMs": "#8B5CF6",
    "RLHF methods": "#EC4899",
    // Backend & Infrastructure
    "Node.js": "#339933",
    "Express": "#000000",
    "Python APIs": "#3776AB",
    "Docker": "#2496ED",
    "GCP (Cloud Run, Vertex AI)": "#4285F4",
    "Lambda Labs GPU": "#FF6B35",
    "OSCER SLURM": "#1E88E5",
    "Delta AI": "#6366F1",
    "WandB": "#FFBE00",
    "Phoenix Arize": "#7C3AED",
    // Frontend
    "Next.js": "#000000",
    "React": "#61DAFB",
    "TypeScript": "#3178C6",
    "Tailwind": "#06B6D4",
    "CSS": "#1572B6",
    "Responsive Design": "#6B7280",
    // Databases
    "MongoDB": "#47A248",
    "PostgreSQL": "#336791",
    "ChromaDB": "#FF6B6B",
    "Redis": "#DC382D",
    "Firestore": "#FFA000",
  };

  return colorMap[tech] || "#6B7280"; // Default neutral gray
};

// --------- COMPONENT PROPS ---------
interface TechBadgeProps {
  tech: string;
}

// --------- COMPONENT ---------
export function TechBadge({ tech }: TechBadgeProps) {
  const color = getTechColor(tech);

  return (
    <Badge
      variant="outline"
      className="rounded-full text-xs border"
      style={{
        borderColor: color,
        backgroundColor: hexToRgba(color, 0.1),
        color: color,
      }}
    >
      {tech}
    </Badge>
  );
}


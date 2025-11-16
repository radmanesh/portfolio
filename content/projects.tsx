import {
  Brain,
  Watch,
  Bot,
  Layout,
  GraduationCap,
} from "lucide-react";
import { Project } from "portfolioManager";

const PROJECTS = [
  {
    id: "1",
    featured: true,
    title: "AgentifyDesign2Code",
    url: "https://github.com/radmanesh/agentify-design2code",
    githubUrl: "https://github.com/radmanesh/agentify-design2code",
    logo: <Bot className="project-logo" />,
    description: "A fully agentified extension of the Design2Code workflow with multi-agent LLM orchestration. Coordinates White and Green agents for HTML/CSS generation and evaluation using Playwright-based rendering, IoU geometric similarity, and multi-device screenshot comparison.",
    tags: ["Multi-agent LLM", "Code generation", "Evaluation systems", "A2A protocol"],
  },
  {
    id: "2",
    featured: true,
    title: "ResponsiveGen",
    url: "https://github.com/radmanesh/ResponsiveGen",
    githubUrl: "https://github.com/radmanesh/ResponsiveGen",
    logo: <Layout className="project-logo" />,
    description: "A multimodal pipeline that transforms mobile, tablet, and desktop wireframe sketches into clean, responsive HTML/CSS. Features vision-enabled LLM interpretation, multi-breakpoint reasoning, and comprehensive evaluation suite.",
    tags: ["Vision-LLM", "Responsive layout", "Multimodal evaluation"],
  },
  {
    id: "3",
    featured: false,
    title: "Intelligent Faculty Recommendation Engine",
    url: "#",
    logo: <GraduationCap className="project-logo" />,
    description: "A domain-specific recommendation engine that matches PhD proposals to the most relevant faculty advisors. Built with LlamaIndex, LangChain, LangGraph, Qwen models, and ChromaDB for expertise extraction and relevance scoring.",
    tags: ["Semantic search", "RAG", "Document intelligence"],
  },
  {
    id: "4",
    featured: true,
    title: "Jamasp",
    url: "https://jamasp.app/",
    logo: <Watch className="project-logo" />,
    description: "A scalable platform for wearable-device research, providing participant management, real-time data ingestion, interactive dashboards, and AI-ready time-series pipelines. Used in behavioral science and health research.",
    tags: ["Wearable analytics", "Time-series data", "Cloud platform"],
  },
  {
    id: "5",
    featured: true,
    title: "Lens (formerly Cut)",
    url: "https://cut.social/",
    logo: <Brain className="project-logo" />,
    description: "A robust, researcher-friendly platform for behavioral studies. Supports a large library of experiments including Ultimatum Game, Dictator Game, Memory tests, Task Switching, Go/NoGo, N-Back, BART, Stroop, and many others. Used in peer-reviewed psychology research.",
    tags: ["Behavioral experiments", "Cognitive tasks", "Full-stack development"],
  },
] satisfies Project[];

export default PROJECTS;

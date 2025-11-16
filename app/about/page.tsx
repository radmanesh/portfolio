import Link from "next/link";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineLink,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline";
import {
  Section,
  SectionSubtitle,
  SectionTitle,
} from "@/components/shared/section";

import ABOUT from "@/content/about";
import { TechBadge } from "@/components/badges/tech-badge";

// --------- PAGE LAYOUT ---------
export default function AboutPage() {
  return (
    <Section>
      <SectionTitle text="About me" />
      <div className="grid grid-cols-1 gap-4">
        <p className="text-base text-justify text-muted-foreground tracking-tight font-normal">
          I'm Arman Radmanesh — a Graduate Research Assistant and MS Data Science & Analytics student at the University of Oklahoma.
          I build agentic AI systems, multimodal LLM pipelines, and production-grade research tools that solve complex, real-world problems.
        </p>
        <p className="text-base text-justify text-muted-foreground tracking-tight font-normal">
          My work blends deep learning, computer vision, semantic retrieval, evaluation science, and full-stack engineering.
          I develop multi-agent LLM systems, RL-based post-training loops, and multimodal evaluation frameworks. My research focuses on
          Agent-to-Agent (A2A) orchestration for code generation and critique, vision-language pipelines for layout extraction and sketch-to-code systems,
          semantic retrieval systems using LlamaIndex, LangChain, LangGraph, and Qwen, and automated benchmarking and evaluation frameworks.
        </p>
        <p className="text-base text-justify text-muted-foreground tracking-tight font-normal">
          I work with <TechBadge tech="React" />, <TechBadge tech="Next.js" />, <TechBadge tech="TypeScript" />, and <TechBadge tech="Tailwind" /> for frontend development,
          alongside <TechBadge tech="PyTorch" />, <TechBadge tech="TensorFlow" />, <TechBadge tech="LangChain" />, and various LLM frameworks for AI/ML work. Beyond code, I enjoy exploring
          agentic system design, multimodal reasoning, distributed ML pipelines, and building research tools that turn messy datasets into clean insights.
        </p>
      </div>
      <SectionSubtitle text="Education" />
      <div className="grid grid-cols-1 gap-4 px-2">
        <Timeline>
          {ABOUT.education.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineConnector />
              <TimelineTime>
                {`${item.period.from} - ${item.period.to}`}
              </TimelineTime>
              <TimelineContent>
                <TimelineTitle>{item.institute}</TimelineTitle>
                <TimelineDescription>{item.degree}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
      <SectionSubtitle text="Experience" />
      <div className="grid grid-cols-1 gap-4 px-2">
        <Timeline>
          {ABOUT.experience.map((item) => (
            <TimelineItem key={item.id}>
              <TimelineConnector />
              <TimelineTime>
                {`${item.period.from} - ${item.period.to}`}
              </TimelineTime>
              <TimelineContent>
                <TimelineTitle>{item.role.title}</TimelineTitle>
                <TimelineLink
                  target="_blank"
                  href={item.company.url}
                  referrerPolicy="no-referrer"
                >
                  {item.company.name}
                </TimelineLink>
              </TimelineContent>
              <TimelineDescription>{item.role.description}</TimelineDescription>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Section>
  );
}

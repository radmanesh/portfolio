import { AnimatedLink } from "@/components/shared/animated-link";
import { Section, SectionTitle } from "@/components/shared/section";

// --------- COMPONENT LAYOUT ---------
export function About() {
  return (
    <Section>
      <SectionTitle text="Meet me" />
      <div className="grid grid-cols-1 gap-4 leading-relaxed md:leading-normal tracking-tight text-muted-foreground selection:text-muted-foreground/80">
        <p className="font-semibold md:text-lg">Hi, I'm Arman Radmanesh.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
          <p>
            I'm a Graduate Research Assistant at the University of Oklahoma, pursuing an MS in Data Science & Analytics.
            I build agentic AI systems, multimodal LLM pipelines, and production-grade research tools.
          </p>
          <p>
            My work blends deep learning, computer vision, semantic retrieval, evaluation science, and full-stack engineering
            to solve complex, real-world problems. I focus on multi-agent systems, LLM engineering, and multimodal ML.
          </p>
          <p>
            I develop multi-agent LLM systems, RL-based post-training loops, and multimodal evaluation frameworks.
            My research includes A2A orchestration, vision-language pipelines, and semantic retrieval systems using
            LlamaIndex, LangChain, LangGraph, and Qwen.
          </p>
        </div>
        <div className="flex justify-end">
          <AnimatedLink href="/about">Find out more</AnimatedLink>
        </div>
      </div>
    </Section>
  );
}

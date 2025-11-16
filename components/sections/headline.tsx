import Link from "next/link";
import { ArrowDownRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

// --------- LAYOUT ---------
export function Headline() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="mx-auto font-display max-w-3xl font-bold text-3xl leading-none tracking-tight text-foreground md:text-5xl">
          Building{" "}
          <span className="text-green-600 dark:text-green-400 selection:bg-green-200/80 dark:selection:bg-green-800/80">
            agentic
          </span>{" "}
          AI systems that combine{" "}
          <span className="text-violet-600 dark:text-violet-400 selection:bg-violet-200/80 dark:selection:bg-violet-800/80">
            multi-agent
          </span>{" "}
          orchestration with{" "}
          <span className="text-amber-600 dark:text-amber-400 selection:bg-amber-200/80 dark:selection:bg-amber-800/80">
            multimodal
          </span>{" "}
          intelligence.
        </h1>
        <h2 className="text-base md:text-xl text-muted-foreground selection:text-muted-foreground/80 tracking-tighter font-light">
          I develop LLM pipelines, vision-language systems, and production-grade research tools that solve complex, real-world problems through deep learning, semantic retrieval, and full-stack engineering.
        </h2>
      </div>
      <Button
        asChild
        size="lg"
        variant="expandIcon"
        iconPlacement="right"
        Icon={ArrowDownRightIcon}
        className="rounded-full"
      >
        <Link
          download
          target="_blank noreferrer"
          href="/docs/radmanesh-resume.pdf"
        >
          Get my resume
        </Link>
      </Button>
    </div>
  );
}

import LABS from "@/content/labs";
import { ExperimentCard } from "@/components/shared/experiment-card";
import { AnimatedLink } from "@/components/shared/animated-link";
import { Section, SectionTitle } from "@/components/shared/section";

// --------- COMPONENT ---------
export function LabExperiments() {
  // Show the last three available experiments
  const featuredExperiments = LABS.slice(-3).reverse();

  if (featuredExperiments.length === 0) return null;

  return (
    <Section>
      <SectionTitle text="Lab experiments" />
      <div className="grid grid-cols-1 gap-4">
        {featuredExperiments.map((experiment) => (
          <ExperimentCard key={experiment.slug} experiment={experiment} />
        ))}
      </div>
      <div className="flex justify-end">
        <AnimatedLink href="/lab">View all experiments</AnimatedLink>
      </div>
    </Section>
  );
}

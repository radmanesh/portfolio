"use client";

import { Project } from "portfolioManager";
import { ComponentProps } from "react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

// --------- COMPONENT PROPS ---------
interface ProjectCardProps extends ComponentProps<"a"> {
  project: Project;
}

// --------- COMPONENT LAYOUT ---------
export function ProjectCard({ project, ...props }: Readonly<ProjectCardProps>) {
  return (
    <div className="rounded-lg border text-card-foreground relative overflow-hidden transition-all duration-300 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-400">
      <a href={project.url} {...props} className="block">
        <div className="p-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0">{project.logo}</div>
            <div className="grow min-w-0 tracking-tight font-normal">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-semibold truncate">{project.title}</h2>
                {project.githubUrl && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View on GitHub"
                  >
                    <SiGithub className="h-4 w-4" />
                  </button>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {project.description}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="rounded-full text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

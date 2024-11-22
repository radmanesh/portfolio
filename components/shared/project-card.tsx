import { Project } from "som3aware";
import { ComponentProps } from "react";

interface ProjectCardProps extends ComponentProps<"a"> {
  project: Project;
}

export function ProjectCard({ project, ...props }: ProjectCardProps) {
  return (
    <a href={project.url} {...props}>
      <div className="rounded-lg border text-card-foreground relative overflow-hidden transition-all duration-300 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-zinc-500 dark:hover:border-zinc-400">
        <div className="flex items-center p-4">
          <div className="flex-shrink-0 mr-4">{project.logo}</div>
          <div className="flex-grow min-w-0 tracking-tight font-light">
            <h2 className="font-semibold truncate">{project.title}</h2>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

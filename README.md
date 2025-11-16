# Portfolio ✨

[Personal portfolio](https://github.com/radmanesh/portfolio) built with [Next.js] 16 and [Contentlayer], originally based on [ahmedsomaa/portfolio](https://github.com/ahmedsomaa/portfolio).

## Built With

- [Next.js](https://nextjs.org/) for bootstrapping the project.
- [Contentlayer](https://contentlayer.dev/) for content management.
- [Tailwindcss](https://tailwindcss.com/) for styling.
- [Shiki](https://shiki.style/) for syntax highlighting.
- [Lucide React](https://lucide.dev/) for icons.
- [Shadcn/ui](https://ui.shadcn.com/) for components.
- [Enhanced version of shadcn-button component](https://enhanced-button.vercel.app/) for better shadcn buttons.
- [Origin UI](https://originui.com/) for extended shadcn components.
- [Deployment](https://vercel.com/) for deployment.

## Running Locally

```sh
git clone https://github.com/radmanesh/portfolio
cd portfolio
bun install
bun run content:build && bun run dev
```

## How to use

### Fonts

I use 4 font variables. Change them to your own styles in `app/layer.tsx`.

- `font-logo` for the website's logo.
- `font-display` for the landing page headline.
- `font-sans` for the website's body.
- `font-mono` for code blocks.

### Content

Replace my content under the `/content` directory with yours. This includes:

- Navigation items.
- Social links.
- Projects.
- Education & Experience.
- Lab Experiments.

### Projects

Add your projects in `/content/projects.tsx`. Each project should have:

- `id`: Unique identifier (string)
- `title`: Project name
- `url`: Project URL or GitHub link
- `githubUrl`: (Optional) GitHub repository URL
- `logo`: Icon component from `lucide-react` (e.g., `<Bot className="project-logo" />`)
- `description`: Brief project description
- `tags`: (Optional) Array of tag strings (e.g., `["React", "TypeScript"]`)
- `featured`: Boolean to show on homepage

Example:
```tsx
{
  id: "1",
  featured: true,
  title: "My Project",
  url: "https://example.com",
  githubUrl: "https://github.com/username/project",
  logo: <Code className="project-logo" />,
  description: "A brief description of the project.",
  tags: ["React", "Next.js", "TypeScript"],
}
```

### Lab Experiments

Add experiments in three steps:

1. **Add experiment metadata** in `/content/labs.tsx`:
   - `id`: Unique identifier
   - `slug`: URL-friendly identifier (used in `/lab/[slug]`)
   - `title`: Experiment name
   - `logo`: Icon component from `lucide-react`
   - `mode`: "page" or "modal" (usually "page")
   - `description`: Brief description

2. **Create experiment component** in `/components/lab/experiments/[slug].tsx`:
   - Export a default React component
   - Implement your interactive experiment

3. **Register the experiment** in `/components/lab/registry.tsx`:
   - Import your component
   - Add entry: `"slug": { title: "Title", Component: YourComponent }`

Example:
```tsx
// content/labs.tsx
{
  id: "1",
  slug: "my-experiment",
  title: "My Experiment",
  logo: <Sparkles className="project-logo" />,
  mode: "page",
  description: "An interactive experiment description.",
}

// components/lab/experiments/my-experiment.tsx
export default function MyExperiment() {
  return <div>Your experiment UI here</div>;
}

// components/lab/registry.tsx
import MyExperiment from "@/components/lab/experiments/my-experiment";

export const LAB_REGISTRY = {
  "my-experiment": { title: "My Experiment", Component: MyExperiment },
  // ... other experiments
};
```

### Blog Posts

I use contentlayer alongside mdx. Delete the files under `/posts`, and add your own.

### Syntax Highlighting

I made a custom code block component `/components/code-block.tsx` using shiki. Change your
light & dark themes there.

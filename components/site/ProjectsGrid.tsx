import type { SVGProps } from "react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, ShieldIcon, SparklesIcon, WrenchIcon } from "@/components/site/Icons";
import { cn } from "@/lib/utils";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectItem {
  title: string;
  description: string;
  tech?: string[];
  links?: ProjectLink[];
  status?: string;
  category?: string;
}

interface ProjectsGridProps {
  items: ProjectItem[];
}

export function ProjectsGrid({ items }: ProjectsGridProps) {
  const statusStyles: Record<string, { className: string; Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element }> = {
    Live: {
      className: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/30",
      Icon: RocketIcon,
    },
    Delivered: {
      className: "bg-sky-500/10 text-sky-300 ring-sky-400/30",
      Icon: SparklesIcon,
    },
    Maintenance: {
      className: "bg-amber-500/10 text-amber-300 ring-amber-400/30",
      Icon: WrenchIcon,
    },
    Completed: {
      className: "bg-slate-500/10 text-slate-300 ring-slate-400/30",
      Icon: ShieldIcon,
    },
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project) => {
        const fallbackMeta = {
          className: "bg-slate-500/10 text-slate-300 ring-slate-400/30",
          Icon: ShieldIcon,
        };
        const statusMeta = project.status ? statusStyles[project.status] ?? fallbackMeta : null;
        const StatusIcon = statusMeta?.Icon;

        return (
          <Card key={project.title} className="flex h-full flex-col">
            <CardHeader className="gap-3">
              {(project.status || project.category) && (
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {StatusIcon ? (
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.7rem] font-medium ring-1 ring-inset",
                        statusMeta.className,
                      )}
                    >
                      <StatusIcon className="h-3.5 w-3.5" />
                      {project.status}
                    </span>
                  ) : null}
                  {project.category ? (
                    <span className="text-[0.65rem] tracking-[0.35em] text-slate-500">
                      {project.category}
                    </span>
                  ) : null}
                </div>
              )}
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          <CardContent className="flex-1 space-y-4">
            {project.tech?.length ? (
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Key Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
            {project.links?.length ? (
              <div className="flex flex-wrap gap-3 text-sm font-medium text-brand">
                {project.links.map((link) => (
                  <Link key={link.label} href={link.href} className="flex items-center gap-1">
                    <span>{link.label}</span>
                    <span aria-hidden>→</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

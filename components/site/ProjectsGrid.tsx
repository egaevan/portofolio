import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectItem {
  title: string;
  description: string;
  tech?: string[];
  links?: ProjectLink[];
}

interface ProjectsGridProps {
  items: ProjectItem[];
}

export function ProjectsGrid({ items }: ProjectsGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project) => (
        <Card key={project.title} className="flex h-full flex-col">
          <CardHeader>
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
      ))}
    </div>
  );
}

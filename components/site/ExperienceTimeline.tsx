import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights?: string[];
  stack?: string[];
}

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="space-y-6 border-l border-slate-800/60 pl-6">
      {items.map((item) => (
        <article key={`${item.company}-${item.period}`} className="relative">
          <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full border-2 border-[#050505] bg-brand shadow" />
          <div className="card-surface">
            <header className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-slate-100">
                {item.role} · <span className="text-brand">{item.company}</span>
              </h3>
              <p className="text-xs uppercase tracking-[0.25em] text-muted">{item.period}</p>
            </header>
            {item.stack?.length ? (
              <div className="mt-3 space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Stack Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ) : null}
            {item.highlights?.length ? (
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="leading-relaxed">
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

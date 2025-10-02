import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, description, children }: SectionProps) {
  return (
    <section id={id} className="relative scroll-mt-24">
      <span className="pointer-events-none absolute inset-x-0 -top-10 block h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] md:items-start">
        <header className="space-y-3">
          {eyebrow ? <p className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</p> : null}
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-[2.6rem] md:leading-tight">
            {title}
          </h2>
          {description ? <p className="text-base leading-relaxed text-muted md:text-lg">{description}</p> : null}
        </header>
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}

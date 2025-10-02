interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

interface EducationTimelineProps {
  items: ReadonlyArray<EducationItem>;
}

export function EducationTimeline({ items }: EducationTimelineProps) {
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={`${item.school}-${item.period}`} className="relative pl-6">
          <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-brand" />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-slate-100 md:text-xl">
              {item.school}
            </p>
            <p className="text-base text-muted">{item.degree}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted md:text-[0.7rem]">{item.period}</p>
            {item.details ? <p className="text-sm text-muted">{item.details}</p> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

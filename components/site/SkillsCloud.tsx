import { Badge } from "@/components/ui/badge";

interface SkillsCloudProps {
  items: ReadonlyArray<string>;
  featured?: ReadonlyArray<string>;
}

export function SkillsCloud({ items, featured }: SkillsCloudProps) {
  const remaining = featured ? items.filter((skill) => !featured.includes(skill)) : items;

  return (
    <div className="card-surface space-y-5">
      {featured?.length ? (
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Core Strengths</p>
          <div className="flex flex-wrap gap-3">
            {featured.map((skill) => (
              <Badge key={skill} className="px-4 py-2 text-sm" variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Toolbox</p>
        <div className="flex flex-wrap gap-3">
          {remaining.map((skill) => (
            <Badge key={skill} className="px-4 py-2 text-sm" variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

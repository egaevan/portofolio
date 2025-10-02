import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  name: string;
  items: ReadonlyArray<string>;
}

interface SkillsCloudProps {
  items: ReadonlyArray<string>;
  featured?: ReadonlyArray<string>;
  categories?: ReadonlyArray<SkillCategory>;
}

export function SkillsCloud({ items, featured, categories }: SkillsCloudProps) {
  const featuredSet = new Set(featured ?? []);
  const remaining = featured ? items.filter((skill) => !featuredSet.has(skill)) : items;

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

      {categories?.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">{category.name}</p>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-4 py-2 text-sm"
                    variant={featuredSet.has(skill) ? "default" : "outline"}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
}

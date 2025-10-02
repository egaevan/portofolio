import { EducationTimeline } from "@/components/site/EducationTimeline";
import { ExperienceTimeline } from "@/components/site/ExperienceTimeline";
import { Hero } from "@/components/site/Hero";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import { Section } from "@/components/site/Section";
import { SkillsCloud } from "@/components/site/SkillsCloud";
import { education, experience, featuredSkills, projects, skills } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />

      <Section
        id="experience"
        eyebrow="Track Record"
        title="Professional Experience"
        description="Perusahaan dan peran yang membentuk perjalanan sebagai backend engineer."
      >
        <ExperienceTimeline items={experience} />
      </Section>

      <Section
        id="projects"
        eyebrow="Selected Work"
        title="Highlighted Projects"
        description="Contoh implementasi sistem backend, integrasi, dan observability."
      >
        <ProjectsGrid items={projects} />
      </Section>

      <Section
        id="skills"
        eyebrow="Skill Set"
        title="Technical Toolkit"
        description="Teknologi dan praktik yang digunakan untuk membangun sistem yang reliable."
      >
        <SkillsCloud items={skills} featured={featuredSkills} />
      </Section>

      <Section
        id="education"
        eyebrow="Background"
        title="Education"
        description="Pendidikan formal dan pengalaman akademik terkait engineering."
      >
        <EducationTimeline items={education} />
      </Section>
    </div>
  );
}

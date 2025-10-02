import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowIcon, GithubIcon, LinkedInIcon } from "@/components/site/Icons";
import { profile } from "@/lib/data";

export function Hero() {
  const phoneHref = profile.phone.replace(/\s+|-/g, "");

  return (
    <section className="card-surface relative flex flex-col gap-8 overflow-hidden md:flex-row md:items-center">
      <span className="hero-aurora" />
      <span className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-brand/25 blur-3xl opacity-60 md:-left-16 md:h-64 md:w-64" />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
      <Image
        src={profile.avatarUrl}
        alt={`${profile.name} avatar`}
        width={176}
        height={176}
        className="relative z-10 h-32 w-32 rounded-2xl border border-slate-800/60 object-cover shadow-xl md:h-40 md:w-40"
        priority
      />
      <div className="relative z-10 flex flex-1 flex-col gap-5">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <Badge>{profile.title}</Badge>
          <span>{profile.location}</span>
          <span aria-hidden>•</span>
          <a href={`tel:${phoneHref}`} className="hover:text-brand">
            {profile.phone}
          </a>
          <span aria-hidden>•</span>
          <a href={`mailto:${profile.email}`} className="hover:text-brand">
            {profile.email}
          </a>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-[3.25rem] md:leading-tight">
            {profile.name}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{profile.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={profile.linkedin} className={`${buttonVariants("primary")} group`}>
            <LinkedInIcon className="h-4 w-4 transition-colors duration-200 group-hover:text-slate-900" />
            <span>Connect on LinkedIn</span>
          </Link>
          <Link href={profile.github ?? "#projects"} className={`${buttonVariants("secondary")} group`}>
            <GithubIcon className="h-4 w-4 text-slate-300 transition-colors duration-200 group-hover:text-brand" />
            <span>View GitHub</span>
          </Link>
          <Link href="#projects" className={`${buttonVariants("ghost")} group`}>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">Explore Projects</span>
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand" />
          </Link>
        </div>
      </div>
    </section>
  );
}

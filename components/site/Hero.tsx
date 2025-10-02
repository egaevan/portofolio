import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowIcon, GithubIcon, LinkedInIcon } from "@/components/site/Icons";
import { profile } from "@/lib/data";

export function Hero() {
  const phoneHref = profile.phone.replace(/\s+|-/g, "");

  return (
    <section className="card-surface flex flex-col gap-8 md:flex-row md:items-center">
      <Image
        src={profile.avatarUrl}
        alt={`${profile.name} avatar`}
        width={176}
        height={176}
        className="h-32 w-32 rounded-2xl border border-slate-800/60 object-cover shadow-xl md:h-40 md:w-40"
        priority
      />
      <div className="flex flex-1 flex-col gap-5">
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
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            {profile.name}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">{profile.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={profile.linkedin} className={buttonVariants("primary")}>
            <LinkedInIcon className="mr-2 h-4 w-4" /> Connect on LinkedIn
          </Link>
          <Link href={profile.github ?? "#projects"} className={buttonVariants("secondary")}>
            <GithubIcon className="mr-2 h-4 w-4" /> View GitHub
          </Link>
          <Link href="#projects" className={buttonVariants("ghost")}>
            Explore Projects <ArrowIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

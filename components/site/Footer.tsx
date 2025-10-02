import Link from "next/link";

import { GithubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/site/Icons";
import { profile } from "@/lib/data";

export function Footer() {
  const phoneHref = profile.phone.replace(/\s+|-/g, "");

  return (
    <footer className="border-t border-slate-800/60 bg-[#050505]/80 py-10 text-sm text-muted backdrop-blur">
      <div className="container-section flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-brand">
            <MailIcon className="h-4 w-4" /> Email
          </a>
          <a href={`tel:${phoneHref}`} className="flex items-center gap-2 hover:text-brand">
            <PhoneIcon className="h-4 w-4" /> Call
          </a>
          <Link href={profile.linkedin} className="flex items-center gap-2 hover:text-brand">
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </Link>
          {profile.github ? (
            <Link href={profile.github} className="flex items-center gap-2 hover:text-brand">
              <GithubIcon className="h-4 w-4" /> GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

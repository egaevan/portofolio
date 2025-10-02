import Link from "next/link";

import { GithubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/site/Icons";
import { profile } from "@/lib/data";

export function Footer() {
  const phoneHref = profile.phone.replace(/\s+|-/g, "");

  return (
    <footer className="border-t border-slate-800/60 bg-[#050505]/80 py-10 text-sm text-muted backdrop-blur">
      <div className="container-section flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-3 text-slate-300">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
          >
            <MailIcon className="h-4 w-4 transition-colors duration-200 group-hover:text-brand" /> Email
          </a>
          <a
            href={`tel:${phoneHref}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
          >
            <PhoneIcon className="h-4 w-4 transition-colors duration-200 group-hover:text-brand" /> Call
          </a>
          <Link
            href={profile.linkedin}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
          >
            <LinkedInIcon className="h-4 w-4 transition-colors duration-200 group-hover:text-brand" /> LinkedIn
          </Link>
          {profile.github ? (
            <Link
              href={profile.github}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
            >
              <GithubIcon className="h-4 w-4 transition-colors duration-200 group-hover:text-brand" /> GitHub
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

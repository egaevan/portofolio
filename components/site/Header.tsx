import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";
import { LinkedInIcon, MailIcon } from "@/components/site/Icons";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#050505]/80 backdrop-blur-lg">
      <div className="container-section flex h-16 items-center justify-between gap-6">
        <Link href="#top" className="flex flex-col leading-tight text-slate-300 hover:text-brand">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{profile.name}</span>
          <span className="text-xs text-muted">{profile.title}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-400 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={profile.linkedin}
            className={cn(buttonVariants("secondary"), "hidden md:inline-flex items-center")}
          >
            <LinkedInIcon className="mr-2 h-4 w-4" /> LinkedIn
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className={cn(buttonVariants("primary"), "inline-flex items-center")}
          >
            <MailIcon className="mr-2 h-4 w-4" /> Email Me
          </Link>
        </div>
      </div>
    </header>
  );
}

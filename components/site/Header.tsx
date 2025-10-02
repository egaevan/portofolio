"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 border-b border-slate-800/60 bg-[#050505]/80 backdrop-blur-lg">
      <span className="pointer-events-none absolute inset-x-0 top-full block h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="container-section flex h-16 items-center justify-between gap-6">
        <Link href="#top" className="flex flex-col leading-tight text-slate-300 hover:text-brand">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{profile.name}</span>
          <span className="text-xs text-muted">{profile.title}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-400 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href={profile.linkedin}
            className={cn(buttonVariants("secondary"), "group hidden md:inline-flex items-center")}
          >
            <LinkedInIcon className="h-4 w-4 transition-colors duration-200 group-hover:text-brand" />
            LinkedIn
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className={cn(buttonVariants("primary"), "group inline-flex items-center")}
          >
            <MailIcon className="h-4 w-4 transition-colors duration-200 group-hover:text-slate-900" />
            Email Me
          </Link>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 p-2 text-slate-300 transition hover:border-brand/40 hover:text-brand lg:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              isOpen ? "rotate-90" : "rotate-0",
            )}
          >
            <path
              d={isOpen ? "M6 18 18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={cn(
          "container-section origin-top overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-4 border-t border-slate-800/60 pb-6 pt-4 text-sm text-slate-300">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline text-base"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3">
            <Link
              href={profile.linkedin}
              className={cn(buttonVariants("secondary"), "inline-flex items-center gap-2")}
              onClick={() => setIsOpen(false)}
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className={cn(buttonVariants("primary"), "inline-flex items-center gap-2")}
              onClick={() => setIsOpen(false)}
            >
              <MailIcon className="h-4 w-4" /> Email Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

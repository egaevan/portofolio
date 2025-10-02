# Next.js + Tailwind + shadcn/ui – Portfolio Boilerplate

> Stack: **Next.js (App Router) + TypeScript + TailwindCSS + shadcn/ui**. Fokus ke konten portofolio backend developer.

---

## 1) Struktur Folder

```
my-portfolio/
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ site/
│  │  ├─ Header.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Section.tsx
│  │  ├─ EducationTimeline.tsx
│  │  ├─ ExperienceTimeline.tsx
│  │  ├─ ProjectsGrid.tsx
│  │  ├─ SkillsCloud.tsx
│  │  └─ Footer.tsx
│  └─ ui/           # shadcn/ui (subset yang dipakai)
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ badge.tsx
│     ├─ input.tsx
│     └─ textarea.tsx
├─ lib/
│  └─ data.ts       # sumber data (bisa ganti ke JSON/MDX/headless CMS nanti)
├─ public/
│  ├─ avatar.jpg
│  └─ og-image.png
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
├─ components.json   # (opsional) konfigurasi shadcn/ui
├─ package.json
└─ README.md
```

---

## 2) `package.json`

```json
{
  "name": "my-portfolio",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "@types/node": "^20.12.12",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.4"
  }
}
```

> Catatan: Versi boleh menyesuaikan LTS terbaru.

---

## 3) Tailwind & PostCSS

**`tailwind.config.ts`**
```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0284c7",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
```

**`postcss.config.js`**
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**`app/globals.css`**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: light dark; }

body { @apply bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-100; }

.container-prose { @apply max-w-5xl mx-auto px-4; }

.section-title { @apply text-2xl md:text-3xl font-semibold tracking-tight mb-6; }
```

---

## 4) Layout & Page

**`app/layout.tsx`**
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ega Evan – Backend Developer",
  description: "CV & Portfolio – Backend Developer (Go, PostgreSQL, Docker, RabbitMQ, Redis)",
  openGraph: {
    title: "Ega Evan – Backend Developer",
    description: "CV & Portfolio – Backend Developer (Go, PostgreSQL, Docker, RabbitMQ, Redis)",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
```

**`app/page.tsx`**
```tsx
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Section from "@/components/site/Section";
import EducationTimeline from "@/components/site/EducationTimeline";
import ExperienceTimeline from "@/components/site/ExperienceTimeline";
import ProjectsGrid from "@/components/site/ProjectsGrid";
import SkillsCloud from "@/components/site/SkillsCloud";
import Footer from "@/components/site/Footer";
import { profile, education, experience, projects, skills } from "@/lib/data";

export default function Page() {
  return (
    <>
      <Header />
      <main className="container-prose space-y-16 py-10">
        <Hero profile={profile} />

        <Section id="summary" title="Summary">
          <p className="text-pretty leading-relaxed">
            {profile.summary}
          </p>
        </Section>

        <Section id="education" title="Education">
          <EducationTimeline items={education} />
        </Section>

        <Section id="experience" title="Work Experience">
          <ExperienceTimeline items={experience} />
        </Section>

        <Section id="projects" title="Projects">
          <ProjectsGrid items={projects} />
        </Section>

        <Section id="skills" title="Skills">
          <SkillsCloud items={skills} />
        </Section>
      </main>
      <Footer linkedin={profile.linkedin} />
    </>
  );
}
```

---

## 5) Komponen (Site)

**`components/site/Header.tsx`**
```tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="container-prose flex items-center justify-between py-3">
        <Link href="#" className="font-semibold">Ega Evan</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#summary">Summary</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="md:hidden">Contact</a>
      </div>
    </header>
  );
}
```

**`components/site/Hero.tsx`**
```tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Props = { profile: { name: string; title: string; location: string; avatarUrl: string } };

export default function Hero({ profile }: Props) {
  return (
    <section className="container-prose grid md:grid-cols-[auto,1fr] items-center gap-6">
      <div className="relative size-28 md:size-32 rounded-full overflow-hidden ring-2 ring-brand/20">
        <Image src={profile.avatarUrl} alt={profile.name} fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">{profile.name}</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">{profile.title} · {profile.location}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge>Go</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>Docker</Badge>
          <Badge>RabbitMQ</Badge>
          <Badge>Redis</Badge>
        </div>
      </div>
    </section>
  );
}
```

**`components/site/Section.tsx`**
```tsx
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, children, className }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <h2 className="section-title">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
```

**`components/site/EducationTimeline.tsx`**
```tsx
type Item = {
  school: string;
  degree: string;
  period: string;
  details?: string;
};

export default function EducationTimeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s border-slate-200 dark:border-slate-800 ps-6">
      {items.map((it, idx) => (
        <li key={idx} className="mb-6">
          <div className="absolute -start-1.5 mt-1 size-3 rounded-full bg-brand" />
          <div className="font-medium">{it.school}</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">{it.degree} · {it.period}</div>
          {it.details && <p className="mt-1 text-sm">{it.details}</p>}
        </li>
      ))}
    </ol>
  );
}
```

**`components/site/ExperienceTimeline.tsx`**
```tsx
type Item = {
  company: string;
  role: string;
  period: string;
  stack?: string[];
  highlights?: string[];
};

export default function ExperienceTimeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s border-slate-200 dark:border-slate-800 ps-6">
      {items.map((it, idx) => (
        <li key={idx} className="mb-6">
          <div className="absolute -start-1.5 mt-1 size-3 rounded-full bg-brand" />
          <div className="font-medium">{it.company}</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">{it.role} · {it.period}</div>
          {it.stack?.length ? (
            <p className="mt-1 text-sm">Tech: {it.stack.join(", ")}</p>
          ) : null}
          {it.highlights?.length ? (
            <ul className="mt-2 list-disc ms-5 text-sm space-y-1">
              {it.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
```

**`components/site/ProjectsGrid.tsx`**
```tsx
import { Card, CardContent } from "@/components/ui/card";

type Item = {
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

export default function ProjectsGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((it, idx) => (
        <Card key={idx}>
          <CardContent className="p-6">
            <div className="font-semibold text-lg">{it.title}</div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{it.description}</p>
            <div className="mt-3 text-xs uppercase tracking-wide text-slate-500">{it.tech.join(" · ")}</div>
            {it.links?.length ? (
              <div className="mt-4 flex gap-3 text-sm">
                {it.links.map((l, i) => (
                  <a key={i} href={l.href} className="underline underline-offset-4" target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

**`components/site/SkillsCloud.tsx`**
```tsx
import { Badge } from "@/components/ui/badge";

export default function SkillsCloud({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s, i) => (
        <Badge key={i}>{s}</Badge>
      ))}
    </div>
  );
}
```

**`components/site/Footer.tsx`**
```tsx
export default function Footer({ linkedin }: { linkedin: string }) {
  return (
    <footer id="contact" className="mt-24 border-t border-slate-200 dark:border-slate-800">
      <div className="container-prose py-10">
        <div className="section-title">Contact</div>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Email: <a href="mailto:hello@egaevan.dev" className="underline">hello@egaevan.dev</a>
        </p>
        <p className="mt-2 text-sm">
          LinkedIn: <a href={linkedin} className="underline" target="_blank" rel="noreferrer">{linkedin}</a>
        </p>
        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Ega Evan</p>
      </div>
    </footer>
  );
}
```

---

## 6) Komponen (shadcn/ui minimal)

> Untuk keperluan demo cepat, berikut subset komponen utilitas. Di produksi, sebaiknya generate via CLI **shadcn/ui**.

**`components/ui/button.tsx`**
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-colors",
        "bg-brand text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/50",
        className,
      )}
      {...props}
    />
  );
}
```

**`components/ui/card.tsx`**
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 shadow-sm", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...props} />;
}
```

**`components/ui/badge.tsx`**
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700", className)} {...props} />
  );
}
```

**`components/ui/input.tsx`**
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm",
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40",
          "disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input";
```

**`components/ui/textarea.tsx`**
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm",
          "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/40",
          "disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea";
```

---

## 7) Data (dummy, ganti sesuai profil)

**`lib/data.ts`**
```ts
export const profile = {
  name: "Ega Evan",
  title: "Backend Developer",
  location: "Jakarta, Indonesia",
  avatarUrl: "/avatar.jpg",
  summary:
    "Middle backend developer berpengalaman di Go (Hexagonal/DDD), PostgreSQL, Docker, RabbitMQ, Redis, CI/CD, dan integrasi enterprise. Fokus pada clean architecture, observability, dan reliability.",
  linkedin: "https://www.linkedin.com/in/egaevan",
};

export const education = [
  { school: "Universitas X", degree: "S.Kom – Informatika", period: "2016 – 2020", details: "Fokus Sistem Terdistribusi & Basis Data." },
];

export const experience = [
  {
    company: "Telkomsel (Consultant)",
    role: "Middle Backend Developer",
    period: "2023 – Sekarang",
    stack: ["Go", "PostgreSQL", "RabbitMQ", "Redis", "Docker", "GitLab CI", "SonarQube"],
    highlights: [
      "Membangun microservice subscription & configuration dengan Hexagonal Architecture",
      "Integrasi DPP tokenization, implementasi CI/CD dan quality gate",
      "Optimasi query Postgres & caching Redis menurunkan p95 latency >30%",
    ],
  },
  {
    company: "Perusahaan Y",
    role: "Backend Engineer",
    period: "2021 – 2023",
    highlights: ["Mendesain schema, DDD aggregate, dan observability stack"],
  },
];

export const projects = [
  {
    title: "Potloc Configuration Service",
    description: "Microservice konfigurasi client (DDD, Hexagonal) dengan Postgres & Redis",
    tech: ["Go", "PostgreSQL", "Redis", "GitLab CI"],
    links: [
      { label: "Repository", href: "#" },
      { label: "Docs", href: "#" },
    ],
  },
  {
    title: "Notification Service",
    description: "Service notifikasi multi-channel dengan RabbitMQ dan template engine",
    tech: ["Go", "RabbitMQ", "PostgreSQL"],
  },
];

export const skills = [
  "Go", "PostgreSQL", "Docker", "Redis", "RabbitMQ", "GORM", "Grafana", "Prometheus", "GitLab CI", "SonarQube", "Clean Architecture", "DDD", "TDD"
];
```

**`lib/utils.ts`**
```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

> Jika belum ingin menambah dependency `tailwind-merge`, hapus util `cn` & langsung pakai className biasa.

---

## 8) README – Cara Jalanin

1. **Init project**
   ```bash
   pnpm create next-app my-portfolio --ts --eslint --app --src-dir=false --tailwind
   cd my-portfolio
   pnpm add clsx
   # (opsional) pnpm add -D tailwind-merge
   ```
2. **Tempel file** sesuai struktur di atas (overwrite `app/` & tambah `components/`, `lib/`).
3. **Jalankan**
   ```bash
   pnpm dev
   ```
4. **Build**
   ```bash
   pnpm build && pnpm start
   ```

> Ke depan, Anda bisa migrasi sumber data ke **JSON/MDX** atau **Headless CMS** (Contentlayer, Notion API, atau Sanity) tanpa ubah UI.

---

## 9) Next Steps (opsional)
- Tambah halaman `/projects/[slug]` untuk detail project.
- Tambah form kontak dengan API Route (rate limit + reCAPTCHA).
- Tambah toggle dark mode & OG image dinamis.
- Deploy ke Vercel.


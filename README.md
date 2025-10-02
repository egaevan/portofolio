# Portfolio Boilerplate

Stack: **Next.js (App Router) + TypeScript + TailwindCSS + shadcn/ui**

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the development server:
   ```bash
   pnpm dev
   ```
3. Build and start production build:
   ```bash
   pnpm build && pnpm start
   ```

## Project Structure

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
│  └─ ui/
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ badge.tsx
│     ├─ input.tsx
│     └─ textarea.tsx
├─ lib/
│  ├─ data.ts
│  └─ utils.ts
├─ public/
│  ├─ avatar.jpg
│  └─ og-image.png
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
```

## Notes

- Update the data in `lib/data.ts` with your own profile.
- Replace the assets in `public/` with your actual avatar and Open Graph image.
- Configure additional shadcn/ui components via `components.json` if needed.

## Next Steps

- Add project detail pages under `/projects/[slug]`.
- Implement a contact form with API Route and rate limiting.
- Add a dark mode toggle and dynamic OG image generation.
- Deploy to Vercel.

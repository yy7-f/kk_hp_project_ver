You are working inside a Next.js 14+ App Router project with TypeScript and Tailwind.

GOAL
Create app landing pages under:
- src/app/apps/<slug>/page.tsx

SOURCE OF TRUTH
Use ONLY the following file as content:
- src/content/apps/landing_<app>.md

Do NOT invent features or add claims not written in the landing markdown.
If something is unclear, OMIT it rather than guessing.

STRICT SAFETY RULES (AdSense-safe)
- Do NOT mention internal implementation details (frameworks, SDKs, services, databases).
- Do NOT mention monetization (ads, subscriptions, payments).
- Do NOT include roadmap promises or future guarantees.
- Do NOT use company language (this is a project, not a company).
- Avoid these phrases entirely: “mental health”, “physical health”, “life optimization”, “treat”, “heal”, “fix”, “change your life”.
- No “production-ready”, “enterprise-grade”, or hype.

OUTPUT REQUIREMENTS
1) Create (or update) these files:
- src/app/apps/page.tsx (Apps index page listing all apps)
- src/app/apps/<slug>/page.tsx (one page per app)
2) Each app page must:
- Render content derived from landing_<app>.md
- Use a consistent layout (title, overview, who it’s for, key features, status, platforms, CTA)
- Have a neutral CTA button (placeholder link if not provided)
- No tables
3) Keep code minimal; no extra libraries.
4) Use Server Components by default. Use Client Components only if truly needed (prefer none).
5) Ensure `npm run build` succeeds.

APPS / SLUGS
Generate pages for these slugs (matching file names):
- japanese   -> landing_japanese.md
- spanish    -> landing_spanish.md
- math       -> landing_math.md
- typing     -> landing_typing.md
- meditation -> landing_meditation.md

IMPORTANT
Before writing pages, read each landing_<app>.md file and extract only user-facing content.
Do NOT mention that the content came from markdown or code.

Now implement the files with full code.

You are working in an EXISTING static site (index.html, styles.css, script.js). The current UI is already good and must remain recognizable.

Goal:
Do a FINAL “2026-quality” UI polish: tighter spacing rhythm, sharper typography hierarchy, more restrained accent color usage, better mobile feel, and improved accessibility — WITHOUT redesigning or changing the site structure.

Hard constraints (must follow):
- NO frameworks, bundlers, or new dependencies.
- Keep the same sections, layout, and DOM structure (no re-architecting).
- Do NOT rename existing CSS classes or IDs.
- Keep JS behavior the same (only fix clear bugs if needed).
- Prefer CSS-only improvements. HTML edits must be minimal and only if necessary.
- Keep it fast (avoid heavy effects).
- Maintain the current orange brand identity, but use it more selectively.

Specific improvements to implement:
1) Spacing & layout rhythm
   - Reduce excessive vertical whitespace by ~10–15% across sections (hero, vision, about, services, pledge, support, contact).
   - Keep section separation clear, but make the page feel less “stretched”.
   - Ensure consistent max-width and padding behavior for large screens.

2) Typography hierarchy
   - Improve the visual hierarchy: section titles > card titles > body text.
   - Make long paragraphs more readable (line-height, font-size, color).
   - Avoid making everything bold; use weight and color thoughtfully.
   - Ensure headings don’t look oversized on smaller screens.

3) Accent color restraint
   - Keep orange for CTAs, key highlights, and icons.
   - Reduce orange usage in places where it competes with content (e.g., some headings).
   - Ensure contrast stays accessible.

4) Cards & components polish
   - Make card shadows slightly more modern/subtle.
   - Improve hover/focus states on buttons and links.
   - Improve navbar styling (sticky/header background behavior should still work).

5) Accessibility & motion
   - Add clear focus-visible outlines for keyboard navigation.
   - Add reduced-motion support for animations (prefers-reduced-motion).
   - Ensure link/button hover states have non-color cues where possible.

6) Fix obvious bug (optional if present)
   - If script.js tries to query pseudo-elements like `.hero::before`, replace/remove that logic in a minimal safe way (do not add new effects; just prevent dead code).

Output requirements:
- Provide ONLY the updated code 
- blocks for:
  A) styles.css (full file, updated)
  B) Any minimal diff in index.html (only changed lines/sections)
  C) Any minimal diff in script.js (only if you fixed a real bug)
- Do NOT output unchanged code.
- After the code, give a short bullet list explaining what changed (max 10 bullets).

Remember: this is a polish pass, not a redesign. Keep it clean, calm, and professional.
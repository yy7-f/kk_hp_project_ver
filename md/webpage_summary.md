# SunlitPath Website - Complete Specification for Next.js + TypeScript + Tailwind CSS

## Project Overview

**Company Name:** SunlitPath
**Project Type:** Company Homepage / Landing Page
**Current Stack:** Vanilla HTML, CSS, JavaScript
**Target Stack:** Next.js 14+ with App Router, TypeScript, Tailwind CSS
**Purpose:** Personal project portfolio showcasing educational and productivity apps focused on learning, focus, wellbeing, and life direction

**Tagline:** "Apps for learning, focus, and life direction"

---

## Brand Identity

### Color Palette
```css
Primary Colors:
- Primary Orange: #ff6b35
- Secondary Orange: #f7931e
- Accent Yellow: #ffd23f

Neutral Colors:
- Text Dark: #2c3e50
- Text Light: #7f8c8d
- White: #ffffff
- Light Gray: #f8f9fa
- Medium Gray: #e9ecef

Gradients:
- Sunset Gradient: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%)
- Soft Background: linear-gradient(135deg, #fff5f0 0%, #fff8e1 100%)
```

### Typography
- **Font Family:** Inter (Google Fonts)
- **Weights Used:** 300, 400, 500, 600, 700
- **Import URL:** `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`

### Visual Style
- **Border Radius:** 12px (cards, buttons, forms)
- **Design Language:** Modern, clean, minimalist, warm and inviting
- **Icon Library:** Font Awesome 6.0.0
- **Shadows:**
  - Light: `0 1px 3px rgba(0, 0, 0, 0.08)`
  - Medium: `0 4px 12px rgba(0, 0, 0, 0.12)`
  - Hover: `0 8px 24px rgba(0, 0, 0, 0.15)`
- **Transitions:** `all 0.3s ease`

### Brand Icon
- Sun icon (Font Awesome: `fa-sun`)
- Represents illumination, energy, positivity
- Used in logo, hero section, and as rotating animation element

---

## Site Structure & Navigation

### Navigation Bar
- **Position:** Fixed at top, sticky with backdrop blur
- **Background:** Semi-transparent white `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(10px)`
- **Logo:** Sun icon + "SunlitPath" text (gradient color)
- **Navigation Links:**
  1. Home
  2. Vision
  3. About
  4. Apps (links to #services)
  5. Contact
- **Mobile:** Hamburger menu (appears < 768px)
- **Scroll Behavior:** Header background/shadow changes when scrolled past 100px

### Page Sections (Single Page App)
1. Hero
2. Vision
3. About
4. Services (Apps)
5. Pledge
6. Support
7. Contact
8. Footer

---

## Section-by-Section Breakdown

### 1. Hero Section (`#home`)

**Purpose:** First impression, main value proposition

**Layout:** Two-column grid (text left, visual right)

**Content:**
- **Headline:** "SunlitPath apps for learning, focus, and life direction"
  - "SunlitPath" has gradient text effect
- **Subtitle:** "A personal project building web and mobile apps for education, productivity, mental & physical health, and life optimization — designed to help people build habits, gain clarity, and turn goals into reality."
- **CTA Buttons:**
  - Primary: "Explore Apps" → links to #services
  - Secondary: "Contact" → links to #contact

**Visual Element:**
- Large sun icon (Font Awesome `fa-sun`)
- Gradient colored: sunset gradient
- Animated: 360° rotation over 20 seconds
- Drop shadow: `0 0 30px rgba(255, 107, 53, 0.3)`
- Font size: 12rem (desktop), 8rem (mobile)

**Background:**
- Soft gradient background
- Animated floating circle (pseudo-element) in background
- Animation: float up/down with rotation over 6 seconds

**Responsive:**
- Mobile: Single column, visual above text, centered layout

**Animations:**
- Hero buttons scale on hover: `translateY(-3px) scale(1.05)`
- Sun icon speeds up rotation on hover

---

### 2. Vision Section (`#vision`)

**Purpose:** Communicate the four core pillars of the platform

**Layout:** Four-column grid (responsive to 1-2 columns on mobile)

**Cards:** (4 cards total)

1. **Learn Skills**
   - Icon: `fa-graduation-cap`
   - Text: "Bite-sized practice for Japanese, math, typing, and coding basics — designed for steady daily progress."

2. **Build Momentum**
   - Icon: `fa-bolt`
   - Text: "Simple productivity systems for focus, habits, and execution that make progress sustainable."

3. **Strengthen Wellbeing**
   - Icon: `fa-heart`
   - Text: "Practical tools supporting mental and physical health through calm, movement, and consistency."

4. **Find Direction**
   - Icon: `fa-compass`
   - Text: "Clear vision and small steps to turn goals and long-term aspirations into reality."

**Card Design:**
- White background
- Circular gradient icon (80x80px)
- Shadow on hover with translateY(-8px)
- Border: 1px solid medium gray
- Icons are white text on gradient circle background

**North Star Section:**
- Appears below the 4 cards
- Border-top separator
- Label: "OUR NORTH STAR" (uppercase, small, orange)
- Quote: "Like the Sun, illuminating and energizing all existence — spreading smiles and happiness to every being and beyond."
- Centered text, max-width: 720px

**Animations:**
- Cards fade in on scroll (IntersectionObserver)
- Hover effect: cards lift up, icon rotates 10deg and scales 1.1

---

### 3. About Section (`#about`)

**Purpose:** Introduce the project, maker, and location

**Layout:** Two-column grid (text left, stats right)

**Content (Left Column):**

**Company Info Card:**
- **Project started:** 2025
- **Maker:** Yo Fujimoto
- **Based in:** Tokyo, Japan

**Description:**
"SunlitPath is an early-stage personal project building a suite of apps that help people learn, stay focused, and improve mental and physical wellbeing — while also creating clarity about goals and direction. Coding education has been explored through hands-on pilot workshops using Scratch and Python."

**Stats Grid (Right Column):**
Three stat cards in a 3-column grid:

1. **2025**
   - Label: "Started"

2. **∞** (infinity symbol)
   - Label: "Iterations"

3. **🌍** (globe emoji)
   - Label: "Global Perspective"

**Design:**
- Background: Light gray
- Company info in white card with shadow
- Stats: gradient-colored numbers, gray labels
- Numbers animate counting up on scroll (for 2025)

**Responsive:**
- Mobile: Single column, stats stack vertically

---

### 4. Services Section (`#services`)

**Purpose:** Showcase the three main app categories being built

**Layout:** Three-column grid (responsive to single column on mobile)

**Cards:** (3 cards total)

1. **Education**
   - Icon: `fa-seedling`
   - Features:
     - Japanese learning (lessons + practice)
     - Math practice (daily drills)
     - Typing practice (speed + accuracy)
     - Coding basics (Scratch, Python) — pilot workshops

2. **Productivity & Life Optimization**
   - Icon: `fa-layer-group`
   - Features:
     - Focus-first routines and habit systems
     - Planning tools for clear vision and goals
     - Actionable steps for long-term growth

3. **Mental & Physical Wellbeing**
   - Icon: `fa-spa`
   - Features:
     - Meditation and calm training
     - Simple movement and fitness routines
     - Daily practices that support balance and energy

**Card Design:**
- Light gray background (turns white on hover)
- Gradient circular icon (70x70px)
- List items with arrow (→) before each
- Hover: translateY(-5px) with shadow

**List Style:**
- No bullets
- Arrow symbol (→) in primary color
- Padding-left for indentation

**Animations:**
- Cards fade in on scroll
- Icons scale and get shadow on hover

---

### 5. Pledge Section

**Purpose:** Communicate core values through inspirational quote

**Layout:** Centered content with quote and three value cards

**Content:**

**Quote:**
"Even a small step can light the path."
- Large, italic, dark text
- Decorative quotation marks in corners (large, orange, semi-transparent)

**Three Value Cards:**
1. **Clarity**
   - Icon: `fa-compass`

2. **Consistency**
   - Icon: `fa-calendar-check`

3. **Kindness**
   - Icon: `fa-hand-holding-heart`

**Design:**
- Soft gradient background
- Quote centered, large font
- Value cards in horizontal row (white cards with icon + label)
- Cards have subtle lift on hover

**Animations:**
- Value cards fade in with staggered delay (200ms each)
- Lift effect on hover

**Responsive:**
- Mobile: Cards stack vertically, quotation marks hidden

---

### 6. Support Section

**Purpose:** Encourage user engagement and feedback

**Layout:** Centered content with buttons

**Content:**
- **Title:** "Support the Project"
- **Subtitle:** "Feedback and early users help shape what comes next."
- **Three Buttons:**
  1. **Explore Apps** (Primary)
     - Icon: `fa-rocket`
     - Links to #services
  2. **Give Feedback** (Secondary)
     - Icon: `fa-comment`
     - Links to #contact
  3. **Collaborate** (Secondary)
     - Icon: `fa-handshake`
     - Links to #contact

**Design:**
- White background
- Buttons in horizontal row with gap
- Icons inline with button text

**Responsive:**
- Mobile: Buttons stack vertically, full width, centered

---

### 7. Contact Section (`#contact`)

**Purpose:** Provide contact information and form

**Layout:** Two-column grid (info left, form right)

**Contact Info (Left Column):**

Four info cards:
1. **Email**
   - Icon: `fa-envelope`
   - hello@sunlitpath.com

2. **Website**
   - Icon: `fa-globe`
   - sunlitpath.com

3. **Location**
   - Icon: `fa-map-marker-alt`
   - Tokyo, Japan

4. **Timezone**
   - Icon: `fa-clock`
   - Japan Standard Time (JST)

**Contact Form (Right Column):**

Form fields:
1. Text input: "Your Name" (required)
2. Email input: "Your Email" (required)
3. Textarea: "Your Message", 5 rows (required)
4. Submit button: "Send Message" (primary style)

**Form Behavior:**
- On submit: Form replaced with success message
- Success message shows checkmark icon, "Thank you for your message!", and "We'll get back to you soon."

**Design:**
- Light gray background
- White cards for info items and form
- Form inputs: 2px border (medium gray), changes to primary color on focus
- Focus ring: `0 0 0 3px rgba(255, 107, 53, 0.1)`

**Responsive:**
- Mobile: Single column, form below info

---

### 8. Footer

**Purpose:** Site map, contact summary, copyright

**Layout:** Three-column grid (responsive to flexible wrap)

**Content:**

1. **Footer Brand (Left):**
   - Sun icon + "SunlitPath" logo
   - Tagline: "Practical apps for learning, focus, wellbeing, and life direction."

2. **Quick Links (Center):**
   - Vision
   - About
   - Apps
   - Contact

3. **Footer Contact (Right):**
   - hello@sunlitpath.com
   - Tokyo, Japan

**Bottom Bar:**
- Copyright: "© 2026 SunlitPath"
- Centered text
- Border-top separator

**Design:**
- Dark background (#2c3e50)
- White text for headings
- Light gray text (#bdc3c7) for content
- Accent yellow for sun icon
- Links turn accent color on hover

**Responsive:**
- Mobile: Stacks into single column

---

## Interactive Features & Animations

### Scroll Behaviors

1. **Smooth Scroll:**
   - All anchor links scroll smoothly to sections
   - Offset by header height + 20px

2. **Scroll-triggered Animations:**
   - Vision cards, service cards, contact items, stat items fade in on scroll
   - Initial state: `opacity: 0`, `translateY(30px)`
   - Animated state: `opacity: 1`, `translateY(0)`
   - Transition: `0.6s ease`
   - Trigger: IntersectionObserver with threshold 0.1

3. **Header Scroll Effect:**
   - Background opacity increases past 100px scroll
   - Box shadow becomes more prominent

### Hover Effects

1. **Navigation Links:**
   - Color changes to primary orange
   - Underline expands from left to right

2. **Buttons:**
   - Primary: Lift up 2px, increase shadow
   - Secondary: Background changes to primary, text to white
   - Hero buttons: Scale 1.05 + lift 3px

3. **Cards (Vision, Service):**
   - Lift up (5-8px)
   - Shadow increases
   - Icons scale and rotate (vision) or just scale (service)

4. **Sun Icon:**
   - Rotation animation speeds up from 20s to 2s

### Mobile Menu

- Hamburger icon toggles menu visibility
- Menu slides down from top
- Hamburger animates to X when active:
  - Top bar: rotate 45deg, translate
  - Middle bar: opacity 0
  - Bottom bar: rotate -45deg, translate
- Clicking nav link closes menu

### Form Submission

- On submit: entire form replaced with success message
- Success message shows checkmark icon and thank you text
- (Note: No actual backend integration, purely visual)

### Stat Counter Animation

- Numbers count up from 0 to target value
- Triggers when stats section becomes visible (IntersectionObserver)
- Only runs once (tracks with data-animated attribute)
- 2025 animates, ∞ and 🌍 don't animate

### Accessibility

1. **Keyboard Navigation:**
   - All interactive elements have focus states
   - Focus visible: 2-3px outline in primary/accent color, offset
   - Hamburger has tabindex and role="button"

2. **Reduced Motion:**
   - Respects `prefers-reduced-motion: reduce`
   - Disables all animations and transitions
   - Removes hover transforms

---

## Responsive Breakpoints

### Desktop (Default)
- Max-width containers: 1200px
- Multi-column grids

### Tablet (≤ 768px)
- Hero: single column, visual on top
- About: single column
- Contact: single column
- Stats: single column
- Mobile menu activated
- Font sizes remain mostly same (using clamp)

### Mobile (≤ 480px)
- Reduced padding: 60px vertical, 15px horizontal
- Smaller button padding and font size
- All grids single column
- Smaller section title margins

---

## Technical Requirements for Next.js Implementation

### File Structure Recommendation

```
/app
  /page.tsx                 # Main landing page
  /layout.tsx               # Root layout with fonts
  /globals.css              # Tailwind + custom CSS
/components
  /Header.tsx               # Navigation bar
  /Hero.tsx                 # Hero section
  /Vision.tsx               # Vision section with cards
  /About.tsx                # About section
  /Services.tsx             # Services/Apps section
  /Pledge.tsx               # Pledge section
  /Support.tsx              # Support section
  /Contact.tsx              # Contact section
  /Footer.tsx               # Footer
  /ui
    /Button.tsx             # Reusable button component
    /Card.tsx               # Reusable card component
/lib
  /constants.ts             # Colors, content, etc.
/public
  # (No images currently in project)
```

### Dependencies to Install

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### External Resources

1. **Google Fonts:** Inter (weights: 300, 400, 500, 600, 700)
   - Use `next/font/google`

2. **Font Awesome:** Version 6.0.0
   - Option 1: Install `@fortawesome/fontawesome-svg-core` + React packages
   - Option 2: Use CDN link in layout

### Tailwind Configuration

**Custom Colors to Add:**
```js
colors: {
  primary: '#ff6b35',
  secondary: '#f7931e',
  accent: '#ffd23f',
  'text-dark': '#2c3e50',
  'text-light': '#7f8c8d',
  'light-gray': '#f8f9fa',
  'medium-gray': '#e9ecef',
}
```

**Custom Gradients:**
```js
backgroundImage: {
  'gradient-sunset': 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd23f 100%)',
  'gradient-soft': 'linear-gradient(135deg, #fff5f0 0%, #fff8e1 100%)',
}
```

**Custom Shadows:**
```js
boxShadow: {
  'light': '0 1px 3px rgba(0, 0, 0, 0.08)',
  'medium': '0 4px 12px rgba(0, 0, 0, 0.12)',
  'hover': '0 8px 24px rgba(0, 0, 0, 0.15)',
}
```

**Border Radius:**
```js
borderRadius: {
  'card': '12px',
}
```

### Key Implementation Notes

1. **Use App Router:** Next.js 14+ App Router for better performance
2. **Server Components:** Use where possible (most sections can be server components)
3. **Client Components:** Need for:
   - Header (scroll effects, mobile menu)
   - Contact form (form submission)
   - Animated sections (IntersectionObserver)
   - Interactive hover effects

4. **Animations:**
   - Use Framer Motion for complex animations (optional)
   - Or use Tailwind classes + CSS transitions
   - Implement IntersectionObserver hook for scroll animations

5. **Accessibility:**
   - Semantic HTML
   - ARIA labels where needed
   - Focus management
   - Keyboard navigation
   - Reduced motion support

6. **SEO:**
   - Metadata in layout.tsx
   - Title: "SunlitPath - Learning, Focus, Wellbeing, and Life Direction Apps"
   - Description: "SunlitPath is a personal project building web and mobile apps for education, productivity, mental & physical health, and life optimization—helping people gain clarity and turn goals into reality."
   - Keywords: "education apps, productivity, mental health, physical health, life optimization, goals, vision, Japanese learning, typing practice, math practice, meditation, Scratch, Python, SunlitPath"

7. **Performance:**
   - Use Next.js Image component if images added
   - Lazy load sections (automatic with Next.js)
   - Optimize Font Awesome (tree-shake unused icons)

---

## Content Structure (Quick Reference)

### Navigation Items
- Home, Vision, About, Apps, Contact

### Vision Cards (4)
1. Learn Skills (graduation-cap)
2. Build Momentum (bolt)
3. Strengthen Wellbeing (heart)
4. Find Direction (compass)

### Service Cards (3)
1. Education (seedling)
2. Productivity & Life Optimization (layer-group)
3. Mental & Physical Wellbeing (spa)

### Pledge Values (3)
1. Clarity (compass)
2. Consistency (calendar-check)
3. Kindness (hand-holding-heart)

### Contact Info (4)
1. Email: hello@sunlitpath.com
2. Website: sunlitpath.com
3. Location: Tokyo, Japan
4. Timezone: Japan Standard Time (JST)

### Company Info
- Started: 2025
- Maker: Yo Fujimoto
- Based in: Tokyo, Japan

---

## Design Principles

1. **Warm & Inviting:** Sunset gradient colors evoke positivity and energy
2. **Clean & Minimal:** Ample white space, clear hierarchy
3. **Purposeful Animation:** Subtle, meaningful animations that enhance UX
4. **Accessible:** Focus states, reduced motion support, semantic HTML
5. **Mobile-First:** Responsive design that works on all devices
6. **Professional Yet Personal:** Balances startup energy with credibility

---

## Notes for Developer

- No images/logos are currently in the project - sun icon serves as logo
- Form submission is client-side only (no backend integration)
- All content is static (no CMS)
- Consider adding:
  - Form backend integration (Formspree, EmailJS, or API route)
  - Google Analytics or privacy-friendly alternative
  - Cookie consent if needed
  - Actual app pages/links when apps are built
  - Blog section for updates
  - Multi-language support (Japanese + English)

---

## Comparison: Current vs Target Stack

### Current (Vanilla)
- HTML, CSS, JavaScript
- Font Awesome CDN
- Google Fonts CDN
- Live-server for development
- Single HTML file

### Target (Next.js)
- Next.js 14+ (App Router)
- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Better SEO, performance, maintainability
- Easy to extend with blog, apps, etc.

---

**End of Specification**

*This document contains all information needed to rebuild the SunlitPath website from scratch using modern web technologies while maintaining the exact same design, content, and user experience.*

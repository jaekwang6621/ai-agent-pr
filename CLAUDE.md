# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 starter kit built with TypeScript, React 19, shadcn/ui, and Tailwind CSS 4. The project uses the App Router architecture with route groups for organizing different sections of the application.

## Commands

### Development
```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production (runs TypeScript check + Next.js build)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Route Groups
The app uses Next.js route groups to organize pages with different layouts:

- `(marketing)/` - Public-facing pages (home, about) with Header + Footer layout
- `(dashboard)/` - Authenticated pages (dashboard, settings, help) with Header + Sidebar layout

Route groups use parentheses in directory names and don't affect URL paths.

### Import Aliases
- `@/*` - Root-level imports (configured in tsconfig.json)
  - Example: `@/components/ui/button`, `@/lib/constants`, `@/types`

### Component Organization

```
components/
├── ui/              # shadcn/ui primitives (Button, Card, Input, etc.)
├── animation/       # Reusable animation wrappers (FadeIn, PageTransition, AnimatedCard)
├── common/          # Shared components (Logo, PageHeader)
├── navigation/      # Navigation components (NavMenu, MobileNav)
└── layout/          # Layout components (Header, Footer, Sidebar)
```

### Key Patterns

#### Page Structure
Dashboard pages follow this pattern:
1. Import `PageHeader` from `@/components/common/page-header`
2. Wrap sections with `FadeIn` for scroll-based animations (with incremental `delay` values)
3. Use shadcn/ui components (Card, Badge, Tabs, etc.)
4. All content and comments should be in Korean

Example:
```tsx
<div className="space-y-8">
  <FadeIn>
    <PageHeader title="제목" description="설명" />
  </FadeIn>

  <FadeIn delay={0.1}>
    <Card>{/* content */}</Card>
  </FadeIn>
</div>
```

#### Animation Components
- `FadeIn` - Scroll-based fade-in with direction (up/down/left/right) and delay
- `PageTransition` - Page transition wrapper (applied in layout files)
- `AnimatedCard` - Hover-animated card wrapper

#### Constants
Global constants are defined in `lib/constants.ts`:
- `SITE_CONFIG` - Site metadata
- `MAIN_NAV` - Navigation menu items
- `FEATURES` - Feature list for marketing pages
- `DASHBOARD_STATS` - Dashboard statistics (sample data)

#### Type Definitions
TypeScript types are centralized in `types/index.ts`:
- `NavItem` - Navigation item structure
- `Feature` - Feature card structure
- `Stat` - Statistics data structure
- `Activity` - Activity log structure

### Styling
- Uses Tailwind CSS 4 with `@tailwindcss/postcss`
- Utility-first approach with `cn()` helper (from `lib/utils.ts`)
- Consistent spacing: `space-y-8` for page sections, `space-y-4` for card content

### State Management
- Most components are Server Components by default
- Client components (using hooks, animations) are marked with `"use client"`
- framer-motion is used for animations (requires client components)

## Adding New Pages

### Marketing Pages (Public)
1. Create `app/(marketing)/[page-name]/page.tsx`
2. Page automatically uses `(marketing)/layout.tsx` (Header + Footer)

### Dashboard Pages (Authenticated UI)
1. Create `app/(dashboard)/[page-name]/page.tsx`
2. Page automatically uses `(dashboard)/layout.tsx` (Header + Sidebar)
3. Add menu item to `components/layout/sidebar.tsx` if needed

### Adding Sidebar Menu Items
Update `components/layout/sidebar.tsx`:
```tsx
const menuItems = [
  { name: "메뉴명", href: "/path", icon: IconComponent },
];
```

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **React**: Version 19.2.3
- **TypeScript**: Strict mode enabled
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS 4
- **Icons**: lucide-react
- **Animation**: framer-motion
- **Hooks**: usehooks-ts

## Code Style

- TypeScript strict mode is enabled
- All user-facing content and code comments should be in Korean
- Component files should include JSDoc comments explaining purpose
- Use functional components with TypeScript interfaces for props
- Prefer Server Components unless client interactivity is needed

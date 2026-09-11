# FitHuBro Website — Design System Contract

## 1. Visual Alignment with FitHuBro Application

The FitHuBro Website is the visual north star of the entire product ecosystem. The application adopts the exact tokens, typography, and surface treatments pioneered on the website.

### Core Contract Constants:
- **Canvas Foundation**: Pure near-black `#050508` and `#0A0A0F`.
- **Primary Typography**:
  - Display / KPIs: `Anton, sans-serif` (`font-display`).
  - Body / Navigation: `Inter, sans-serif` (`font-body`).
- **Brand Accent (Mode A)**: Crimson Red `#DC2626` / `#EF4444`.
- **Surface Borders**: Semi-transparent white `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)`.
- **Backdrop Blurs**: `backdrop-blur-md` / `backdrop-blur-xl` for floating header bars and interactive cards.

---

## 2. White-Label Color Variables

To support tenant custom accents in Mode B without rewriting Tailwind classes, the website utilizes CSS custom properties in `src/app/globals.css`:

```css
:root {
  --color-accent: #DC2626;
  --color-accent-glow: rgba(220, 38, 38, 0.35);
  --color-accent-hover: #B91C1C;
}
```

Tailwind is configured to consume these variables:
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: 'var(--color-accent)',
        glow: 'var(--color-accent-glow)',
        hover: 'var(--color-accent-hover)',
      }
    }
  }
}
```

When a gym selects their brand color (e.g. Amber `#F59E0B` or Cyan `#06B6D4`), the entire website inherits the accent while preserving the dark athletic foundation.

---

## 3. Component Contract & Shared Aesthetics

1. **Header Navigation (`Nav.tsx`)**:
   - Fixed header with scroll-driven blur transition.
   - Clean persona switcher or gym logo slot.
   - Dynamic CTA linking to login or onboarding.
2. **Interactive Cards (`ui-kit`)**:
   - Crisp 1px borders, subtle radial gradient highlights on hover.
   - No opaque gray fills.
3. **Hero Typography (`Hero.tsx`)**:
   - Giant Anton headline with accent-highlighted keywords.
   - High-contrast value statement with warm off-white body text.

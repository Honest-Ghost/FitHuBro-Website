# FitHuBro Website — Implementation Plan

## 1. Overview & Objectives

This implementation plan details the steps required to align `D:\AR CodeHub\FitHuBro-Website` with the multi-tenant SaaS business strategy and establish the white-label configuration engine.

---

## 2. Phase-by-Phase Technical Plan

### Phase 1: SaaS Positioning Copy Updates
- **Objective**: Refine the website copy to emphasize FitHuBro's white-label gym operating system.
- **Files Affected**:
  - `src/components/content/owners.ts` (Update headlines, proof points, and ROI calculator copy to reflect the white-label gym platform).
  - `src/components/sections/Manifesto.tsx` (Position FitHuBro as the unified operating system replacing spreadsheets and disjointed apps).
- **Verification**: Run `pnpm dev` on website; verify new headlines and claims render cleanly.

### Phase 2: Tenant Configuration Layer
- **Objective**: Create the dynamic configuration loader supporting Mode A (FitHuBro public) and Mode B (White-Label).
- **Files Affected**:
  - `[NEW] src/lib/config/tenant-config.ts` (Define `GymWebsiteConfig` type and default FitHuBro config).
  - `[NEW] src/lib/config/tenants/spartan.json` (Demo customer config).
  - `[NEW] src/lib/config/get-tenant-config.ts` (Resolver function reading `NEXT_PUBLIC_TENANT_SLUG`).
- **Verification**: Build test asserting that passing a tenant slug returns correct gym name and logo.

### Phase 3: Dynamic Theme & Meta Tag Injection
- **Objective**: Update root layout and metadata to reflect the active gym tenant.
- **Files Affected**:
  - `src/app/layout.tsx` (Inject dynamic title, description, favicon, and CSS custom property root styles).
  - `src/app/globals.css` (Ensure `--color-accent` maps to theme tokens).
- **Verification**: Inspect DOM with custom tenant; confirm accent color and title update.

### Phase 4: Dynamic CTA & Deep-Link Wiring
- **Objective**: Ensure all buttons and CTAs route to the correct application endpoints.
- **Files Affected**:
  - `src/components/sections/Nav.tsx` (Update "Member Login" / "Start Free" CTA links).
  - `src/components/sections/Hero.tsx` (Connect hero buttons to gym app portal).
  - `src/components/sections/FinalCta.tsx` (Update closing CTA to link to pilot onboarding).
- **Verification**: Click CTAs; verify URLs correctly target the SaaS app domain or subdomain.

### Phase 5: Production Build Verification on Render
- **Objective**: Verify that Next.js static export / production build compiles without errors.
- **Files Affected**:
  - `next.config.ts` (Confirm build output configuration).
  - `package.json` (Verify `build` and `start` scripts).
- **Verification**: Run `pnpm build`; verify zero lint errors, TypeScript errors, or broken imports.

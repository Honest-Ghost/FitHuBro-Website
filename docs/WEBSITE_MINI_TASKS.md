# FitHuBro Website — Mini-Task Roadmap

This document outlines the granular engineering mini-tasks for the marketing and white-label website repository (`D:\AR CodeHub\FitHuBro-Website`).

---

### WEB-001: Update Gym Owner Copy to SaaS White-Label Narrative
- **Repository**: `D:\AR CodeHub\FitHuBro-Website`
- **Objective**: Align marketing content in `src/components/content/owners.ts` with the white-label B2B value proposition.
- **Business Reason**: Communicates the true product vision ("Your gym. Your brand. Your members.") to prospective gym owners.
- **Technical Reason**: Centralized content file update; ensures claims are accurate and audited.
- **Files Affected**: `src/components/content/owners.ts` (MODIFY)
- **Dependencies**: None
- **Expected Output**: Updated headlines, feature descriptions, and ROI calculator metrics.
- **Acceptance Criteria**: Mentions branded mobile app, QR check-in, UPI collection, and member retention; zero mention of unsupported hardware.
- **Validation**: Visual inspection in browser at `/` (owners persona).
- **Commit Checkpoint**: `feat(content): align gym owner copy with white-label SaaS offering`

---

### WEB-002: Create Tenant Configuration Schema & Resolver
- **Repository**: `D:\AR CodeHub\FitHuBro-Website`
- **Objective**: Build the TypeScript schema and resolver for white-label website configuration.
- **Business Reason**: Foundation for deploying white-label websites for gym customers without code forks.
- **Technical Reason**: Reads `NEXT_PUBLIC_TENANT_SLUG` environment variable or defaults to FitHuBro public profile.
- **Files Affected**: `src/lib/config/tenant-config.ts` (NEW), `src/lib/config/resolver.ts` (NEW)
- **Dependencies**: None
- **Expected Output**: Exported `getTenantConfig()` returning resolved gym configuration.
- **Acceptance Criteria**: Correctly falls back to FitHuBro brand if no tenant slug is configured.
- **Validation**: Unit test passing slug and asserting config output.
- **Commit Checkpoint**: `feat(config): add white-label tenant configuration schema and resolver`

---

### WEB-003: Implement Dynamic Theme Accent Injection
- **Repository**: `D:\AR CodeHub\FitHuBro-Website`
- **Objective**: Inject tenant's brand accent color into root CSS variables at build/render time.
- **Business Reason**: Allows gym websites to display their custom brand color (e.g., Gold, Emerald, Cyan) while keeping dark-mode polish.
- **Technical Reason**: Injects `--color-accent` style tag into `src/app/layout.tsx`.
- **Files Affected**: `src/app/layout.tsx` (MODIFY), `src/app/globals.css` (MODIFY)
- **Dependencies**: WEB-002
- **Expected Output**: Custom accent variable active on all Tailwind `text-accent`, `bg-accent` classes.
- **Acceptance Criteria**: Works with any valid hex color; does not break text contrast against `#050508`.
- **Validation**: Test with demo tenant `accentColor: "#10B981"`; verify green accent rendered.
- **Commit Checkpoint**: `feat(theme): implement dynamic CSS variable accent injection`

---

### WEB-004: Wire Navigation and Hero CTAs to SaaS Application
- **Repository**: `D:\AR CodeHub\FitHuBro-Website`
- **Objective**: Ensure all call-to-action buttons deep-link dynamically to the appropriate SaaS app routes.
- **Business Reason**: Converts website visitors into registered gym owners or logged-in gym members.
- **Technical Reason**: Uses `config.gym.appUrl` to construct links (`/portal/login`, `/register`, `/join`).
- **Files Affected**: `src/components/sections/Nav.tsx` (MODIFY), `src/components/sections/Hero.tsx` (MODIFY), `src/components/sections/FinalCta.tsx` (MODIFY)
- **Dependencies**: WEB-002
- **Expected Output**: All CTAs resolve to active app target based on Mode A vs Mode B.
- **Acceptance Criteria**: In Mode A, points to `app.fithubro.com`; in Mode B, points to `app.gymcustomer.com`.
- **Validation**: Click CTAs in both modes and verify destination URLs.
- **Commit Checkpoint**: `feat(nav): wire CTAs to tenant application URLs`

---

### WEB-005: Production Build and Static Export Validation
- **Repository**: `D:\AR CodeHub\FitHuBro-Website`
- **Objective**: Verify that the website builds cleanly and is ready for production deployment on Render Static Sites.
- **Business Reason**: Guarantees zero downtime or deployment failures when going live.
- **Technical Reason**: Execute `pnpm build` in `D:\AR CodeHub\FitHuBro-Website`.
- **Files Affected**: `package.json`, `next.config.ts`
- **Dependencies**: WEB-001 through WEB-004
- **Expected Output**: Clean Next.js static build output in `.next` or `out`.
- **Acceptance Criteria**: 0 TypeScript errors, 0 ESLint errors, successful static page generation.
- **Validation**: `pnpm build` completes with exit code 0.
- **Commit Checkpoint**: `chore(release): verify production build for Render deployment`

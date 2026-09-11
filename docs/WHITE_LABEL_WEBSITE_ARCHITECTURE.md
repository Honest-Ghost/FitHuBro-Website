# FitHuBro Website — White-Label Website Architecture

## 1. Architectural Philosophy: One Template, Infinite Gyms

The white-label website architecture enables deploying bespoke, branded marketing websites for individual gym clients (e.g., `ironforgegym.com`, `spartanfitness.in`) without maintaining separate source-code forks.

```
      ┌────────────────────────────────────────────────────────┐
      │            ONE NEXT.JS 15 CODEBASE                     │
      │       (D:\AR CodeHub\FitHuBro-Website)                  │
      └──────────────────────────┬─────────────────────────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       MODE A: FITHUBRO PUBLIC         MODE B: WHITE-LABEL GYM
      (fithubro.com / localhost)      (gymalpha.com / gymbeta.com)
                 │                               │
                 │                               │
         Default FitHuBro                Loads Gym Config
        Branding & Modules              (tenant-config.json)
                 │                               │
                 ▼                               ▼
      CTA: "Get FitHuBro SaaS"       CTA: "Member Login"
      Links to: app.fithubro.com     Links to: app.gymalpha.com
```

---

## 2. Tenant Configuration Schema: `tenant-config.json`

For customer-branded deployments (Mode B), the website reads from a structured JSON configuration file or environment variable (`NEXT_PUBLIC_TENANT_CONFIG`):

```typescript
export interface GymWebsiteConfig {
  mode: "FITHUBRO_PUBLIC" | "WHITE_LABEL";
  gym: {
    name: string;                // "Spartan Fitness Club"
    tagline: string;             // "Train Like a Spartan"
    slug: string;                // "spartan"
    domain: string;              // "spartanfitness.in"
    appUrl: string;              // "https://app.spartanfitness.in"
    logoUrl: string;             // "/tenants/spartan/logo.svg"
    faviconUrl: string;          // "/tenants/spartan/favicon.ico"
    contact: {
      phone: string;
      whatsapp: string;
      email: string;
      address: string;
      googleMapsUrl: string;
    };
    theme: {
      accentColor: string;       // "#E11D48" (Rose)
      fontDisplay?: string;      // Defaults to 'Anton'
      heroBackgroundImage: string;
    };
    socials: {
      instagram?: string;
      youtube?: string;
      facebook?: string;
    };
    featuresEnabled: {
      aiCoach: boolean;
      workouts: boolean;
      nutrition: boolean;
      trainerRoster: boolean;
    };
  };
}
```

---

## 3. Deployment Strategy: Minimum Operational Complexity

To adhere strictly to the **"Do Not Overengineer"** directive, we avoid complex multi-tenant edge middleware or external headless CMS dependencies for MVP.

### Selected Approach: Build-Time / Environment-Based Configuration
1. **Single Git Repository**: All updates and UI enhancements happen on `main` in `D:\AR CodeHub\FitHuBro-Website`.
2. **Deploying Mode A (FitHuBro Central)**:
   - Deployed on Render Static Site or Vercel connected to `fithubro.com`.
   - `NEXT_PUBLIC_TENANT_MODE=FITHUBRO_PUBLIC`.
3. **Deploying Mode B (Gym Customer Site)**:
   - When a gym signs up and purchases a custom domain, a new Render Static Site / Vercel project is created connected to the same GitHub repo, pointing to branch `main`.
   - Environment variable `NEXT_PUBLIC_TENANT_SLUG=spartan` (or custom domain).
   - Next.js statically renders the site with that gym's specific content and accent color.
   - Zero code duplication, zero database dependency for the website, instant deployment.

---

## 4. Connection Between Customer Website and Customer App

For a gym customer, the user journey is seamless:

```
1. Member visits Gym Website (e.g., spartanfitness.in)
2. Member clicks header CTA: "Member Portal" or "Member Login"
3. Browser navigates to: app.spartanfitness.in (or app.fithubro.com/g/spartan)
4. FitHuBro Application loads the Spartan theme, logo, and active entitlements
5. Member checks in or logs their workout
```

/**
 * Marketing copy for Gym Owners, centralised so claims are auditable.
 * Aligned strictly with FitHuBro SaaS product capabilities (CORE, GROWTH, FITNESS).
 */
import { APP_ROUTES } from '@/lib/config'

export const NAV_LINKS = [
  { label: 'Platform', href: '#product' },
  { label: 'Features', href: '#pillars' },
  { label: '3D Website', href: '#custom-website' },
  { label: 'Entitlements', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'QR Kiosk Attendance',
  'Memberships & Plans',
  'UPI Payments Ledger',
  'WhatsApp Receipts',
  'Leads CRM',
  'Executive Reports',
  'Trainer KYC',
  'Custom 3D Gym Web',
  'Tenant Isolation',
] as const

export interface Audience {
  id: 'members' | 'trainers' | 'owners'
  label: string
  eyebrow: string
  headline: string
  accent: string[]
  body: string
  ctaLabel: string
  ctaHref: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export const AUDIENCES: Audience[] = [
  {
    id: 'owners',
    label: 'I run a gym',
    eyebrow: 'Built for Gym Owners & Studios',
    headline: 'Run your gym.\nElevate your facility.',
    accent: ['Elevate'],
    body: 'Member management, 60-second rotating QR attendance, unified payments ledger with WhatsApp receipts, leads CRM, trainer verification, and custom 3D gym websites — all in one modern platform.',
    ctaLabel: 'Get Started',
    ctaHref: APP_ROUTES.ownerLogin,
    secondaryCtaLabel: 'See Capabilities',
    secondaryCtaHref: '#product',
  },
  {
    id: 'trainers',
    label: "I'm a trainer",
    eyebrow: 'Built for Personal Trainers',
    headline: 'Coach clients.\nBuild your brand.',
    accent: ['brand.'],
    body: 'Verified credentials, gym marketplace discoverability, assigned client management, and multi-week workout program authoring without paperwork clutter.',
    ctaLabel: 'Trainer Portal',
    ctaHref: APP_ROUTES.trainerLogin,
    secondaryCtaLabel: 'Explore Tools',
    secondaryCtaHref: '#product',
  },
  {
    id: 'members',
    label: "I'm a member",
    eyebrow: 'Built for Fitness Enthusiasts',
    headline: 'Lift smarter.\nCheck in instantly.',
    accent: ['instantly.'],
    body: 'Digital gym card, fraud-proof 60-second QR check-in, equipment-aware workout plans, and conversational AI coaching on your phone.',
    ctaLabel: 'Member Check-In',
    ctaHref: APP_ROUTES.memberCheckIn,
    secondaryCtaLabel: 'Meet AI Coach',
    secondaryCtaHref: '#coach',
  },
]

export interface Persona {
  id: string
  label: string
  title: string
  body: string
  points: string[]
  ctaLabel: string
  ctaHref: string
  assetLabel: string
  assetSize: string
  assetRatio: string
}

export const PERSONAS: Persona[] = [
  {
    id: 'members',
    label: 'Member Experience',
    title: 'A coach in their pocket, connected to your gym floor',
    body: 'Most fitness apps operate in isolation from the gym. FitHuBro connects directly to your facility — giving members a digital gym pass, instant 60-second QR check-in, equipment-aware workouts, and nutrition awareness.',
    points: [
      'Digital gym pass and fraud-proof 60s rotating QR kiosk check-in',
      'Daily workout routines tailored to your gym equipment',
      'Multimodal AI meal photo scan with Indian dietary targets',
      'Progressive overload tracking and exercise set logging',
    ],
    ctaLabel: 'Explore Member App',
    ctaHref: '/members',
    assetLabel: 'Member app — workout screen on a phone',
    assetSize: '1200 × 2400px · 9:18',
    assetRatio: '9 / 16',
  },
  {
    id: 'trainers',
    label: 'Trainer Coordination',
    title: 'Keep the coaching. Streamline client programming.',
    body: 'Empower your personal trainers to shine. Review qualifications to grant verified status, supervise assigned member rosters, and allow trainers to author and deliver multi-week progressive workout programs.',
    points: [
      'Trainer KYC verification and reviewed badges',
      'Public trainer marketplace directory for member discovery',
      'Assigned member roster and compliance monitoring',
      'Multi-week progressive workout program builder',
    ],
    ctaLabel: 'Explore Trainer Suite',
    ctaHref: '/trainers',
    assetLabel: 'Trainer view — client list and plan editor',
    assetSize: '2400 × 1800px · 4:3',
    assetRatio: '4 / 3',
  },
]

export interface Pillar {
  index: string
  title: string
  body: string
}

export const PILLARS: Pillar[] = [
  {
    index: '01',
    title: 'Front-Desk & Attendance',
    body: 'Eliminate fingerprint machine breakdowns. Deploy our fraud-proof 60-second rotating HMAC QR kiosk on any phone, tablet, or front-desk screen.',
  },
  {
    index: '02',
    title: 'Memberships & Payments',
    body: 'Manage member duration plans, log UPI/cash/card collections, send instant WhatsApp receipts, and organize incoming prospect leads with our CRM.',
  },
  {
    index: '03',
    title: 'Trainers & 3D Branding',
    body: 'Review trainer credentials, assign clients to coaches, and stand out in your city with an optional custom-branded interactive 3D gym website demo.',
  },
]

export interface TourStep {
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  assetLabel: string
  assetSize: string
}

export const PRODUCT_TOUR = {
  eyebrow: 'Facility Management',
  headline: 'Complete gym management. Zero bloat.',
  body: 'From front-desk attendance to executive revenue analytics, every tool is built specifically for modern fitness studios.',
  features: []
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: '01 Members & Plans',
    title: 'Member Management & Subscriptions',
    body: 'Organize active members, membership duration tiers, and digital gym passes. Surface expiring memberships automatically so renewals never slip away.',
    bullets: [
      'Member profiles & active duration plans',
      'Expiring-soon and at-risk member tracking',
      'Member digital gym cards & app access',
    ],
    assetLabel: 'Screenshot — members list with expiring-soon filter',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: '02 Attendance',
    title: '60-Second Rotating QR Kiosk Attendance',
    body: 'Members scan the dynamic HMAC QR code displayed on your front-desk tablet or PC. The code regenerates every 60 seconds to prevent screenshot sharing.',
    bullets: [
      'Cryptographic 60s rotating QR kiosk',
      'Runs on any tablet, phone, or desktop browser',
      'Real-time check-in ledger with zero hardware expense',
    ],
    assetLabel: 'Screen recording — QR check-in at the door',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: '03 Payments',
    title: 'Unified Ledger & WhatsApp Receipts',
    body: 'Log payments across UPI QR, cash, card, and bank transfers. Generate instant digital receipts and share them directly with members via WhatsApp deep links.',
    bullets: [
      'Fast UPI QR and manual payment logging',
      'Direct WhatsApp receipt sharing deep links',
      'Full transaction history with method breakdown',
    ],
    assetLabel: 'Screenshot — payment ledger and UPI records',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: '04 Leads CRM',
    title: 'Lead Pipeline & Conversion Tracking',
    body: 'Capture inquiries from walk-ins and referrals. Move prospective members through structured stages (Inquiry, Trial, Follow-Up, Converted) without losing contacts.',
    bullets: [
      'Visual CRM pipeline for gym prospects',
      'Trial scheduling and follow-up logging',
      'Conversion analytics to grow membership',
    ],
    assetLabel: 'Screenshot — leads pipeline view',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: '05 Trainers',
    title: 'Trainer Roster & KYC Verification',
    body: 'Review staff credentials and KYC documents before granting verified status. Supervise client assignments and multi-week workout program delivery.',
    bullets: [
      'Staff roster and trainer profile oversight',
      'Certification and identity KYC review',
      'Multi-week workout program authoring & assignment',
    ],
    assetLabel: 'Screenshot — trainer management dashboard',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: '06 Operations',
    title: 'Executive Reports & CSV Accounting',
    body: 'Get actionable visibility into monthly collections, peak check-in hours, trainer activity, and member retention with clean CSV exports for your accountant.',
    bullets: [
      'Monthly revenue and collections breakdown',
      'Daily attendance heatmaps and peak hours',
      '1-click CSV report exports for accounting',
    ],
    assetLabel: 'Screenshot — owner dashboard and reports',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: '07 3D Branding',
    title: 'Custom 3D Gym Website Sales Showcase',
    body: 'Elevate your gym above generic competitors with a bespoke interactive 3D website. Showcase your facility, equipment, and verified coaches with 3D barbell visuals and direct visitor inquiry.',
    bullets: [
      'Custom-branded 3D interactive hero experience',
      'Showcase your floor, equipment, and verified coaches',
      'Available as an enterprise sales package',
    ],
    assetLabel: 'Interactive demo — custom 3D gym website preview',
    assetSize: '2400 × 1350px · 16:9',
  },
]

export interface CompareRow {
  feature: string
  us: 'yes' | 'upcoming'
  them: 'yes' | 'no' | 'partial'
  note?: string
}

export const COMPARE = {
  headline: 'Straight comparison With legacy tools',
  us: 'FitHuBro',
  them: 'Typical gym software',
  rows: [
    { feature: 'Attendance, members and plans', us: 'yes', them: 'yes' },
    { feature: 'Rotating 60s HMAC QR Kiosk', us: 'yes', them: 'partial' },
    { feature: 'Unified UPI & Payment Ledger', us: 'yes', them: 'partial' },
    { feature: 'WhatsApp Receipt Sharing Deep Links', us: 'yes', them: 'partial' },
    { feature: 'Lead Management CRM Pipeline', us: 'yes', them: 'partial' },
    { feature: 'Executive Reports & CSV Export', us: 'yes', them: 'partial' },
    { feature: 'Trainer Management & Staff Roster', us: 'yes', them: 'no' },
    { feature: 'Trainer KYC Review & Verified Badges', us: 'yes', them: 'no' },
    { feature: 'Multi-Week Trainer Workout Builder', us: 'yes', them: 'no' },
    { feature: 'Multimodal AI Coach & Indian Nutrition', us: 'yes', them: 'no' },
    { feature: 'White-Label Gym Custom Branding', us: 'yes', them: 'no' },
    { feature: 'Custom 3D Gym Website Sales Demo', us: 'yes', them: 'no' },
    { feature: 'GST Invoicing', us: 'upcoming', them: 'yes' },
    { feature: 'WhatsApp API Automation', us: 'upcoming', them: 'yes' },
    { feature: 'Multi-Branch Management', us: 'upcoming', them: 'partial' },
  ] as CompareRow[]
}

export interface Tier {
  name: string
  entitlement: string
  cap: string
  featured?: boolean
  features: string[]
}

export const TIERS: Tier[] = [
  {
    name: 'Core',
    entitlement: 'Front Desk & Attendance',
    cap: 'Operational Foundation',
    features: [
      'Rotating 60-second HMAC QR kiosk attendance',
      'Members, memberships & duration plans',
      'Unified payment recording & UPI receipt logging',
      'Member digital gym card & check-in app',
      'WhatsApp receipt sharing deep links',
      'Strict multi-tenant database isolation',
    ],
  },
  {
    name: 'Growth',
    entitlement: 'CRM, Staff & Analytics',
    cap: 'Expansion Suite',
    featured: true,
    features: [
      'Everything in Core',
      'Leads management CRM pipeline & conversion stages',
      'Executive revenue & attendance reports',
      'One-click CSV report exports for accounting',
      'Trainer management & staff roster',
      'Trainer verification & KYC review',
      'Priority onboarding support',
    ],
  },
  {
    name: 'Fitness',
    entitlement: 'Full AI & Coaching Ecosystem',
    cap: 'Enterprise & 3D Web Suite',
    features: [
      'Everything in Growth',
      'Multi-week trainer workout program builder',
      'Direct program assignment to gym members',
      'Multimodal AI Coach (workouts & meal photo scan)',
      'Indian nutrition guidance & macronutrient targets',
      'White-label gym custom branding & themes',
      'Custom 3D gym website demo & sales showcase',
    ],
  },
]

export const FAQS = [
  {
    q: 'Do we need to buy expensive biometric hardware?',
    a: 'No. Check-in runs on your front-desk tablet, PC, or phone using secure rotating 60-second HMAC QR codes. Members scan with their phone. No biometric machines to purchase, wire, or service.',
  },
  {
    q: 'What happens when the gym WiFi drops?',
    a: 'Attendance check-in tokens are validated and cached so your front desk stays operational even during brief connectivity drops.',
  },
  {
    q: 'Can members pay by UPI and receive receipts?',
    a: 'Yes. FitHuBro records UPI payments, cash, card, and bank transfers, issues digital receipts, and provides one-click WhatsApp deep links to share receipts with members.',
  },
  {
    q: 'Can trainers manage client programs directly?',
    a: 'Yes. The dedicated Trainer Portal allows certified coaches to author multi-week workout programs and assign them directly to members at your facility.',
  },
  {
    q: 'Is our gym data isolated from other gyms?',
    a: 'Yes. FitHuBro is architected with strict multi-tenant scoping. Every gym’s members, plans, attendance logs, and financial records are completely private.',
  },
  {
    q: 'Can our gym get a custom 3D website?',
    a: 'Yes. We offer custom-branded interactive 3D website experiences as an enterprise sales package. Showcase your floor, equipment, trainers, and memberships with premium 3D visuals and lead capture.',
  },
  {
    q: 'How do we get started with FitHuBro?',
    a: 'Click Get Started to access the Owner Portal. Set up your gym profile, configure membership plans, and start checking in members.',
  },
] as const

export const MANIFESTO = {
  eyebrow: 'Operational Clarity',
  headline: 'Members who stop coming don’t cancel. They just stop coming — until renewals lapse.',
  body: [
    'Legacy gym software has spent years focusing only on the front desk and ignoring member engagement after sign-up.',
    'FitHuBro bridges operations and member progress. Manage attendance, plans, payments, and leads while your members stay engaged with workouts, progress tracking, and coaching.',
  ],
}

export const STATS = [
  { value: 0, prefix: '₹', suffix: '', label: 'Hardware Cost', note: 'No biometric machine required' },
  { value: 100, prefix: '', suffix: '%', label: 'Tenant Scoped', note: 'Strictly isolated gym records' },
  { value: 60, prefix: '', suffix: 's', label: 'Rotating QR', note: 'Cryptographic HMAC kiosk security' },
  { value: 3, prefix: '', suffix: '', label: 'Role Portals', note: 'Owner, Trainer, and Member apps' },
]

export const ROI = {
  headline: 'The ROI',
  description: 'Assuming a gym with 150 members and a ₹1,500 monthly fee, saving just a handful of at-risk members easily covers the software cost.',
  metrics: []
}

export const FINAL_CTA = {
  headline: 'Run your gym with FitHuBro. Modern operations.',
  body: 'The all-in-one SaaS platform for member management, QR attendance, payments, trainers, and fitness delivery.',
  buttonText: 'Get Started',
  buttonHref: APP_ROUTES.ownerLogin,
}

export const PRICING_SUBTITLE = 'Transparent feature-entitlement tiers structured around your operational scale. No fake locks, no biometric hardware required.'

/**
 * Marketing copy, centralised so claims are auditable in one file.
 * Aligned with FitHuBro SaaS product capabilities (CORE, GROWTH, FITNESS).
 */
import { APP_ROUTES } from '@/lib/config'

export const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'AI Coach', href: '#pillars' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'Attendance',
  'Memberships',
  'Payments',
  'Leads CRM',
  'Reports',
  'AI Workouts',
  'Nutrition',
  'Trainers',
  'White-Label',
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
}

export const AUDIENCES: Audience[] = [
  {
    id: 'owners',
    label: 'I run a gym',
    eyebrow: 'Built for Gym Owners',
    headline: 'Run the gym.\nGrow your revenue.',
    accent: ['Grow'],
    body: 'Memberships, QR attendance, payments, and lead management in one place — plus AI workout delivery for your members and full trainer management. The register, spreadsheet, and manual follow-ups, replaced.',
    ctaLabel: 'Get Started',
    ctaHref: APP_ROUTES.ownerLogin,
  },
  {
    id: 'trainers',
    label: "I'm a trainer",
    eyebrow: 'Coach more clients',
    headline: 'Coach ten.\nOr a hundred.',
    accent: ['hundred.'],
    body: 'Plan-writing, client tracking, and assigned workout delivery stop eating your evenings. Deliver customized programs, monitor client compliance, and build your reputation.',
    ctaLabel: 'Trainer Portal',
    ctaHref: APP_ROUTES.trainerLogin,
  },
  {
    id: 'members',
    label: "I'm a member",
    eyebrow: 'Train with a plan',
    headline: 'Lift heavier.\nCheck in instantly.',
    accent: ['instantly.'],
    body: 'Digital gym card, daily QR check-in, personalized workout plans, and AI coaching right on your phone — connected directly with your gym and trainer.',
    ctaLabel: 'Member Check-In',
    ctaHref: APP_ROUTES.memberCheckIn,
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
    label: 'For members',
    title: 'A coach in your pocket, connected to your gym',
    body: 'Most fitness apps have no idea which gym you go to. FitHuBro connects directly to your home gym floor — with your digital membership card, instant QR check-in, and workout logs.',
    points: [
      'Digital gym pass and instant QR kiosk check-in',
      'Weekly workout plans adapted to your level',
      'Indian food targets — roti, dal, paneer, curd, rice',
      'Progressive overload and workout history',
    ],
    ctaLabel: 'Open Member App',
    ctaHref: APP_ROUTES.memberCheckIn,
    assetLabel: 'Member app — workout screen on a phone',
    assetSize: '1200 × 2400px · 9:18',
    assetRatio: '9 / 16',
  },
  {
    id: 'trainers',
    label: 'For trainers',
    title: 'Keep the coaching. Streamline client delivery.',
    body: 'You already know what your clients need this week. What costs you the evening is manual tracking, chasing compliance, and typing out routines.',
    points: [
      'Client workout plans drafted and edited with ease',
      'Track client attendance and logged sets',
      'Public verified trainer profile on the marketplace',
      'KYC verification and verified trainer status',
    ],
    ctaLabel: 'Trainer Portal',
    ctaHref: APP_ROUTES.trainerLogin,
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
    title: 'Training Delivery',
    body: 'Structured workout routines built around member goals and gym equipment. Trainers can create custom programs, and members log sets with progressive overload.',
  },
  {
    index: '02',
    title: 'Nutrition Targets',
    body: 'Targets in foods your members actually eat — roti, dal, paneer, curd, rice. Indian portions and meal tracking so dietary habits stay consistent.',
  },
  {
    index: '03',
    title: 'Attendance & Retention',
    body: 'Daily rotating QR check-in, kiosk scanning, and real-time attendance logs so you spot at-risk members before they churn.',
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

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: 'Front desk',
    title: 'Check-in that takes one second',
    body: 'Members scan the rotating QR code at the door or on the kiosk and they are instantly marked present. The code updates constantly so screenshot sharing is impossible.',
    bullets: [
      'Rotating kiosk QR — prevents fraudulent check-ins',
      'Works seamlessly on any tablet or phone',
      'Real-time check-in ledger and member history',
    ],
    assetLabel: 'Screen recording — QR check-in at the door',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: 'Memberships & Leads',
    title: 'Every renewal and lead, organized',
    body: 'Members, membership plans, payment history, and incoming leads in one dashboard. Expiries surface ahead of time, while renewal conversations are easy to have.',
    bullets: [
      'Expiring-soon and at-risk member alerts',
      'Full payment history, UPI records, and receipts',
      'Lead management CRM with conversion tracking',
    ],
    assetLabel: 'Screenshot — members list with expiring-soon filter',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: 'Member app',
    title: 'Your gym, in their pocket',
    body: 'Members access their digital gym card, workout routines, and habit trackers. Installs straight from the browser as a modern PWA with zero app store friction.',
    bullets: [
      'Digital gym pass for instant door entry',
      'Workout tracking with set and weight history',
      'Nutrition guidelines and progress metrics',
    ],
    assetLabel: 'Screen recording — member app on a phone',
    assetSize: '1200 × 2400px · 9:18',
  },
  {
    eyebrow: 'Owner view',
    title: 'Business reports and insights',
    body: 'Monthly collections, payment method breakdown, attendance trends, and lead conversions in clean executive summaries with CSV export.',
    bullets: [
      'Revenue and collections breakdown (UPI, card, cash)',
      'Daily attendance trends and peak hours',
      'One-click CSV report exports for accounting',
    ],
    assetLabel: 'Screenshot — owner dashboard and reports',
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
  headline: 'Including where we stand',
  us: 'FitHuBro',
  them: 'Typical gym software',
  rows: [
    { feature: 'Attendance, members and plans', us: 'yes', them: 'yes' },
    { feature: 'QR Kiosk & Digital Gym Card', us: 'yes', them: 'partial' },
    { feature: 'UPI & Payment Recording', us: 'yes', them: 'partial' },
    { feature: 'Lead Management CRM', us: 'yes', them: 'partial' },
    { feature: 'Executive Reports & CSV Export', us: 'yes', them: 'partial' },
    { feature: 'Trainer Management & Roster', us: 'yes', them: 'no' },
    { feature: 'Trainer Workout Program Builder', us: 'yes', them: 'no' },
    { feature: 'AI Workout & Nutrition Plans', us: 'yes', them: 'no' },
    { feature: 'White-Label Gym Custom Branding', us: 'yes', them: 'no' },
    { feature: 'Public, Transparent Pricing', us: 'yes', them: 'no' },
    { feature: 'GST Invoicing', us: 'upcoming', them: 'yes' },
    { feature: 'WhatsApp Automation', us: 'upcoming', them: 'yes' },
    { feature: 'Multi-Branch Management', us: 'upcoming', them: 'partial' },
  ] as CompareRow[]
}

export interface Tier {
  name: string
  price: number
  cap: string
  featured?: boolean
  features: string[]
}

export const TIERS: Tier[] = [
  {
    name: 'Starter',
    price: 999,
    cap: 'Core / Up to 100 members',
    features: [
      'QR attendance kiosk & check-in',
      'Members, memberships and plans',
      'Payment recording & UPI receipt logging',
      'Member digital gym card & app access',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: 1999,
    cap: 'Growth / Up to 300 members',
    featured: true,
    features: [
      'Everything in Starter',
      'Lead Management CRM & conversions',
      'Executive revenue & attendance reports',
      'Trainer management & staff roster',
      'Trainer verification & KYC status',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 3999,
    cap: 'Fitness Suite / Unlimited members',
    features: [
      'Everything in Pro',
      'Trainer workout program builder & delivery',
      'AI Fitness Coach & nutrition guidance',
      'Member community & leaderboards',
      'Custom white-label gym branding',
      'Multi-branch management (Coming Soon)',
      'Dedicated onboarding call',
    ],
  },
]

export const FAQS = [
  {
    q: 'Do we need to buy expensive biometric hardware?',
    a: 'No. Check-in runs on your members’ phones and your front desk tablet using secure rotating QR codes. No hardware to purchase, install, or repair.',
  },
  {
    q: 'What happens when the gym WiFi drops?',
    a: 'Check-in data is cached and queued on the client and syncs automatically as soon as the connection is restored.',
  },
  {
    q: 'Can members pay by UPI and get receipts?',
    a: 'Yes. FitHuBro tracks UPI payments, card, cash, and bank transfers, issues digital receipts, and displays clear payment breakdowns.',
  },
  {
    q: 'Can trainers manage client programs directly?',
    a: 'Yes. The dedicated Trainer Portal allows certified trainers to build multi-week workout programs and assign them directly to gym members.',
  },
  {
    q: 'Is our gym data isolated from other gyms?',
    a: 'Yes. FitHuBro is a strict multi-tenant SaaS. Every gym’s members, plans, attendance records, and payments are strictly scoped with tenant isolation.',
  },
  {
    q: 'How do we get started with FitHuBro?',
    a: 'Click Get Started or contact our team on WhatsApp. Your gym tenant account is provisioned with your custom slug and branding.',
  },
] as const

export const MANIFESTO = {
  headline: 'Members who stop coming don’t cancel. They just stop coming — and you find out months later when renewals lapse.',
  body: [
    'Legacy gym software has spent years focusing only on the front desk and ignoring member engagement after sign-up.',
    'FitHuBro bridges the gap between operations and engagement. Manage attendance, plans, and leads while delivering workouts and tracking progress so members stay consistent.',
  ],
}

export const STATS = [
  { value: 0, prefix: '₹', suffix: '', label: 'Hardware Cost', note: 'No biometric machine required' },
  { value: 100, prefix: '', suffix: '%', label: 'Tenant Scoped', note: 'Isolated gym database records' },
  { value: 24, prefix: '', suffix: 'h', label: 'QR Security', note: 'Rotating check-in kiosk codes' },
  { value: 3, prefix: '', suffix: '', label: 'Role Portals', note: 'Owner, Trainer, and Member' },
]

export const ROI = {
  headline: 'The ROI',
  description: 'Assuming a gym with 150 members and a ₹1,500 monthly fee, saving just a handful of at-risk members easily covers the software cost.',
  metrics: []
}

export const FINAL_CTA = {
  headline: 'Run your gym with FitHuBro.',
  body: 'The all-in-one SaaS platform for member management, QR attendance, payments, trainers, and fitness delivery.',
  buttonText: 'Get Started',
  buttonHref: APP_ROUTES.ownerLogin,
}

export const PRICING_SUBTITLE = 'One transparent price per gym. No setup fees, no expensive hardware, no annual lock-in.'

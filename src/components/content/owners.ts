/**
 * Marketing copy, centralised so claims are auditable in one file.
 *
 * Rule: nothing is described as shipped unless it is. GST invoicing, UPI
 * collection and WhatsApp reminders are Phase 2.6 — they carry `upcoming: true`
 * and render as "In build", never as a feature we already have.
 */

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
  'Renewals',
  'AI Workouts',
  'Nutrition',
  'Recovery',
  'Form Check',
  'Reports',
] as const

export interface Audience {
  id: 'members' | 'trainers' | 'owners'
  /** Segmented-control label. */
  label: string
  eyebrow: string
  /** `\n` forces a line break in the headline. */
  headline: string
  /** Words rendered in the brand slot. */
  accent: string[]
  body: string
  ctaLabel: string
  ctaHref: string
}

/**
 * The hero speaks to three people who share one login. Order puts members
 * first — they outnumber the other two by a factor of hundreds.
 */
export const AUDIENCES: Audience[] = [
  {
    id: 'members',
    label: "I'm a member",
    eyebrow: 'Train with a plan',
    headline: 'Lift heavier.\nLook the part.',
    accent: ['heavier.'],
    body: 'Your workout, your food and your recovery in one app — built around your goal, your kitchen and the equipment on your gym floor. It adjusts every week from what you actually logged.',
    ctaLabel: 'Start training free',
    ctaHref: '/join/home',
  },
  {
    id: 'trainers',
    label: "I'm a trainer",
    eyebrow: 'Coach more people',
    headline: 'Coach ten.\nOr a hundred.',
    accent: ['hundred.'],
    body: 'The plan-writing, the check-ins and the progress photos stop eating your evenings. You keep the judgement calls and the relationship; the busywork goes to the app.',
    ctaLabel: 'Apply as a trainer',
    ctaHref: '/join/trainer',
  },
  {
    id: 'owners',
    label: 'I run a gym',
    eyebrow: 'Built for Indian gyms',
    headline: 'Run the gym.\nKeep the members.',
    accent: ['Keep'],
    body: 'Attendance, memberships and payments in one place — plus an AI coach that keeps training your members on the days they don’t show up. The register, the spreadsheet and the WhatsApp group, replaced.',
    ctaLabel: 'Start free',
    ctaHref: '/register',
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

/** The two audiences the rest of the page under-serves, given their own section. */
export const PERSONAS: Persona[] = [
  {
    id: 'members',
    label: 'For members',
    title: 'A coach in your pocket, in the gym you already pay for',
    body: 'Most fitness apps have no idea which gym you go to. This one does — so the plan is written around the racks, machines and dumbbells actually on your floor.',
    points: [
      'Weekly plan that adapts to what you logged',
      'Indian food targets — roti, dal, paneer, curd, rice',
      'Camera form check on squat, bench and deadlift',
      'Measurements and a transformation timeline',
    ],
    ctaLabel: 'Start training free',
    ctaHref: '/join/home',
    assetLabel: 'Member app — workout screen on a phone',
    assetSize: '1200 × 2400px · 9:18',
    assetRatio: '9 / 16',
  },
  {
    id: 'trainers',
    label: 'For trainers',
    title: 'Keep the coaching. Lose the paperwork',
    body: 'You already know what your client needs this week. What costs you the evening is typing it out, chasing the food log and remembering who missed leg day.',
    points: [
      'Client plans drafted for you, edited by you',
      'Attendance and logged sets, without asking',
      'One profile members can find you through',
      'Work with a gym, or bring your own clients',
    ],
    ctaLabel: 'Apply as a trainer',
    ctaHref: '/join/trainer',
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
    title: 'Training',
    body: 'A workout plan built around the member’s goal, experience and the equipment your floor actually has. It adapts each week from what they logged, not from a template.',
  },
  {
    index: '02',
    title: 'Nutrition',
    body: 'Targets in food your members already eat — roti, dal, paneer, curd, rice. Indian portions and Indian meal timing, so the plan survives contact with a real kitchen.',
  },
  {
    index: '03',
    title: 'Recovery',
    body: 'Sleep, soreness and load tracked together, so a member who is under-recovered gets a lighter day instead of the injury that ends their membership.',
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
    body: 'A member scans the day’s QR code at the door and they’re marked present. The code is generated fresh every night, so yesterday’s screenshot is worthless.',
    bullets: [
      'Rotating daily QR — screenshots don’t work',
      'Keeps recording when the gym WiFi drops',
      'Works on the phone already in your pocket',
    ],
    assetLabel: 'Screen recording — QR check-in at the door',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: 'Memberships',
    title: 'Every expiry, before it costs you',
    body: 'Members, plans and payment history in one list. Expiries surface days ahead of time, while a renewal conversation is still easy to have.',
    bullets: [
      'Expiring-soon and at-risk lists, updated nightly',
      'Full payment history and receipts per member',
      'Freeze, extend or transfer without a spreadsheet',
    ],
    assetLabel: 'Screenshot — members list with expiring-soon filter',
    assetSize: '2400 × 1350px · 16:9',
  },
  {
    eyebrow: 'Member app',
    title: 'Your gym, in their pocket',
    body: 'Members get their plan, their progress and their AI coach under the same login they use to check in. Installs from the browser — nothing to publish to an app store.',
    bullets: [
      'Workout, nutrition and recovery in one place',
      'Body measurements and transformation timeline',
      'Camera-based form check on key lifts',
    ],
    assetLabel: 'Screen recording — member app on a phone',
    assetSize: '1200 × 2400px · 9:18',
  },
  {
    eyebrow: 'Owner view',
    title: 'The numbers, without the maths',
    body: 'Collections, attendance trends and who has gone quiet. The report you currently rebuild by hand at the end of every month.',
    bullets: [
      'Revenue and collection totals per month',
      'Attendance patterns by day and hour',
      'Churn risk from real behaviour, not guesswork',
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
  headline: 'Including where we’re behind',
  us: 'FitHuBro',
  them: 'Typical gym software',
  rows: [
    { feature: 'Attendance, members and payments', us: 'yes', them: 'yes' },
    { feature: 'Owner reports and churn risk', us: 'yes', them: 'partial' },
    { feature: 'Lead Management CRM', us: 'upcoming', them: 'partial' },
    { feature: 'AI workout plans that adapt weekly', us: 'yes', them: 'no' },
    { feature: 'India-tuned nutrition targets', us: 'yes', them: 'no' },
    { feature: 'Recovery and load tracking', us: 'yes', them: 'no' },
    { feature: 'Camera form check on key lifts', us: 'yes', them: 'no' },
    { feature: 'Installable member app', us: 'yes', them: 'partial' },
    { feature: 'Public, self-serve pricing', us: 'yes', them: 'no' },
    { feature: 'GST invoicing', us: 'upcoming', them: 'yes' },
    { feature: 'UPI collection', us: 'upcoming', them: 'yes' },
    { feature: 'WhatsApp reminders', us: 'upcoming', them: 'yes' },
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
    cap: 'Up to 100 members',
    features: [
      'QR attendance and offline check-in',
      'Members, plans and payments',
      'Member app with AI coach',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: 1999,
    cap: 'Up to 300 members',
    featured: true,
    features: [
      'Everything in Starter',
      'Owner reports and churn risk lists',
      'Body measurements and progress tracker',
      'Referral programme and rewards',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 3999,
    cap: 'Multi-branch',
    features: [
      'Everything in Pro',
      'Multiple branches under one login',
      'Per-branch staff roles and reporting',
      'Custom branding',
      'Onboarding call',
    ],
  },
]

export const FAQS = [
  {
    q: 'Do we need to buy a biometric machine?',
    a: 'No. Check-in runs on the phone your members already carry — they scan the day’s QR code at the door. No hardware to buy, install or repair.',
  },
  {
    q: 'What happens when the gym WiFi drops?',
    a: 'Check-ins keep recording on the device and sync as soon as the connection returns. Nobody stands at the door waiting for a page to load.',
  },
  {
    q: 'Can members pay by UPI, and do we get GST invoices?',
    a: 'Both are in build and land in the next release. Today you record payments and issue receipts inside FitHuBro; UPI collection and GST-format invoicing are the current priority.',
  },
  {
    q: 'Is the AI coach a chatbot?',
    a: 'No. It generates and adjusts a real plan — training, nutrition and recovery — from what the member logs. It works alongside your trainers rather than replacing them.',
  },
  {
    q: 'Is our member data separated from other gyms?',
    a: 'Yes. Every record is scoped to your gym and enforced at the database level, not just in the app. Staff at another gym cannot read your members.',
  },
  {
    q: 'How long does it take to move our existing members over?',
    a: 'An afternoon for a typical single-branch gym. Members can also self-register from a link specific to your gym, which does most of the data entry for you.',
  },
] as const

export const MANIFESTO = { headline: 'A member who stops coming doesn’t cancel. They just stop coming — and you find out sixty days later, when the renewal never lands.', body: ['Gym software has spent a decade getting good at the front desk and ignoring everything after it. It records that someone walked in. It has nothing to say about whether they’re making progress, and no idea they were about to quit.', 'So we built both halves into one login. Your staff run the floor. The AI coach handles the six days a week your trainers can’t. And the moment a member goes quiet, you know — while there’s still time to do something about it.'] };
export const STATS = [
  { value: 0, prefix: '₹', suffix: '', label: 'Hardware to buy', note: 'No biometric machine' },
  { value: 3, prefix: '', suffix: '', label: 'Coaching pillars', note: 'Training, nutrition, recovery' },
  { value: 24, prefix: '', suffix: 'h', label: 'QR rotation', note: 'Screenshots expire nightly' },
  { value: 100, prefix: '', suffix: '%', label: 'Offline check-in', note: 'Syncs when WiFi returns' },
]

export const ROI = {
  headline: 'The ROI',
  description: 'Assuming a gym with 150 members and a ₹1,500 monthly fee, FitHuBro only needs to save a handful of at-risk members a year to pay for itself.',
  metrics: []
}

export const FINAL_CTA = {
  headline: 'Free while we build.',
  body: 'The app is live in production but still in active development. Early adopters who join now lock in free access while we build out the next phase.',
  buttonText: 'Start using FitHuBro',
  buttonHref: '/register'
}

export const PRICING_SUBTITLE = 'One price per gym, not per member. No setup fee, no hardware, no annual lock-in. Cancel whenever.'

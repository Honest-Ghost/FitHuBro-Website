import { APP_ROUTES } from '@/lib/config'
import type { CompareRow, TourStep, Pillar, Persona as ContentPersona } from './owners'

export const NAV_LINKS = [
  { label: 'Overview', href: '#pillars' },
  { label: 'Programs', href: '#product' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'Verified Credentials',
  'KYC Badges',
  'Client Roster',
  'Program Builder',
  'Workout Assignment',
  'Trainer Directory',
] as const

export const AUDIENCES = [
  {
    id: 'trainers',
    label: "I'm a fitness trainer",
    eyebrow: 'BUILT FOR FITNESS PROFESSIONALS',
    headline: 'Build your brand.\nCoach with clarity.',
    accent: ['clarity.'],
    body: 'Complete KYC verification to earn your verified badge. Showcase your qualifications on the gym trainer directory, organize your client roster, and author multi-week training programs.',
    ctaLabel: 'Trainer Portal',
    ctaHref: APP_ROUTES.trainerLogin,
    secondaryCtaLabel: 'See Capabilities',
    secondaryCtaHref: '#pillars',
  }
]

export const PERSONAS: ContentPersona[] = [
  {
    id: 'programs',
    label: 'PROGRAM ARCHITECTURE',
    title: 'Structure programs. Assign in seconds.',
    body: 'Stop emailing spreadsheets and texting routines. Use the program builder to draft multi-week training schedules, complete with set ranges, rest intervals, and exercise alternatives, then assign them directly to your affiliated gym clients.',
    points: [
      'Multi-week workout program authoring',
      'Direct program assignment to assigned clients',
      'Exercise library with movement guidance',
      'Client workout logging and compliance tracking',
    ],
    ctaLabel: 'Open Trainer Portal',
    ctaHref: APP_ROUTES.trainerLogin,
    assetLabel: 'Program Builder',
    assetSize: '2400 × 1800px · 4:3',
    assetRatio: '4 / 3'
  }
]

export const MANIFESTO = {
  eyebrow: 'Professional Coaching',
  headline: 'Spend time coaching.\nNot chasing paperwork.',
  body: [
    'Great coaching happens on the gym floor — correcting form, driving intensity, and keeping clients accountable.',
    'FitHuBro gives verified fitness trainers structured tools to build their brand, organize their assigned client roster, and deliver customized workout programs through partnered gym facilities.'
  ]
}

export const PILLARS: Pillar[] = [
  {
    index: '01',
    title: 'KYC & Verified Badge',
    body: 'Submit your professional certifications and identity verification for gym review. Stand out with an authentic Verified Trainer badge on the gym directory.'
  },
  {
    index: '02',
    title: 'Client Roster Management',
    body: 'Track your assigned gym clients in one clean interface. View their current workout program, attendance patterns, and logged exercise performance.'
  },
  {
    index: '03',
    title: 'Structured Program Builder',
    body: 'Create multi-week progressive training programs. Author exercise sets, rep targets, and rest periods with seamless client assignment.'
  },
]

export const PRODUCT_TOUR = {
  eyebrow: 'Trainer Suite',
  headline: 'Tools built for personal trainers',
  body: 'Manage your verified profile, client roster, and training programs from a focused workspace.',
  features: []
}

export const STATS = [
  { value: 100, prefix: '', suffix: '%', label: 'Verified', note: 'Owner-reviewed certifications' },
  { value: 0, prefix: '', suffix: '', label: 'Admin Friction', note: 'Structured digital delivery' },
]

export const ROI = {
  headline: 'Professional efficiency.',
  description: 'Deliver structured routines and track assigned clients without spreadsheet clutter.',
  metrics: []
}

export const COMPARE = {
  headline: 'Why FitHuBro for Trainers?',
  us: 'FitHuBro',
  them: 'Manual Methods',
  rows: [
    { feature: 'Verified badge backed by reviewed credentials', us: 'yes', them: 'no' },
    { feature: 'Structured multi-week program authoring', us: 'yes', them: 'partial' },
    { feature: 'Seamless gym client affiliation and assignment', us: 'yes', them: 'no' },
  ] as CompareRow[]
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: 'Verification',
    title: 'Professional KYC & Vetting',
    body: 'Upload your fitness certifications, qualifications, and identity documents. Gym owners review and verify your profile before you are featured on the gym floor.',
    bullets: ['Certification upload & verification', 'Gym-reviewed professional badge', 'Marketplace directory portfolio'],
    assetLabel: 'Trainer Verification screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Programs',
    title: 'Structured Program Delivery',
    body: 'Author progressive multi-week training programs with specific sets, target reps, and exercise notes. Assign programs directly to clients at your partnered facility.',
    bullets: ['Multi-week program builder', 'Direct client assignment', 'Integrated movement library'],
    assetLabel: 'Program editor screen',
    assetSize: '1200 × 2400px · 9:18'
  },
]

export const TIERS: import('./owners').Tier[] = []
export const PRICING_SUBTITLE = ''

export const FAQS = [
  {
    q: 'How do I become a Verified Trainer?',
    a: 'Sign up in the trainer portal, upload your fitness credentials, and submit identity verification. The affiliated gym owner reviews your qualifications before granting the Verified Trainer badge.'
  },
  {
    q: 'Can I assign custom workout routines to my clients?',
    a: 'Yes. You can build comprehensive multi-week workout programs with specific exercise splits, rep ranges, and rest intervals, and assign them directly to your clients.'
  },
  {
    q: 'How does client discovery work?',
    a: 'Members at your affiliated gym can view verified trainer profiles on the gym marketplace directory, including your qualifications, specialties, and bio.'
  }
]

export const FINAL_CTA = {
  headline: 'Coach with confidence. Get verified.',
  body: 'Join verified trainers delivering structured programs and building their professional reputation.',
  buttonText: 'Access Trainer Portal',
  buttonHref: APP_ROUTES.trainerLogin
}

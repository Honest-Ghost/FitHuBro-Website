import { APP_ROUTES } from '@/lib/config'
import type { CompareRow, TourStep, Pillar, Persona as ContentPersona } from './owners'

export const NAV_LINKS = [
  { label: 'Overview', href: '#pillars' },
  { label: 'Capabilities', href: '#product' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'Trainer Profile',
  'KYC Verification',
  'Verified Badge',
  'Marketplace Directory',
  'Client Roster',
  'Program Builder',
  'Workout Assignment',
  'Gym Affiliation',
] as const

export const AUDIENCES = [
  {
    id: 'trainers',
    label: "I'm a fitness trainer",
    eyebrow: 'BUILT FOR FITNESS PROFESSIONALS',
    headline: 'Build your profile.\nCoach with clarity.',
    accent: ['clarity.'],
    body: 'Complete KYC verification to earn your verified badge. Showcase your qualifications on the gym trainer directory, organize your client roster, and author structured multi-week training programs.',
    ctaLabel: 'Trainer Portal',
    ctaHref: APP_ROUTES.trainerLogin,
    secondaryCtaLabel: 'Explore Capabilities',
    secondaryCtaHref: '#product',
  }
]

export const PERSONAS: ContentPersona[] = [
  {
    id: 'programs',
    label: 'PROGRAM ARCHITECTURE',
    title: 'Structure programs. Assign in seconds.',
    body: 'Stop emailing spreadsheets and texting routines. Use the program builder to draft multi-week training schedules, complete with set ranges, rest intervals, and exercise alternatives, then assign them directly to your affiliated gym clients.',
    points: [
      'Multi-week progressive workout program authoring',
      'Direct program assignment to assigned gym clients',
      'Exercise library with movement guidance & cues',
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
    'FitHuBro gives verified fitness trainers structured tools to build their profile, organize their assigned client roster, and deliver customized workout programs through partnered gym facilities.'
  ]
}

export const PILLARS: Pillar[] = [
  {
    index: '01',
    title: 'Profile & Verification',
    body: 'Set up your credentials, specialties, and experience. Submit KYC verification to earn the authentic gym-reviewed Verified Trainer badge.'
  },
  {
    index: '02',
    title: 'Client Roster Management',
    body: 'Keep all your assigned gym clients organized in one clean interface. Monitor their workout check-ins, logged exercises, and training consistency.'
  },
  {
    index: '03',
    title: 'Structured Program Builder',
    body: 'Create multi-week progressive training programs. Author exercise sets, rep targets, and rest periods with seamless client assignment.'
  },
]

export const PRODUCT_TOUR = {
  eyebrow: 'Trainer Workflow',
  headline: 'Five steps of professional coaching delivery',
  body: 'From verified credentials to structured multi-week program authoring, everything connects through your partnered gym.',
  features: []
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: '01 Profile',
    title: 'Build Your Professional Profile',
    body: 'Set up your trainer bio, qualifications, training disciplines, and fitness background. Establish a structured digital presence connected to your gym.',
    bullets: ['Professional coaching bio & specialties', 'Certification details & credentials', 'Affiliated gym presence'],
    assetLabel: 'Trainer Profile screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: '02 Verification',
    title: 'Submit KYC & Earn Verified Status',
    body: 'Submit your fitness certificates and identity proof for gym owner review. Earn the official Verified Trainer badge that distinguishes qualified coaches.',
    bullets: ['Owner-reviewed certification verification', 'Verified Trainer trust badge', 'Transparent professional vetting'],
    assetLabel: 'Trainer Verification screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: '03 Discovery',
    title: 'Get Discovered on the Gym Directory',
    body: 'Become discoverable on the gym’s trainer marketplace directory where members explore verified coaches, view specializations, and connect for training.',
    bullets: ['Public gym trainer marketplace directory', 'Highlight specialties (strength, hypertrophy, mobility)', 'Direct member discoverability'],
    assetLabel: 'Marketplace directory screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: '04 Clients',
    title: 'Manage Your Client Roster',
    body: 'Keep all your assigned gym clients organized in one clean interface. Monitor their workout check-ins, logged exercises, and training consistency.',
    bullets: ['Assigned client roster management', 'Track attendance & exercise logs', 'Monitor client adherence and momentum'],
    assetLabel: 'Client roster screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: '05 Programs',
    title: 'Build & Assign Workout Programs',
    body: 'Draft multi-week training programs with customized splits, set targets, rep ranges, and rest intervals. Assign them directly to your clients.',
    bullets: ['Multi-week workout program authoring', 'Direct client program assignment', 'Set, rep, and progressive overload tracking'],
    assetLabel: 'Program editor screen',
    assetSize: '1200 × 2400px · 9:18'
  },
]

export const STATS = [
  { value: 100, prefix: '', suffix: '%', label: 'Verified', note: 'Owner-reviewed certifications' },
  { value: 0, prefix: '', suffix: '', label: 'Paperwork Hassle', note: 'Structured digital delivery' },
  { value: 5, prefix: '', suffix: ' Steps', label: 'Simple Workflow', note: 'Profile to program delivery' },
  { value: 24, prefix: '', suffix: '/7', label: 'Client Logs', note: 'Transparent exercise tracking' },
]

export const ROI = {
  headline: 'Professional efficiency.',
  description: 'Deliver structured routines and track assigned clients without spreadsheet clutter.',
  metrics: []
}

export const COMPARE = {
  headline: 'Why FitHuBro For trainers?',
  us: 'FitHuBro',
  them: 'Manual Methods',
  rows: [
    { feature: 'Verified badge backed by reviewed credentials', us: 'yes', them: 'no' },
    { feature: 'Gym marketplace discovery directory', us: 'yes', them: 'no' },
    { feature: 'Structured multi-week program authoring', us: 'yes', them: 'partial' },
    { feature: 'Direct gym client affiliation & assignment', us: 'yes', them: 'no' },
    { feature: 'Transparent client workout logging & compliance', us: 'yes', them: 'partial' },
  ] as CompareRow[]
}

export const TIERS: import('./owners').Tier[] = []
export const PRICING_SUBTITLE = ''

export const FAQS = [
  {
    q: 'How do I become a Verified Trainer?',
    a: 'Sign up in the trainer portal, upload your fitness credentials, and submit identity verification. The affiliated gym owner reviews your qualifications before granting the Verified Trainer badge.'
  },
  {
    q: 'How does member discovery work?',
    a: 'Members at your affiliated gym can browse verified trainer profiles on the gym directory, exploring specializations, experience, and qualifications.'
  },
  {
    q: 'Can I assign custom workout routines to my clients?',
    a: 'Yes. You can author structured multi-week training programs with specific exercises, sets, reps, and rest intervals, and assign them directly to your clients.'
  },
  {
    q: 'Does FitHuBro handle client billing or payments for trainers?',
    a: 'No. FitHuBro provides the software tools for profile verification, discovery, roster management, and program delivery. We do not automate client payments or take commissions on your training fees.'
  },
  {
    q: 'How do I get started as a trainer?',
    a: 'Click Access Trainer Portal to sign up or log in, complete your profile, and request gym affiliation.'
  }
]

export const FINAL_CTA = {
  headline: 'Coach with confidence. Get verified.',
  body: 'Join verified trainers delivering structured programs and building their professional reputation.',
  buttonText: 'Access Trainer Portal',
  buttonHref: APP_ROUTES.trainerLogin
}

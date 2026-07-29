export const NAV_LINKS = [
  { label: 'Grow Your Brand', href: '#pillars' },
  { label: 'Get Clients', href: '#clients' },
  { label: 'Community', href: '#community' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'Lead Generation',
  'Social Visibility',
  'Online Coaching',
  'Global Clients',
  'Build Reputation',
  'Free Registration',
] as const

export const AUDIENCES = [
  {
    id: 'trainers',
    label: "I'm a trainer",
    eyebrow: 'Monetize your knowledge',
    headline: 'Coach ten.\nOr a hundred.',
    accent: ['hundred.'],
    body: 'Boost your social visibility by answering questions in our global fitness community. Build trust, increase your ratings, and secure online clients for personal training.',
    ctaLabel: 'Register as a trainer',
    ctaHref: '/join/trainer',
  }
]

export const PERSONAS = [
  {
    id: 'leads',
    label: 'Lead Generation',
    title: 'Your knowledge is your marketing.',
    body: 'Stop paying for ads. Answer member questions about diet, workouts, and supplements in our Quora-style community. When members see your expertise, they hire you.',
    points: ['Answer questions to boost visibility', 'Get rated by the community', 'Convert readers into paying clients'],
    ctaLabel: 'Start answering',
    ctaHref: '/community/questions',
    assetLabel: 'Visibility',
    assetSize: 'Global',
    assetRatio: 'Scale'
  }
]

export const MANIFESTO = {
  headline: 'Stop chasing leads.\nLet them find you.',
  body: [
    'Most trainers struggle to find online clients because they are buried in an algorithm on Instagram.',
    'FitHuBro flips the model. We bring thousands of fitness enthusiasts to our community who have specific questions about diet, supplements, and workouts.',
    'You provide the answers. You build the trust. You get the client. And registration is totally free.'
  ]
}

export const PILLARS: import('./owners').Pillar[] = [
  { index: '01', title: 'Build Reputation', body: 'Answer questions in the community. The more helpful you are, the more the algorithm pushes your profile.' },
  { index: '02', title: 'Generate Leads', body: 'When members love your free advice, they can easily reach out to buy a personalized plan.' },
  { index: '03', title: 'Manage Clients', body: 'Deliver plans, track compliance, and manage payments all in one place.' },
]

export const PRODUCT_TOUR = {
  eyebrow: 'Trainer Dashboard',
  headline: 'Manage your empire.',
  body: 'Track your leads, reply to community doubts, and write plans for your new online clients from one clean interface.',
  features: []
}

export const STATS = [
  { value: 0, prefix: '₹', suffix: '', label: 'Registration fee', note: 'Totally free to join' },
  { value: 100, prefix: '', suffix: '%', label: 'Organic leads', note: 'Based on your answers' },
]

export const ROI = {
  headline: 'Your time is money.',
  description: 'Spend 15 minutes a day clearing doubts in the community, and watch your client roster fill up.',
  metrics: []
}

import type { CompareRow, TourStep } from './owners'

export const COMPARE = {
  headline: 'Why coach here?',
  us: 'FitHuBro',
  them: 'Social Media',
  rows: [
    { feature: 'High-intent clients asking questions', us: 'yes', them: 'no' },
    { feature: 'Built-in workout planner for clients', us: 'yes', them: 'no' },
    { feature: 'Algorithm based on helpfulness', us: 'yes', them: 'no' },
  ] as CompareRow[]
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: 'Q&A',
    title: 'Answer and attract',
    body: 'Provide valuable answers to community questions and build your reputation.',
    bullets: ['Showcase expertise', 'Algorithm favors helpfulness', 'Direct lead generation'],
    assetLabel: 'Community Q&A screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Monetization',
    title: 'Sell plans seamlessly',
    body: 'When users love your advice, they can buy your personalized plans right in the app.',
    bullets: ['Zero friction', 'Integrated payments', 'Easy delivery'],
    assetLabel: 'Trainer monetization screen',
    assetSize: '1200 × 2400px · 9:18'
  },
]
export const TIERS = [
  {
    name: 'Trainer Pro',
    price: 0,
    cap: 'For certified professionals',
    featured: true,
    features: ['Global Lead Gen', 'Community Q&A Access', 'Client Management', 'Verified Badge']
  }
]

export const FAQS = [
  {
    q: 'How do I get clients?',
    a: 'By participating in the community. When a member asks about a workout plan or supplement, give a great answer. Your profile rating goes up, and members can contact you directly for personal training.'
  },
  {
    q: 'Is it really free?',
    a: 'Yes! Registration is free. You only need to verify your certifications to get the trusted trainer badge.'
  }
]

export const FINAL_CTA = {
  headline: 'Grow your roster.',
  body: 'Join the smartest platform for trainers to find motivated online clients.',
  buttonText: 'Register for free',
  buttonHref: '/join/trainer'
}

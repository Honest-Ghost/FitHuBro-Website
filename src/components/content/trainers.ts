export const NAV_LINKS = [
  { label: 'Grow Your Brand', href: '#pillars' },
  { label: 'Get Clients', href: '#clients' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'Lead Generation',
  'Verified Trainers',
  'Online Coaching',
  'Global Clients',
  'Build Reputation',
  'KYC Badges',
] as const

export const AUDIENCES = [
  {
    id: 'trainers',
    label: "I'm a trainer",
    eyebrow: 'Monetize your knowledge',
    headline: 'Coach ten.\nOr a hundred.',
    accent: ['hundred.'],
    body: 'Pass our fitness knowledge quiz and KYC to become a Verified Trainer. Answer questions to boost visibility, and secure online clients directly through the app.',
    ctaLabel: 'Apply as a Trainer',
    ctaHref: '/join/trainer',
  }
]

export const PERSONAS = [
  {
    id: 'leads',
    label: 'Lead Generation',
    title: 'Your knowledge is your marketing.',
    body: 'Stop paying for ads. Answer member questions in our Quora-style community. When members see your expertise and verified badge, they hire you directly.',
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
    'FitHuBro flips the model. We bring thousands of fitness enthusiasts to our community who have specific questions.',
    'To maintain quality, we only onboard trainers who pass our fitness quiz and submit their qualifications. Once verified, you get the clients.'
  ]
}

export const PILLARS: import('./owners').Pillar[] = [
  { index: '01', title: 'Get Verified', body: 'Pass our fitness knowledge quiz, submit your qualifications, and upload a selfie with your ID to get the Verified Badge.' },
  { index: '02', title: 'Build Reputation', body: 'Answer questions in the community. The more helpful you are, the more the algorithm pushes your profile to potential clients.' },
  { index: '03', title: 'Manage Clients', body: 'Deliver personalized plans, track client compliance, and manage payments all in one place.' },
]

export const PRODUCT_TOUR = {
  eyebrow: 'Trainer Dashboard',
  headline: 'Manage your empire.',
  body: 'Track your leads, reply to community doubts, and write plans for your new online clients from one clean interface.',
  features: []
}

export const STATS = [
  { value: 100, prefix: '', suffix: '%', label: 'Verified', note: 'Rigorous KYC process' },
  { value: 0, prefix: '₹', suffix: '', label: 'Upfront fees', note: 'Start answering for free' },
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
    { feature: 'Strict KYC & Verified Badges', us: 'yes', them: 'no' },
    { feature: 'Algorithm based on helpfulness', us: 'yes', them: 'no' },
  ] as CompareRow[]
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: 'Verification',
    title: 'Trusted experts only',
    body: 'Submit your certifications and ID to get verified. Members trust our trainers because of our strict vetting process.',
    bullets: ['Fitness knowledge quiz', 'Qualification review', 'Selfie & ID KYC'],
    assetLabel: 'Trainer Verification screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Monetization',
    title: 'Sell plans seamlessly',
    body: 'Once you build trust in the community, members can buy your personalized plans right in the app.',
    bullets: ['Zero friction', 'Integrated payments', 'Easy delivery'],
    assetLabel: 'Trainer monetization screen',
    assetSize: '1200 × 2400px · 9:18'
  },
]

export const TIERS = [
  {
    name: 'Basic Trainer',
    price: 0,
    cap: 'For verified professionals',
    features: ['Verified Trainer Badge', 'Answer Q&A to build reputation', 'Organic lead generation', 'Basic client management']
  },
  {
    name: 'Trainer Pro',
    price: 999,
    cap: 'Scale your business',
    featured: true,
    features: ['Algorithm Boost in Q&A', 'Priority Listing for Clients', 'Advanced Client Analytics', 'Everything in Basic']
  }
]

export const FAQS = [
  {
    q: 'How do I get the Verified Badge?',
    a: 'You must pass our fitness knowledge quiz, submit your fitness certifications, and complete KYC by providing a selfie holding your Aadhar card or identity proof.'
  },
  {
    q: 'How do I get clients?',
    a: 'By participating in the community. When a member asks about a workout plan or supplement, give a great answer. Your verified profile rating goes up, and members can contact you directly.'
  }
]

export const FINAL_CTA = {
  headline: 'Grow your roster.',
  body: 'Join the smartest platform for trainers to find motivated online clients. Pass the quiz and start today.',
  buttonText: 'Apply for Verification',
  buttonHref: '/join/trainer'
}

export const PRICING_SUBTITLE = 'Answer questions for free to build your reputation, and scale your business with the Pro tier.'

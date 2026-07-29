export const NAV_LINKS = [
  { label: 'AI Coach', href: '#pillars' },
  { label: 'Community', href: '#community' },
  { label: 'Streaks', href: '#streaks' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'AI Workouts',
  'Weekly Streaks',
  'Nutrition',
  'Q&A Community',
  'Find Trainers',
  'Form Check',
  'Equipment Aware',
] as const

export const AUDIENCES = [
  {
    id: 'members',
    label: "I'm a member",
    eyebrow: 'Train with a plan',
    headline: 'Lift heavier.\nKeep the streak.',
    accent: ['streak.'],
    body: 'Your workout, food, and recovery in one app. Built around your goal, your kitchen, and the exact equipment on your gym floor. Maintain your weekly streak and see real results.',
    ctaLabel: 'Download free',
    ctaHref: '/join/home',
  }
]

export const PERSONAS = [
  {
    id: 'community',
    label: 'The Community',
    title: 'Your fitness questions, answered by pros.',
    body: 'Got a doubt about a diet plan? Curious about supplements or form? Ask the community and get answers directly from certified trainers worldwide. A free space for fitness freaks.',
    points: ['Free Q&A platform', 'Verified trainer badges', 'Supplement and diet advice'],
    ctaLabel: 'Join the community',
    ctaHref: '/community',
    assetLabel: 'Q&A Board',
    assetSize: 'Live',
    assetRatio: '24/7'
  }
]

export const MANIFESTO = {
  headline: 'Motivation fades.\nStreaks remain.',
  body: [
    'Most people quit the gym because they show up without a plan, get bored, and break their routine.',
    'FitHuBro keeps you locked in. Our AI coach builds your workout based on the exact equipment your gym has. No guessing. No skipping because the machine was taken.',
    'Hit your workouts, maintain your weekly streak, and ask our global trainer community when you get stuck.'
  ]
}

export const PILLARS: import('./owners').Pillar[] = [
  { index: '01', title: 'Smart AI Coach', body: 'The AI adapts your plan based on exactly what equipment your gym has and what you logged last time.' },
  { index: '02', title: 'Community Q&A', body: 'Ask questions and get answers from certified trainers for free. No more guessing on your form or diet.' },
  { index: '03', title: 'Motivation Streaks', body: 'Keep your momentum going by hitting your weekly targets. Show off your streaks on the leaderboard.' },
]

export const PRODUCT_TOUR = {
  eyebrow: 'Inside the app',
  headline: 'Your pocket coach.',
  body: 'Log your sets, check your streak, and ask questions to the community all from one beautiful dashboard.',
  features: []
}

export const STATS = [
  { value: 100, prefix: '', suffix: '%', label: 'Personalized', note: 'Based on your gym' },
  { value: 24, prefix: '', suffix: '/7', label: 'Community', note: 'Always active' },
]

export const ROI = {
  headline: 'Free to start.',
  description: 'Join the community, get AI plans, and maintain your streaks for free.',
  metrics: []
}

import type { CompareRow, TourStep } from './owners'

export const COMPARE = {
  headline: 'Why FitHuBro?',
  us: 'FitHuBro',
  them: 'Generic Apps',
  rows: [
    { feature: 'Knows your gym equipment', us: 'yes', them: 'no' },
    { feature: 'Free Q&A with real trainers', us: 'yes', them: 'no' },
    { feature: 'Weekly motivation streaks', us: 'yes', them: 'no' },
  ] as CompareRow[]
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: 'AI Coach',
    title: 'Smartest workouts',
    body: 'The AI builds a plan based on exactly what equipment your gym has.',
    bullets: ['Tailored to your gym', 'Progressive overload', 'Form checks'],
    assetLabel: 'AI Coach screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Streaks',
    title: 'Never miss a week',
    body: 'Stay motivated by maintaining your weekly workout streaks.',
    bullets: ['Weekly goals', 'Leaderboards', 'Milestone badges'],
    assetLabel: 'Streaks screen',
    assetSize: '1200 × 2400px · 9:18'
  },
]
export const TIERS = [
  {
    name: 'Free Forever',
    price: 0,
    cap: 'For fitness enthusiasts',
    featured: true,
    features: ['AI Workouts', 'Q&A Community Access', 'Streak Tracking', 'Find Trainers']
  }
]

export const FAQS = [
  {
    q: 'Is the community really free?',
    a: 'Yes! You can ask questions about diet, supplements, and workouts, and certified trainers will answer them for free to build their reputation.'
  },
  {
    q: 'How does the AI know my equipment?',
    a: 'If your gym uses FitHuBro, the app syncs with their equipment inventory. If not, you can quickly filter out machines your gym doesn’t have.'
  }
]

export const FINAL_CTA = {
  headline: 'Start your streak.',
  body: 'Join the smartest fitness community and get a plan that actually works for you.',
  buttonText: 'Download the app',
  buttonHref: '/join/home'
}

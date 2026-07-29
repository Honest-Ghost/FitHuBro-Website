export const NAV_LINKS = [
  { label: 'AI Coach', href: '#pillars' },
  { label: 'Community', href: '#community' },
  { label: 'Streaks', href: '#streaks' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'AI Workouts',
  'Weekly Streaks',
  'Nutrition',
  'Q&A Community',
  'Find Trainers',
  'Form Check',
  'Custom Diet Plans',
] as const

export const AUDIENCES = [
  {
    id: 'members',
    label: "I'm a member",
    eyebrow: 'Train with a plan',
    headline: 'Lift heavier.\nKeep the streak.',
    accent: ['streak.'],
    body: 'Your workout, diet, and recovery in one app. Free members get standard plans and streak tracking, while Pro members unlock advanced AI coaching tailored to your body type and budget.',
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
    'FitHuBro keeps you locked in. Hit your workouts, maintain your weekly streak, and ask our global trainer community when you get stuck.',
    'Upgrade to Pro to let our AI coach build a workout based on the exact equipment your gym has, and generate a diet plan optimized for your budget.'
  ]
}

export const PILLARS: import('./owners').Pillar[] = [
  { index: '01', title: 'Smart AI Coach', body: 'Pro members get plans tailored to their body type and the exact equipment available at their gym or home.' },
  { index: '02', title: 'Personalized Diets', body: 'Vegetarian? Non-veg? Tight budget? Pro unlocks a fully customized diet chart optimized for your needs.' },
  { index: '03', title: 'Motivation Streaks', body: 'Keep your momentum going by hitting your weekly targets. Show off your streaks on the leaderboard.' },
]

export const PRODUCT_TOUR = {
  eyebrow: 'Inside the app',
  headline: 'Your pocket coach.',
  body: 'Log your sets, check your streak, and ask questions to the community all from one beautiful dashboard.',
  features: []
}

export const STATS = [
  { value: 100, prefix: '', suffix: '%', label: 'Personalized', note: 'Based on your body type' },
  { value: 24, prefix: '', suffix: '/7', label: 'Community', note: 'Always active' },
]

export const ROI = {
  headline: 'Free to start.',
  description: 'Join the community, get standard workout plans, and maintain your streaks for free.',
  metrics: []
}

import type { CompareRow, TourStep } from './owners'

export const COMPARE = {
  headline: 'Why FitHuBro?',
  us: 'FitHuBro',
  them: 'Generic Apps',
  rows: [
    { feature: 'Diet optimized for your budget', us: 'yes', them: 'no' },
    { feature: 'Free Q&A with real trainers', us: 'yes', them: 'no' },
    { feature: 'Knows your gym equipment', us: 'yes', them: 'no' },
  ] as CompareRow[]
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: 'AI Coach',
    title: 'Smartest workouts',
    body: 'For Pro members, the AI builds a plan based on exactly what equipment your gym has and your body type.',
    bullets: ['Tailored to your gym', 'Progressive overload', 'Form checks'],
    assetLabel: 'AI Coach screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Diet Plans',
    title: 'Eat right, on budget',
    body: 'Get a personalized diet chart that respects your dietary preferences and monthly budget constraints.',
    bullets: ['Veg/Non-veg/Eggitarian', 'Budget optimized', 'Body type targeted'],
    assetLabel: 'Diet screen',
    assetSize: '1200 × 2400px · 9:18'
  },
]

export const TIERS = [
  {
    name: 'Free',
    price: 0,
    cap: 'For fitness enthusiasts',
    features: ['Standard Workout Plan', 'BMI Calculator', 'Q&A Community Access', 'Streak Tracking', 'Find Trainers', 'Standard Diet Plan']
  },
  {
    name: 'Pro',
    price: 499,
    cap: 'For serious lifters',
    featured: true,
    features: ['Advanced AI Workout Plan (Body Type & Equipment)', 'Custom Diet Chart (Veg/Non-veg/Budget)', 'Everything in Free']
  },
  {
    name: 'Elite',
    price: 1999,
    cap: '1-on-1 coaching',
    features: ['Hire a Verified Trainer directly', 'Personalized Video Form Checks', 'Priority Q&A responses', 'Everything in Pro']
  }
]

export const FAQS = [
  {
    q: 'What do I get for free?',
    a: 'Free members get standard workout and diet plans, the BMI calculator, streak tracking, and full access to our Q&A community.'
  },
  {
    q: 'How does the custom diet plan work?',
    a: 'Pro members answer a few questions about their body type, dietary preferences (vegetarian, non-veg, etc.), and monthly budget. The AI generates a cost-effective, personalized diet chart.'
  }
]

export const FINAL_CTA = {
  headline: 'Start your streak.',
  body: 'Join the smartest fitness community and get a plan that actually works for you.',
  buttonText: 'Download the app',
  buttonHref: '/join/home'
}

export const PRICING_SUBTITLE = 'Start for free and upgrade when you are ready to take your training to the next level.'

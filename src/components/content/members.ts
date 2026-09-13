import { APP_ROUTES } from '@/lib/config'
import type { CompareRow, TourStep, Pillar, Persona as ContentPersona } from './owners'

export const NAV_LINKS = [
  { label: 'AI Coach', href: '#coach' },
  { label: 'Journey', href: '#journey' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'Equipment-Aware Workouts',
  'Multimodal Meal Scan',
  'Text AI Coach',
  'Daily Consistency Streaks',
  'Digital Gym Pass',
  '60s Rotating QR Check-In',
  'Verified Trainers',
  'Plate Calculator',
] as const

export const AUDIENCES = [
  {
    id: 'members',
    label: "I'm here to get fit",
    eyebrow: 'YOUR FITNESS. YOUR COACH. YOUR JOURNEY.',
    headline: 'Lift smarter.\nEat better.\nStay consistent.',
    accent: ['smarter.', 'better.', 'consistent.'],
    body: 'Your personal fitness journey, guided by an intelligent text-based AI Coach and connected directly to your gym floor.',
    ctaLabel: 'Start Your Journey',
    ctaHref: APP_ROUTES.memberCheckIn,
    secondaryCtaLabel: 'Meet Your AI Coach',
    secondaryCtaHref: '#coach',
  }
]

export const MANIFESTO = {
  eyebrow: 'Why We Built It',
  headline: 'Fitness isn’t just one workout.\nIt’s everything around it.',
  body: [
    'Showing up at the gym is only half the battle. Real progress happens when your training matches your equipment, your nutrition fuels recovery, and your habits stay consistent week after week.',
    'FitHuBro unifies your daily fitness routine with intelligent text-based AI coaching, practical nutrition awareness, and a seamless connection to your gym floor.'
  ]
}

export const PILLARS: Pillar[] = [
  {
    index: '01',
    title: 'Workout Guidance',
    body: 'Intelligent daily training routines built around available equipment. Get exercise substitutions, Olympic plate calculations, and progressive overload tracking.'
  },
  {
    index: '02',
    title: 'Nutrition Guidance',
    body: 'Practical meal guidance with culturally relevant foods — roti, dal, paneer, eggs, and chicken. Estimate macros with meal photo scans and generate 7-day meal plans tailored to your targets.'
  },
  {
    index: '03',
    title: 'Text AI Companion',
    body: 'Ask fitness questions anytime via text chat. Get instant guidance on training cues, muscle soreness, recovery, and daily momentum from an always-on AI companion powered by Google Gemini.'
  },
]

export const PRODUCT_TOUR = {
  eyebrow: 'Fitness Journey',
  headline: 'Five stages of your connected fitness journey',
  body: 'Discover your path, train with intent, fuel with awareness, build unstoppable consistency, and connect with your gym floor.',
  features: []
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: 'Stage 01 · Discovery',
    title: 'Personalized Setup & Equipment Discovery',
    body: 'Set your fitness goals, select your experience level, and configure the equipment available to you — whether you train at a full commercial gym, a local studio, or with a home setup.',
    bullets: ['Goal selection & baseline strength', 'Equipment-aware routine matching', 'Home & commercial gym options'],
    assetLabel: 'Discovery screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Stage 02 · Train',
    title: 'Adaptive Workouts & Set Logging',
    body: 'Follow daily workout routines tailored to your gym floor. Swap exercises based on available machines, calculate Olympic barbell plate loadings, and log sets with progressive overload.',
    bullets: ['Equipment-aware workout generation', 'Olympic barbell plate calculator', 'Progressive overload set logging'],
    assetLabel: 'Workout screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Stage 03 · Eat',
    title: 'Meal Photo Macro Scanning & Nutrition',
    body: 'Snap photos of your meals to estimate calories and macronutrients using multimodal AI, or look up packaged foods by barcode. Build practical 7-day meal plans around foods you actually eat, like roti, dal, paneer, and eggs.',
    bullets: ['Multimodal AI meal photo macro scanning', 'Packaged food barcode lookup', '7-day practical meal plans (Indian diets supported)'],
    assetLabel: 'Diet screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Stage 04 · Stay Consistent',
    title: 'Streaks, Volume Load & Habit Tracking',
    body: 'Build lasting discipline with daily workout streaks, weekly training volume tracking, and consistency milestones that keep you showing up week after week.',
    bullets: ['Daily streak & consistency counters', 'Weekly volume load tracking', 'Personal milestone records'],
    assetLabel: 'Dashboard screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Stage 05 · Connect',
    title: 'Digital Gym Card & Trainer Discovery',
    body: 'Carry your digital gym card on your phone and check into partnered gyms using the rotating 60-second HMAC QR kiosk. Browse verified trainers at your gym when you need expert human coaching.',
    bullets: ['Digital gym card on your phone', 'Fraud-proof 60-second rotating QR check-in', 'Verified trainer discovery directory'],
    assetLabel: 'Check-in screen',
    assetSize: '1200 × 2400px · 9:18'
  },
]

export const PERSONAS: ContentPersona[] = [
  {
    id: 'trainers',
    label: 'HUMAN COACHING',
    title: 'AI for answers. Human trainers for expertise.',
    body: 'While the AI Coach delivers instant 24/7 text answers, heavy compound lifting and specialized goals benefit from human guidance. Discover verified personal trainers at your gym for tailored multi-week programs, hands-on form correction, and real accountability.',
    points: [
      'Gym-verified credentials and reviewed trainer profiles',
      'Custom multi-week workout programs assigned directly to you',
      'Hands-on expertise, form accountability, and mentorship',
      'Explore coaches freely on the trainer marketplace directory',
    ],
    ctaLabel: 'Discover Verified Trainers',
    ctaHref: '/trainers',
    assetLabel: 'Trainer Board',
    assetSize: 'Live',
    assetRatio: '24/7'
  }
]

export const FAQS = [
  {
    q: 'How does the AI Coach work?',
    a: 'The AI Coach is a conversational text assistant powered by Google Gemini. You can chat with it anytime to get workout recommendations, alternative exercises for available gym equipment, recovery advice, and macro estimates.'
  },
  {
    q: 'What nutrition features are supported?',
    a: 'You can snap photos of your meals for AI calorie and macro estimations, scan packaged food barcodes, and generate 7-day meal plans using everyday foods like roti, dal, paneer, curd, eggs, and chicken.'
  },
  {
    q: 'How do human trainers fit into FitHuBro?',
    a: 'The AI Coach and human trainers are complementary. The AI is your immediate digital assistant for daily questions. When you want hands-on technique coaching, specialized programming, or human accountability, you can find verified trainers on the marketplace directory.'
  },
  {
    q: 'How does the gym check-in work?',
    a: 'Partnered gyms display a secure kiosk screen with a dynamic QR code that refreshes every 60 seconds. Simply open your digital gym card in the app and scan the kiosk code to record your attendance instantly.'
  }
]

export const FINAL_CTA = {
  headline: 'Lift smarter. Start today.',
  body: 'Your personal fitness journey, guided by AI and connected to your gym. Free to start on your phone.',
  buttonText: 'Start Your Journey',
  buttonHref: APP_ROUTES.memberCheckIn
}

export const STATS = [
  { value: 100, prefix: '', suffix: '%', label: 'Personalized', note: 'Based on your equipment and goals' },
  { value: 24, prefix: '', suffix: '/7', label: 'AI Coach', note: 'Text chat assistance' },
  { value: 60, prefix: '', suffix: 's', label: 'Rotating QR', note: 'Fraud-proof gym check-in' },
  { value: 5, prefix: '', suffix: ' Stages', label: 'Fitness Journey', note: 'Discover, Train, Eat, Consistent, Connect' },
]

export const ROI = {
  headline: 'Free to start.',
  description: 'Track workouts, maintain streaks, and ask fitness questions for free.',
  metrics: []
}

export const COMPARE = {
  headline: 'Why FitHuBro For members?',
  us: 'FitHuBro',
  them: 'Generic Apps',
  rows: [
    { feature: 'Equipment-aware workout generation', us: 'yes', them: 'no' },
    { feature: 'Multimodal AI meal photo scan', us: 'yes', them: 'no' },
    { feature: 'Culturally relevant Indian nutrition', us: 'yes', them: 'no' },
    { feature: 'Fraud-proof rotating 60s QR gym check-in', us: 'yes', them: 'no' },
    { feature: 'Verified trainer discovery directory', us: 'yes', them: 'no' },
  ] as CompareRow[]
}

export const TIERS: import('./owners').Tier[] = []
export const PRICING_SUBTITLE = ''

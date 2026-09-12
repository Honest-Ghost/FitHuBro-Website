import { APP_ROUTES } from '@/lib/config'
import type { CompareRow, TourStep, Pillar, Persona as ContentPersona } from './owners'

export const NAV_LINKS = [
  { label: 'AI Coach', href: '#coach' },
  { label: 'Journey', href: '#journey' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'FAQ', href: '#faq' },
] as const

export const MARQUEE_WORDS = [
  'AI Workouts',
  'Nutrition Photo Scan',
  'Daily Consistency',
  'Digital Gym Card',
  'Conversational AI',
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
    body: 'Your personal fitness journey, guided by an AI Coach and connected to your local gym.',
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
    body: 'Practical meal guidance with culturally relevant foods — roti, dal, paneer, eggs, and chicken. Estimate macros and generate 7-day meal plans tailored to your targets.'
  },
  {
    index: '03',
    title: 'Conversational Assistance',
    body: 'Ask fitness questions anytime via text chat. Get instant guidance on training cues, muscle soreness, recovery, and daily momentum from an always-on AI companion.'
  },
]

export const PRODUCT_TOUR = {
  eyebrow: 'Fitness Journey',
  headline: 'Four pillars of your fitness journey',
  body: 'Train with intent, fuel with awareness, build unstoppable consistency, and connect with your gym.',
  features: []
}

export const TOUR_STEPS: TourStep[] = [
  {
    eyebrow: 'Train',
    title: 'Equipment-aware workout routines',
    body: 'Your AI Coach generates daily training based on available equipment — barbells, dumbbells, machines, or bodyweight. Log your sets, track progressive overload, and use the Olympic plate calculator.',
    bullets: ['Adaptive workout generation', 'Olympic barbell plate calculator', 'Progressive overload set logging'],
    assetLabel: 'Workout screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Eat',
    title: 'Macro scanning and meal awareness',
    body: 'Snap meal photos to estimate calories and macronutrients with multimodal AI, or scan packaged food barcodes. Plan your nutrition around practical Indian meals like roti, dal, paneer, and eggs.',
    bullets: ['AI meal photo macro scanning', 'Barcode food lookup', '7-day meal plan assistance'],
    assetLabel: 'Diet screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Stay Consistent',
    title: 'Streaks, volume, and momentum',
    body: 'Build sustainable discipline with daily streak tracking, volume load history, and progress milestones that keep you showing up.',
    bullets: ['Daily streak counters', 'Weekly volume metrics', 'Progressive momentum tracking'],
    assetLabel: 'Dashboard screen',
    assetSize: '1200 × 2400px · 9:18'
  },
  {
    eyebrow: 'Connect',
    title: 'Seamless gym check-in',
    body: 'Carry your digital gym card on your phone. Scan the rotating 60-second HMAC QR kiosk at partnered gyms for instant attendance.',
    bullets: ['Digital gym card on your phone', 'Fraud-proof 60s rotating QR check-in', 'Direct facility connection'],
    assetLabel: 'Check-in screen',
    assetSize: '1200 × 2400px · 9:18'
  },
]

export const PERSONAS: ContentPersona[] = [
  {
    id: 'trainers',
    label: 'HUMAN COACHING',
    title: 'AI for answers. Human trainers for expertise.',
    body: 'While the AI Coach delivers instant 24/7 answers, heavy compound lifting and specialized goals benefit from human guidance. Discover verified personal trainers at your gym for tailored multi-week programs, hands-on form correction, and real accountability.',
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
    a: 'The AI Coach is a conversational assistant powered by Google Gemini. You can chat with it anytime via text to get workout recommendations, alternative exercises for available gym equipment, recovery advice, and macro estimates.'
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

// Fallback objects for persona content typing compatibility
export const STATS = [
  { value: 100, prefix: '', suffix: '%', label: 'Personalized', note: 'Based on your equipment and goals' },
  { value: 24, prefix: '', suffix: '/7', label: 'AI Coach', note: 'Text chat assistance' },
]

export const ROI = {
  headline: 'Free to start.',
  description: 'Track workouts, maintain streaks, and ask fitness questions for free.',
  metrics: []
}

export const COMPARE = {
  headline: 'Why FitHuBro?',
  us: 'FitHuBro',
  them: 'Generic Apps',
  rows: [
    { feature: 'Equipment-aware workout generation', us: 'yes', them: 'no' },
    { feature: 'Culturally relevant Indian nutrition', us: 'yes', them: 'no' },
    { feature: 'Fraud-proof rotating QR gym check-in', us: 'yes', them: 'no' },
  ] as CompareRow[]
}

export const TIERS: import('./owners').Tier[] = []
export const PRICING_SUBTITLE = ''

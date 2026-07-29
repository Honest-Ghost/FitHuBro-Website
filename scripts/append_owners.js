const fs = require('fs')

const appendText = `
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
`

fs.appendFileSync('d:\\AR CodeHub\\FitHuBro-Website\\src\\components\\content\\owners.ts', appendText)

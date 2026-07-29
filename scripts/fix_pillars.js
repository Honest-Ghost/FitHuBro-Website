const fs = require('fs')

function fixPillars(file) {
  let content = fs.readFileSync(file, 'utf8')
  // We'll just replace the whole PILLARS object with a valid array
  const replacement = `export const PILLARS: import('./owners').Pillar[] = [
  { index: '01', title: 'Smart AI Coach', body: 'The AI adapts your plan based on exactly what equipment your gym has and what you logged last time.' },
  { index: '02', title: 'Community Q&A', body: 'Ask questions and get answers from certified trainers for free. No more guessing on your form or diet.' },
  { index: '03', title: 'Motivation Streaks', body: 'Keep your momentum going by hitting your weekly targets. Show off your streaks on the leaderboard.' },
]`
  content = content.replace(/export const PILLARS = \{[\s\S]*?\]\s*\}/, replacement)
  fs.writeFileSync(file, content, 'utf8')
}

fixPillars('d:\\AR CodeHub\\FitHuBro-Website\\src\\components\\content\\members.ts')

function fixPillarsTrainers(file) {
  let content = fs.readFileSync(file, 'utf8')
  const replacement = `export const PILLARS: import('./owners').Pillar[] = [
  { index: '01', title: 'Build Reputation', body: 'Answer questions in the community. The more helpful you are, the more the algorithm pushes your profile.' },
  { index: '02', title: 'Generate Leads', body: 'When members love your free advice, they can easily reach out to buy a personalized plan.' },
  { index: '03', title: 'Manage Clients', body: 'Deliver plans, track compliance, and manage payments all in one place.' },
]`
  content = content.replace(/export const PILLARS = \{[\s\S]*?\]\s*\}/, replacement)
  fs.writeFileSync(file, content, 'utf8')
}

fixPillarsTrainers('d:\\AR CodeHub\\FitHuBro-Website\\src\\components\\content\\trainers.ts')


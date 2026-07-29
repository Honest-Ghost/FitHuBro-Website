const fs = require('fs')

function addSubtitle(file, subtitle) {
  let content = fs.readFileSync(file, 'utf8')
  if (!content.includes('export const PRICING_SUBTITLE')) {
    content += `\nexport const PRICING_SUBTITLE = '${subtitle}'\n`
    fs.writeFileSync(file, content)
  }
}

addSubtitle(
  'd:\\\\AR CodeHub\\\\FitHuBro-Website\\\\src\\\\components\\\\content\\\\owners.ts',
  'One price per gym, not per member. No setup fee, no hardware, no annual lock-in. Cancel whenever.'
)

addSubtitle(
  'd:\\\\AR CodeHub\\\\FitHuBro-Website\\\\src\\\\components\\\\content\\\\members.ts',
  'Start for free and upgrade when you are ready to take your training to the next level.'
)

addSubtitle(
  'd:\\\\AR CodeHub\\\\FitHuBro-Website\\\\src\\\\components\\\\content\\\\trainers.ts',
  'Answer questions for free to build your reputation, and scale your business with the Pro tier.'
)

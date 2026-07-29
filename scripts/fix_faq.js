const fs = require('fs')

function fixFaq(file) {
  let content = fs.readFileSync(file, 'utf8')
  content = content.replace(/export const FAQ = \[/, 'export const FAQS = [')
  content = content.replace(/question:/g, 'q:')
  content = content.replace(/answer:/g, 'a:')
  fs.writeFileSync(file, content, 'utf8')
}

fixFaq('d:\\AR CodeHub\\FitHuBro-Website\\src\\components\\content\\members.ts')
fixFaq('d:\\AR CodeHub\\FitHuBro-Website\\src\\components\\content\\trainers.ts')

let faqComp = fs.readFileSync('d:\\AR CodeHub\\FitHuBro-Website\\src\\components\\sections\\Faq.tsx', 'utf8')
faqComp = faqComp.replace('const { FAQ } = getPersonaContent(persona)', 'const { FAQS } = getPersonaContent(persona)')
fs.writeFileSync('d:\\AR CodeHub\\FitHuBro-Website\\src\\components\\sections\\Faq.tsx', faqComp, 'utf8')

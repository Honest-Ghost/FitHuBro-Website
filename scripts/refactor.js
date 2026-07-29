const fs = require('fs')
const path = require('path')

const dir = 'd:\\AR CodeHub\\FitHuBro-Website\\src\\components\\sections'

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'))

for (const file of files) {
  const filePath = path.join(dir, file)
  let code = fs.readFileSync(filePath, 'utf8')

  // Find the import from '../content'
  const importMatch = code.match(/import\s+\{([^}]+)\}\s+from\s+'\.\.\/content'/)
  
  if (importMatch) {
    const importedVars = importMatch[1].trim()
    
    // Replace the import
    code = code.replace(
      importMatch[0],
      `import { getPersonaContent, type Persona } from '../content'`
    )

    // Find the component definition
    const compMatch = code.match(/export\s+function\s+([A-Z][a-zA-Z0-9_]*)\s*\(\)\s*\{/)
    
    if (compMatch) {
      const compName = compMatch[1]
      
      // Inject the prop and the content destructuring
      code = code.replace(
        compMatch[0],
        `export function ${compName}({ persona }: { persona: Persona }) {\n  const { ${importedVars.replace(/type\s+[a-zA-Z]+,?/g, '')} } = getPersonaContent(persona)`
      )
    }
    
    fs.writeFileSync(filePath, code, 'utf8')
    console.log(`Refactored ${file}`)
  }
}

import * as owners from './owners'
import * as members from './members'
import * as trainers from './trainers'

export type Persona = 'owners' | 'members' | 'trainers'

export const CONTENT = {
  owners,
  members,
  trainers,
}

export function getPersonaContent(persona: Persona) {
  return CONTENT[persona]
}

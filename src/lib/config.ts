/**
 * Centralized Application URL, Routes, and Verified Contact configuration.
 *
 * Architecture:
 * - Single Unified Frontend: https://fithubro.vercel.app
 * - Backend API Server: https://fithubro-api.onrender.com
 */

export const FRONTEND_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'https://fithubro.vercel.app'

export const SAAS_APP_URL =
  process.env.NEXT_PUBLIC_SAAS_APP_URL || 'https://fithubro.onrender.com'

export const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://fithubro-api.onrender.com'

export const APP_ROUTES = {
  // Main gateway / role router
  root: SAAS_APP_URL,
  signIn: `${SAAS_APP_URL}/`,

  // Gym Owner portal entry
  ownerLogin: `${SAAS_APP_URL}/owner/login`,

  // Trainer portal entry
  trainerLogin: `${SAAS_APP_URL}/trainer/login`,

  // Member app & QR check-in entry
  memberCheckIn: `${SAAS_APP_URL}/member`,
} as const

export const CONTACT_INFO = {
  phone: '+91 9911209589',
  phoneRaw: '919911209589',
  email: 'arman.raza987@gmail.com',
  websiteUrl: FRONTEND_URL,
  whatsappUrl: (message: string) =>
    `https://wa.me/919911209589?text=${encodeURIComponent(message)}`,
} as const

/**
 * Safely converts any gym name into a deterministic, URL-friendly demo slug.
 * Example: "Fit Forensic Gym" -> "fit-forensic-gym"
 * Example: "WOW Gym" -> "wow-gym"
 */
export function generateGymSlug(name: string): string {
  const sanitized = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)

  return sanitized || 'demo-gym'
}

/**
 * Humanizes a slug back into a title-cased gym name as a safe fallback on hard reload.
 * Example: "fit-forensic-gym" -> "Fit Forensic Gym"
 * Example: "wow-gym" -> "WOW Gym"
 */
export function humanizeGymSlug(slug: string): string {
  if (!slug) return 'Custom Gym'
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => {
      if (word.toLowerCase() === 'wow') return 'WOW'
      if (word.toLowerCase() === 'gym') return 'Gym'
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

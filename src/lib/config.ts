/**
 * Centralized Application URL and Route configuration.
 *
 * Connects the FitHuBro Marketing Website directly to the verified
 * SaaS application entry points hosted on app.fithubro.com.
 */

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'https://app.fithubro.com'

export const APP_ROUTES = {
  // Main gateway / role router
  root: APP_URL,
  signIn: `${APP_URL}/`,

  // Gym Owner portal entry
  ownerLogin: `${APP_URL}/owner/login`,

  // Trainer portal entry
  trainerLogin: `${APP_URL}/trainer/login`,

  // Member app & QR check-in entry
  memberCheckIn: `${APP_URL}/checkin`,
} as const

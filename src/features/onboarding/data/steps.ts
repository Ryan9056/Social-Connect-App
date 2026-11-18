import type { Href } from 'expo-router';

/**
 * Single source of truth for the onboarding flow order.
 * To add, remove or reorder a step: edit this list (and add/remove the route file).
 * Progress bar length and next/back navigation all derive from it.
 */
export const ONBOARDING_STEPS = [
  { key: 'profile', href: '/onboarding/profile' },
  { key: 'academics', href: '/onboarding/academics' },
  { key: 'interests', href: '/onboarding/interests' },
  { key: 'quick-questions', href: '/onboarding/quick-questions' },
  { key: 'review', href: '/onboarding/review' },
] as const satisfies readonly { key: string; href: string }[];

export type OnboardingStepKey = (typeof ONBOARDING_STEPS)[number]['key'];

/** Where the last onboarding step leads (the matching flow, built next). */
export const AFTER_ONBOARDING_HREF = '/finding-group' as Href;
import type { ProfileSummary } from '@/features/onboarding/types';

/**
 * TODO(functionality): the review screen shows this hard-coded profile for now.
 * Replace with real answers from `useOnboarding()` (providers/OnboardingProvider.tsx).
 */
export const PLACEHOLDER_PROFILE: ProfileSummary = {
  name: 'Alex Student',
  major: 'Undecided',
  housing: 'On campus',
  interests: [
    'Computer Science & IT',
    'Sciences',
    'Business',
    'Soccer',
    'Pickup sports',
    'Photography',
    'Volunteering',
    'Running',
  ],
};
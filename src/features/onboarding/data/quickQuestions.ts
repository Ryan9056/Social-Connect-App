import type { ScaleQuestion } from '@/features/onboarding/types';

/** Shared scale settings for the quick questions. */
export const QUICK_QUESTION_SCALE = {
  points: 5,
  minLabel: 'Not me',
  maxLabel: 'Totally me',
} as const;

/** Add more statements here; the screen renders whatever is in this list. */
export const QUICK_QUESTIONS: readonly ScaleQuestion[] = [
  { id: 'energy-from-people', text: 'I get energy from being around people' },
  { id: 'plan-ahead', text: 'I like to plan things ahead of time' },
  { id: 'try-new-things', text: 'I enjoy trying new things' },
  { id: 'stay-calm', text: 'I stay calm when things get stressful' },
  { id: 'easy-to-get-along', text: "I'm easy to get along with" },
];
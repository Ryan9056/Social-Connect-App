import type { ChipOption } from '@/features/onboarding/types';

/** Add more academic areas here; the screen renders whatever is in this list. */
export const ACADEMIC_OPTIONS: readonly ChipOption[] = [
  { id: 'cs-it', label: 'Computer Science & IT' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'business', label: 'Business' },
  { id: 'design-arts', label: 'Design & Arts' },
  { id: 'health-sciences', label: 'Health Sciences' },
  { id: 'education', label: 'Education' },
  { id: 'sciences', label: 'Sciences' },
  { id: 'humanities', label: 'Humanities' },
];
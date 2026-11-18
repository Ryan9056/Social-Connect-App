import { useRouter } from 'expo-router';

import {
    AFTER_ONBOARDING_HREF,
    ONBOARDING_STEPS,
    type OnboardingStepKey,
} from '@/features/onboarding/data/steps';

/**
 * Navigation helpers for one onboarding step.
 * `goNext` is where per-step validation / saving will plug in later.
 */
export function useOnboardingStep(key: OnboardingStepKey) {
  const router = useRouter();
  const index = ONBOARDING_STEPS.findIndex((s) => s.key === key);
  const next = ONBOARDING_STEPS[index + 1];

  return {
    step: index + 1,
    total: ONBOARDING_STEPS.length,
    goNext: () => router.push(next ? next.href : AFTER_ONBOARDING_HREF),
    goBack: () => router.back(),
  };
}
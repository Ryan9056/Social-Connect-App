import { ChipGroup } from '@/features/onboarding/components/ChipGroup';
import { OnboardingScreen } from '@/features/onboarding/components/OnboardingScreen';
import { INTEREST_OPTIONS } from '@/features/onboarding/data/interestOptions';
import { useOnboarding } from '@/providers/OnboardingProvider';

export default function InterestsStep() {
  const { interestIds, toggleInterest } = useOnboarding();

  return (
    <OnboardingScreen
      stepKey="interests"
      title="What do you do for fun?"
      subtitle="Pick at least 3. These matter most for matching.">
      <ChipGroup options={INTEREST_OPTIONS} selectedIds={interestIds} onToggle={toggleInterest} />
    </OnboardingScreen>
  );
}
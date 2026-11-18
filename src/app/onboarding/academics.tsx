import { ChipGroup } from '@/features/onboarding/components/ChipGroup';
import { OnboardingScreen } from '@/features/onboarding/components/OnboardingScreen';
import { ACADEMIC_OPTIONS } from '@/features/onboarding/data/academicOptions';
import { useOnboarding } from '@/providers/OnboardingProvider';

export default function AcademicsStep() {
  const { academicIds, toggleAcademic } = useOnboarding();

  return (
    <OnboardingScreen
      stepKey="academics"
      title={'What are you into\nacademically?'}
      subtitle="Pick all that fit.">
      <ChipGroup options={ACADEMIC_OPTIONS} selectedIds={academicIds} onToggle={toggleAcademic} />
    </OnboardingScreen>
  );
}
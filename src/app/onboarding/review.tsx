import { AppText } from '@/components/ui/AppText';
import { Brand } from '@/constants/brand';
import { OnboardingScreen } from '@/features/onboarding/components/OnboardingScreen';
import { ProfileSummaryCard } from '@/features/onboarding/components/ProfileSummaryCard';
import { PLACEHOLDER_PROFILE } from '@/features/onboarding/data/placeholderProfile';

export default function ReviewStep() {
  // TODO(functionality): build the summary from useOnboarding() instead of placeholder data.
  const profile = PLACEHOLDER_PROFILE;
  const firstName = profile.name.split(' ')[0];

  return (
    <OnboardingScreen
      stepKey="review"
      title={`Looks good, ${firstName}!`}
      subtitle="We'll match you into a group of about five students."
      continueLabel="Find my group"
      footnote={
        <AppText variant="caption" color={Brand.textMuted}>
          Your answers are only used for matching. You can edit or delete them any time from your profile.
        </AppText>
      }>
      <ProfileSummaryCard profile={profile} />
    </OnboardingScreen>
  );
}
import { type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/layout/Screen';
import { AppText } from '@/components/ui/AppText';
import { BackButton } from '@/components/ui/BackButton';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Brand } from '@/constants/brand';
import type { OnboardingStepKey } from '@/features/onboarding/data/steps';
import { useOnboardingStep } from '@/features/onboarding/hooks/useOnboardingStep';

export type OnboardingScreenProps = {
  stepKey: OnboardingStepKey;
  title: string;
  subtitle?: string;
  children: ReactNode;
  continueLabel?: string;
  /** Override what Continue does. Defaults to going to the next step. */
  onContinue?: () => void;
  /** Wire to validation later (e.g. "pick at least 3"). */
  continueDisabled?: boolean;
  /** Content shown under the Continue button (fine print etc.). */
  footnote?: ReactNode;
};

/** Shared frame for every onboarding step: back button, progress bar, heading, Continue. */
export function OnboardingScreen({
  stepKey,
  title,
  subtitle,
  children,
  continueLabel = 'Continue',
  onContinue,
  continueDisabled,
  footnote,
}: OnboardingScreenProps) {
  const { step, total, goNext, goBack } = useOnboardingStep(stepKey);

  return (
    <Screen>
      <View style={styles.header}>
        <BackButton onPress={goBack} />
        <ProgressBar step={step} total={total} />
      </View>

      <View style={styles.titleBlock}>
        <AppText variant="display">{title}</AppText>
        {subtitle ? (
          <AppText variant="body" color={Brand.textMuted}>
            {subtitle}
          </AppText>
        ) : null}
      </View>

      <View style={styles.body}>{children}</View>

      <View style={styles.footer}>
        <Button label={continueLabel} onPress={onContinue ?? goNext} disabled={continueDisabled} />
        {footnote}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 24 },
  titleBlock: { gap: 8, marginBottom: 20 },
  body: { gap: 16 },
  footer: { gap: 12, marginTop: 24 },
});
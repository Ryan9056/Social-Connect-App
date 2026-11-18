import { Screen } from '@/components/layout/Screen';
import { AppText } from '@/components/ui/AppText';
import { Brand } from '@/constants/brand';

/** Stub so "Find my group" has somewhere to land. The real matching screens come next. */
export default function FindingGroupScreen() {
  return (
    <Screen centered>
      <AppText variant="heading" align="center">
        Finding your group
      </AppText>
      <AppText align="center" color={Brand.textMuted}>
        Coming next.
      </AppText>
    </Screen>
  );
}
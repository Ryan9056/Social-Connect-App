import { Stack } from 'expo-router';

/** Onboarding steps stack on top of each other; each screen draws its own back button + progress. */
export default function OnboardingLayout() {
  return <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }} />;
}
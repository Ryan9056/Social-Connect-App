import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { WebFrame } from '@/components/layout/WebFrame';
import { Brand } from '@/constants/brand';
import { OnboardingProvider } from '@/providers/OnboardingProvider';

export default function RootLayout() {
  return (
    <OnboardingProvider>
      <StatusBar style="dark" />
      <WebFrame>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: Brand.background },
          }}
        />
      </WebFrame>
    </OnboardingProvider>
  );
}
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/layout/Screen';
import { AppText } from '@/components/ui/AppText';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { TextField } from '@/components/ui/TextField';
import { Brand } from '@/constants/brand';
import { ONBOARDING_STEPS } from '@/features/onboarding/data/steps';

export default function LoginScreen() {
  const router = useRouter();

  // TODO(functionality): Log in -> supabase.auth.signInWithPassword; Create account -> signUp.
  const goToOnboarding = () => router.push(ONBOARDING_STEPS[0].href);

  return (
    <Screen centered>
      <View style={styles.brand}>
        <Logo width={72} />
        <AppText variant="display" style={styles.title}>
          Social Connect
        </AppText>
        <AppText color={Brand.textMuted}>Find your people at UC.</AppText>
      </View>

      <View style={styles.form}>
        <TextField
          label="UC email"
          placeholder="you@mail.uc.edu"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
        />
        <TextField
          label="Password"
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          textContentType="password"
        />
        <Button label="Log in" onPress={goToOnboarding} />
        <Button label="Create account" variant="secondary" onPress={goToOnboarding} />
        <AppText variant="caption" color={Brand.textMuted} align="center">
          Preview build · any login works
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: { alignItems: 'center', gap: 6, marginBottom: 32 },
  title: { marginTop: 8, fontSize: 26 },
  form: { gap: 12 },
});
import { SegmentedControl } from '@/components/ui/SegmentedControl';
import { SelectField } from '@/components/ui/SelectField';
import { TextField } from '@/components/ui/TextField';
import { OnboardingScreen } from '@/features/onboarding/components/OnboardingScreen';
import { HOUSING_OPTIONS, MAJOR_OPTIONS } from '@/features/onboarding/data/profileOptions';
import { useOnboarding } from '@/providers/OnboardingProvider';

export default function ProfileStep() {
  const { name, setName, major, setMajor, housing, setHousing } = useOnboarding();

  return (
    <OnboardingScreen
      stepKey="profile"
      title={"Let's set up\nyour profile"}
      subtitle="Takes about a minute. We'll use it to find people you'll actually click with.">
      <TextField
        label="Your name"
        placeholder="First and last name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        textContentType="name"
      />
      <SelectField label="Major" options={MAJOR_OPTIONS} value={major} onChange={setMajor} />
      <SegmentedControl
        label="Where do you live?"
        options={HOUSING_OPTIONS}
        value={housing}
        onChange={setHousing}
      />
    </OnboardingScreen>
  );
}
import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Brand, Radius } from '@/constants/brand';

export type TextFieldProps = Omit<TextInputProps, 'style'> & {
  label: string;
};

export function TextField({ label, ...inputProps }: TextFieldProps) {
  return (
    <View style={styles.wrapper}>
      <AppText variant="label" color={Brand.textMuted}>
        {label}
      </AppText>
      <TextInput
        placeholderTextColor="#A8A196"
        accessibilityLabel={label}
        style={styles.input}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  input: {
    minHeight: 48,
    borderRadius: Radius.sm,
    borderWidth: 1,
    borderColor: Brand.border,
    backgroundColor: Brand.surface,
    paddingHorizontal: 14,
    fontSize: 16,
    color: Brand.text,
  },
});
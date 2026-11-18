import { Pressable, StyleSheet } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Brand, Radius } from '@/constants/brand';

export type ChipProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
};

/** Pill-shaped toggle used for multi-select options. */
export function Chip({ label, selected = false, onPress }: ChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}>
      <AppText variant="label" color={selected ? Brand.textOnRed : Brand.text}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: Radius.pill,
    backgroundColor: Brand.surface,
    borderWidth: 1,
    borderColor: Brand.border,
  },
  chipSelected: { backgroundColor: Brand.red, borderColor: Brand.red },
});
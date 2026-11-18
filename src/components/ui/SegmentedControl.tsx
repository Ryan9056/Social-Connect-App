import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Brand, Radius, Shadow } from '@/constants/brand';

export type SegmentOption<T extends string> = { value: T; label: string };

export type SegmentedControlProps<T extends string> = {
  label?: string;
  options: readonly SegmentOption<T>[];
  value: T;
  onChange: (value: T) => void;
};

export function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
}: SegmentedControlProps<T>) {
  return (
    <View style={styles.wrapper}>
      {label ? (
        <AppText variant="label" color={Brand.textMuted}>
          {label}
        </AppText>
      ) : null}
      <View style={styles.track}>
        {options.map((o) => {
          const selected = o.value === value;
          return (
            <Pressable
              key={o.value}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              onPress={() => onChange(o.value)}
              style={[styles.segment, selected && styles.segmentSelected]}>
              <AppText variant="label" color={selected ? Brand.text : Brand.textMuted}>
                {o.label}
              </AppText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  track: {
    flexDirection: 'row',
    backgroundColor: Brand.surfaceMuted,
    borderRadius: Radius.sm,
    padding: 3,
  },
  segment: {
    flex: 1,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.sm - 2,
  },
  segmentSelected: { backgroundColor: Brand.surface, ...Shadow.card },
});
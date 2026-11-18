import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Brand } from '@/constants/brand';

export type ScaleSelectorProps = {
  /** Number of points on the scale (default 5). */
  points?: number;
  value?: number;
  onChange: (value: number) => void;
  minLabel?: string;
  maxLabel?: string;
};

/** Numbered 1..N circles with optional end labels (Likert-style). */
export function ScaleSelector({
  points = 5,
  value,
  onChange,
  minLabel,
  maxLabel,
}: ScaleSelectorProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        {Array.from({ length: points }, (_, i) => i + 1).map((n) => {
          const selected = n === value;
          return (
            <Pressable
              key={n}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              accessibilityLabel={`${n} of ${points}`}
              onPress={() => onChange(n)}
              style={[styles.dot, selected && styles.dotSelected]}>
              <AppText variant="label" color={selected ? Brand.textOnRed : Brand.text}>
                {n}
              </AppText>
            </Pressable>
          );
        })}
      </View>
      {minLabel || maxLabel ? (
        <View style={styles.labels}>
          <AppText variant="caption" color={Brand.textMuted}>
            {minLabel}
          </AppText>
          <AppText variant="caption" color={Brand.textMuted}>
            {maxLabel}
          </AppText>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  dot: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Brand.surface,
    borderWidth: 1,
    borderColor: Brand.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotSelected: { backgroundColor: Brand.red, borderColor: Brand.red },
  labels: { flexDirection: 'row', justifyContent: 'space-between' },
});
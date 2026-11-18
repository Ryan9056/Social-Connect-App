import { StyleSheet, View } from 'react-native';

import { Brand, Radius } from '@/constants/brand';

export type ProgressBarProps = {
  /** 1-based index of the current step. */
  step: number;
  total: number;
};

/** Segmented progress bar; completed + current segments are filled. */
export function ProgressBar({ step, total }: ProgressBarProps) {
  return (
    <View
      style={styles.row}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 1, max: total, now: step }}>
      {Array.from({ length: total }, (_, i) => (
        <View key={i} style={[styles.segment, i < step && styles.segmentFilled]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flex: 1, flexDirection: 'row', gap: 6 },
  segment: { flex: 1, height: 4, borderRadius: Radius.pill, backgroundColor: Brand.track },
  segmentFilled: { backgroundColor: Brand.red },
});
import { StyleSheet, View } from 'react-native';

import { Chip } from '@/components/ui/Chip';
import type { ChipOption } from '@/features/onboarding/types';

export type ChipGroupProps = {
  options: readonly ChipOption[];
  selectedIds: readonly string[];
  onToggle: (id: string) => void;
};

/** Wrapping, multi-select group of chips. Fully driven by `options`. */
export function ChipGroup({ options, selectedIds, onToggle }: ChipGroupProps) {
  return (
    <View style={styles.wrap}>
      {options.map((o) => (
        <Chip
          key={o.id}
          label={o.label}
          selected={selectedIds.includes(o.id)}
          onPress={() => onToggle(o.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
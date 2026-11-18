import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Brand, Radius } from '@/constants/brand';

/** Small read-only pill (e.g. interests on the summary card). */
export function Tag({ label }: { label: string }) {
  return (
    <View style={styles.tag}>
      <AppText variant="caption" color={Brand.red} style={styles.text}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.pill,
    backgroundColor: Brand.redSoft,
  },
  text: { fontWeight: '700' },
});
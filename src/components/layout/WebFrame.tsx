import { type ReactNode } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Brand, Layout } from '@/constants/brand';

/**
 * On web, shows the app inside a centered phone-width column so it looks the same
 * as on a phone (web is just for testing). On iOS/Android it renders children untouched.
 */
export function WebFrame({ children }: { children: ReactNode }) {
  if (Platform.OS !== 'web') return <>{children}</>;

  return (
    <View style={styles.outer}>
      <View style={styles.phone}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: { flex: 1, alignItems: 'center', backgroundColor: '#DDD7CA' },
  phone: {
    flex: 1,
    width: '100%',
    maxWidth: Layout.maxContentWidth,
    backgroundColor: Brand.background,
    overflow: 'hidden',
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.12)',
  },
});
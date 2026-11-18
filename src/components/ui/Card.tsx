import { StyleSheet, View, type ViewProps } from 'react-native';

import { Brand, Radius, Shadow } from '@/constants/brand';

export function Card({ style, ...rest }: ViewProps) {
  return <View style={[styles.card, style]} {...rest} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Brand.surface,
    borderRadius: Radius.lg,
    padding: 16,
    ...Shadow.card,
  },
});
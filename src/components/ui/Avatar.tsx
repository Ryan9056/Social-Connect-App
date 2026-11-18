import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Brand } from '@/constants/brand';

export type AvatarProps = {
  name: string;
  size?: number;
  color?: string;
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

/** Circle with the person's initials. Swap for an image later without touching callers. */
export function Avatar({ name, size = 44, color = Brand.red }: AvatarProps) {
  return (
    <View
      style={[styles.circle, { width: size, height: size, borderRadius: size / 2, backgroundColor: color }]}>
      <AppText variant="label" color={Brand.textOnRed} style={{ fontSize: size * 0.34 }}>
        {initials(name)}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: 'center', justifyContent: 'center' },
});
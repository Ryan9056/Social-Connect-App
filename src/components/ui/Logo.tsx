import { Image } from 'expo-image';
import { type ImageStyle, type StyleProp } from 'react-native';

const LOGO_ASPECT = 723 / 478;

export function Logo({ width = 64, style }: { width?: number; style?: StyleProp<ImageStyle> }) {
  return (
    <Image
      source={require('@/assets/images/logo/SocialConnectLogo.png')}
      contentFit="contain"
      accessibilityLabel="Social Connect logo"
      style={[{ width, height: width / LOGO_ASPECT }, style]}
    />
  );
}
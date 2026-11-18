import { Text, type TextProps } from 'react-native';

import { Brand, Type, type TypeVariant } from '@/constants/brand';

export type AppTextProps = TextProps & {
  variant?: TypeVariant;
  color?: string;
  align?: 'left' | 'center' | 'right';
};

/** Brand text. Use `variant` for size/weight so type stays consistent app-wide. */
export function AppText({
  variant = 'body',
  color = Brand.text,
  align,
  style,
  ...rest
}: AppTextProps) {
  return <Text style={[Type[variant], { color }, align && { textAlign: align }, style]} {...rest} />;
}
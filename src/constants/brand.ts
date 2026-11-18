/**
 * Social Connect brand tokens. Every new screen/component should pull colors,
 * radii and type styles from here instead of hard-coding values.
 * (constants/theme.ts still backs the Expo template components.)
 */
import type { TextStyle, ViewStyle } from 'react-native';

export const Brand = {
  red: '#C1001F',
  redPressed: '#9E0019',
  redSoft: '#FBE3E7', // tag / highlight background
  black: '#1B1612',

  background: '#EFEBE2', // warm cream page background
  surface: '#FFFFFF',
  surfaceMuted: '#E8E0D3', // segmented-control track, inactive wells
  border: '#E3DDD0',
  track: '#DAD4C6', // inactive progress segment

  text: '#1B1612',
  textMuted: '#6B655C',
  textOnRed: '#FFFFFF',
} as const;

export const Radius = {
  sm: 10,
  md: 14,
  lg: 18,
  pill: 999,
} as const;

export const Shadow = {
  /** soft red glow under primary buttons (boxShadow works on iOS, Android and web) */
  button: { boxShadow: '0px 6px 12px rgba(193, 0, 31, 0.25)' } as ViewStyle,
  card: { boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)' } as ViewStyle,
} as const;

export const Type = {
  display: { fontSize: 30, lineHeight: 34, fontWeight: '800', letterSpacing: -0.5 },
  heading: { fontSize: 18, lineHeight: 24, fontWeight: '800' },
  body: { fontSize: 15, lineHeight: 21, fontWeight: '500' },
  label: { fontSize: 13, lineHeight: 18, fontWeight: '700' },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '500' },
  button: { fontSize: 16, lineHeight: 20, fontWeight: '700' },
} as const satisfies Record<string, TextStyle>;

export type TypeVariant = keyof typeof Type;

export const Layout = {
  screenPadding: 20,
  /** Phone-sized column. On web the whole app is framed to this width so it matches the phone. */
  maxContentWidth: 430,
} as const;
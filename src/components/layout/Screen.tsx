import { type ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Brand, Layout } from '@/constants/brand';

export type ScreenProps = {
  children: ReactNode;
  /** Scroll the content (default). Turn off for fixed, non-scrolling layouts. */
  scroll?: boolean;
  /** Vertically center content (e.g. login). */
  centered?: boolean;
};

/** Base page: cream background, safe areas, keyboard handling, centered max-width column. */
export function Screen({ children, scroll = true, centered = false }: ScreenProps) {
  const content = (
    <View style={[styles.column, centered && styles.centered]}>{children}</View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {scroll ? (
          <ScrollView
            style={styles.flex}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {content}
          </ScrollView>
        ) : (
          content
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: Brand.background },
  flex: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  column: {
    flexGrow: 1,
    width: '100%',
    maxWidth: Layout.maxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Layout.screenPadding,
    paddingTop: 12,
    paddingBottom: 24,
  },
  centered: { justifyContent: 'center' },
});
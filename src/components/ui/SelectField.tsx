import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Brand, Layout, Radius } from '@/constants/brand';

export type SelectOption = { id: string; label: string };

export type SelectFieldProps = {
  label: string;
  options: readonly SelectOption[];
  value: string;
  onChange: (id: string) => void;
};

/** Dropdown-style picker. Opens a bottom sheet list so it feels the same on iOS and Android. */
export function SelectField({ label, options, value, onChange }: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.id === value);

  return (
    <View style={styles.wrapper}>
      <AppText variant="label" color={Brand.textMuted}>
        {label}
      </AppText>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={() => setOpen(true)}
        style={styles.field}>
        <AppText>{selected?.label ?? 'Select…'}</AppText>
        <View style={styles.caret} />
      </Pressable>

      <Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <View style={styles.sheet}>
            <AppText variant="heading" style={styles.sheetTitle}>
              {label}
            </AppText>
            <FlatList
              data={options}
              keyExtractor={(o) => o.id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    onChange(item.id);
                    setOpen(false);
                  }}
                  style={styles.row}>
                  <AppText
                    variant={item.id === value ? 'label' : 'body'}
                    color={item.id === value ? Brand.red : Brand.text}>
                    {item.label}
                  </AppText>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  field: {
    minHeight: 48,
    borderRadius: Radius.sm,
    borderWidth: 1,
    borderColor: Brand.border,
    backgroundColor: Brand.surface,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caret: {
    width: 8,
    height: 8,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: Brand.text,
    transform: [{ rotate: '45deg' }, { translateY: -2 }],
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sheet: {
    width: '100%',
    maxWidth: Layout.maxContentWidth,
    maxHeight: '60%',
    backgroundColor: Brand.background,
    borderTopLeftRadius: Radius.lg,
    borderTopRightRadius: Radius.lg,
    paddingTop: 16,
    paddingBottom: 24,
  },
  sheetTitle: { paddingHorizontal: 20, paddingBottom: 8 },
  row: { paddingHorizontal: 20, paddingVertical: 14 },
});
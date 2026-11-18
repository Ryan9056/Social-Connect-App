import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { Brand } from '@/constants/brand';
import type { ProfileSummary } from '@/features/onboarding/types';

export function ProfileSummaryCard({ profile }: { profile: ProfileSummary }) {
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Avatar name={profile.name} />
        <View>
          <AppText variant="heading" style={styles.name}>
            {profile.name}
          </AppText>
          <AppText variant="caption" color={Brand.textMuted}>
            {profile.major} · {profile.housing}
          </AppText>
        </View>
      </View>

      <AppText variant="caption" color={Brand.textMuted} style={styles.sectionLabel}>
        YOUR INTERESTS
      </AppText>
      <View style={styles.tags}>
        {profile.interests.map((interest) => (
          <Tag key={interest} label={interest} />
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { gap: 12 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  name: { fontSize: 16 },
  sectionLabel: { fontWeight: '700', letterSpacing: 0.6 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
});
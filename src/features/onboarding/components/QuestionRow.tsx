import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { ScaleSelector } from '@/components/ui/ScaleSelector';
import { QUICK_QUESTION_SCALE } from '@/features/onboarding/data/quickQuestions';
import type { ScaleQuestion } from '@/features/onboarding/types';

export type QuestionRowProps = {
  question: ScaleQuestion;
  value?: number;
  onChange: (value: number) => void;
};

export function QuestionRow({ question, value, onChange }: QuestionRowProps) {
  return (
    <View style={styles.row}>
      <AppText variant="label" style={styles.text}>
        {question.text}
      </AppText>
      <ScaleSelector {...QUICK_QUESTION_SCALE} value={value} onChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { gap: 10 },
  text: { fontSize: 15 },
});
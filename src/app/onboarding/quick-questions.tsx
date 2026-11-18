import { OnboardingScreen } from '@/features/onboarding/components/OnboardingScreen';
import { QuestionRow } from '@/features/onboarding/components/QuestionRow';
import { QUICK_QUESTIONS } from '@/features/onboarding/data/quickQuestions';
import { useOnboarding } from '@/providers/OnboardingProvider';

export default function QuickQuestionsStep() {
  const { answers, setAnswer } = useOnboarding();

  return (
    <OnboardingScreen
      stepKey="quick-questions"
      title="Five quick questions"
      subtitle="No right answers. Used only to match you with compatible people.">
      {QUICK_QUESTIONS.map((q) => (
        <QuestionRow
          key={q.id}
          question={q}
          value={answers[q.id]}
          onChange={(value) => setAnswer(q.id, value)}
        />
      ))}
    </OnboardingScreen>
  );
}
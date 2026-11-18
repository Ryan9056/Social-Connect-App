import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

import { HOUSING_OPTIONS, type Housing } from '@/features/onboarding/data/profileOptions';

/**
 * Holds the answers collected during onboarding so selections survive
 * navigating back and forth. Later this is the place to persist to Supabase.
 */
type OnboardingState = {
  name: string;
  major: string;
  housing: Housing;
  academicIds: string[];
  interestIds: string[];
  answers: Record<string, number>; // quick-question id -> 1..N
};

type OnboardingContextValue = OnboardingState & {
  setName: (v: string) => void;
  setMajor: (v: string) => void;
  setHousing: (v: Housing) => void;
  toggleAcademic: (id: string) => void;
  toggleInterest: (id: string) => void;
  setAnswer: (questionId: string, value: number) => void;
};

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

const toggle = (list: string[], id: string) =>
  list.includes(id) ? list.filter((x) => x !== id) : [...list, id];

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OnboardingState>({
    name: '',
    major: 'undecided',
    housing: HOUSING_OPTIONS[0].value,
    academicIds: [],
    interestIds: [],
    answers: {},
  });

  const setName = useCallback((name: string) => setState((s) => ({ ...s, name })), []);
  const setMajor = useCallback((major: string) => setState((s) => ({ ...s, major })), []);
  const setHousing = useCallback((housing: Housing) => setState((s) => ({ ...s, housing })), []);
  const toggleAcademic = useCallback(
    (id: string) => setState((s) => ({ ...s, academicIds: toggle(s.academicIds, id) })),
    [],
  );
  const toggleInterest = useCallback(
    (id: string) => setState((s) => ({ ...s, interestIds: toggle(s.interestIds, id) })),
    [],
  );
  const setAnswer = useCallback(
    (questionId: string, value: number) =>
      setState((s) => ({ ...s, answers: { ...s.answers, [questionId]: value } })),
    [],
  );

  const value = useMemo(
    () => ({ ...state, setName, setMajor, setHousing, toggleAcademic, toggleInterest, setAnswer }),
    [state, setName, setMajor, setHousing, toggleAcademic, toggleInterest, setAnswer],
  );

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error('useOnboarding must be used inside <OnboardingProvider>');
  return ctx;
}
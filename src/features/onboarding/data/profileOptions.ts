import type { SegmentOption } from '@/components/ui/SegmentedControl';
import type { SelectOption } from '@/components/ui/SelectField';

export const MAJOR_OPTIONS: readonly SelectOption[] = [
  { id: 'undecided', label: 'Undecided' },
  { id: 'computer-science', label: 'Computer Science' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'information-technology', label: 'Information Technology' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'business-administration', label: 'Business Administration' },
  { id: 'architecture-design', label: 'Architecture & Design' },
  { id: 'biology', label: 'Biology' },
  { id: 'health-sciences', label: 'Health Sciences' },
  { id: 'education', label: 'Education' },
  { id: 'humanities', label: 'Humanities' },
];

export type Housing = 'on-campus' | 'commuter';

export const HOUSING_OPTIONS: readonly SegmentOption<Housing>[] = [
  { value: 'on-campus', label: 'On campus' },
  { value: 'commuter', label: 'Commuter' },
];
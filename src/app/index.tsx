import { Redirect } from 'expo-router';

/**
 * App entry. Always starts at login for now.
 * Later: check the Supabase session here and redirect to the home tabs when signed in.
 */
export default function Index() {
  return <Redirect href="/login" />;
}
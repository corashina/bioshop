// Stub for useAuth hook in user components
export function useAuth() {
  return {
    user: null,
    loading: false,
    signIn: () => Promise.resolve(),
    signOut: () => Promise.resolve(),
  };
} 
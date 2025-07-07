import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { AuthContext } from "./AuthContextDef";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  function logout() {
    return signOut(auth);
  }

  const refreshUserProfile = async () => {
    // No-op for simple version
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Create a simple user profile from auth data
  const userProfile = currentUser ? {
    uid: currentUser.uid,
    email: currentUser.email || '',
    displayName: currentUser.displayName || '',
    photoURL: currentUser.photoURL || '',
    createdAt: new Date(),
    lastLoginAt: new Date(),
    preferences: {
      newsletter: true,
      notifications: true,
      theme: 'light' as const
    },
    wishlist: [],
    orderHistory: [],
    cartItems: []
  } : null;

  const value = {
    currentUser,
    userProfile,
    loading,
    signInWithGoogle,
    logout,
    refreshUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 
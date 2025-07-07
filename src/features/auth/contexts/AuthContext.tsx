import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { AuthContext } from "./AuthContextDef";
import { UserService, type UserProfile } from "../services/userService";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  async function signInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  function logout() {
    return signOut(auth);
  }

  const refreshUserProfile = async () => {
    if (currentUser) {
      try {
        const profile = await UserService.getUserProfile(currentUser.uid);
        setUserProfile(profile);
      } catch (error) {
        console.error('Error refreshing user profile:', error);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        try {
          // Create or update user profile
          await UserService.createOrUpdateUser(user);
          // Get the user profile
          const profile = await UserService.getUserProfile(user.uid);
          setUserProfile(profile);
        } catch (error) {
          console.error('Error handling user authentication:', error);
          // If Firestore fails, create a basic profile from auth data
          setUserProfile({
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || '',
            photoURL: user.photoURL || '',
            createdAt: new Date(),
            lastLoginAt: new Date(),
            preferences: {
              newsletter: true,
              notifications: true,
              theme: 'light'
            },
            wishlist: [],
            orderHistory: [],
            cartItems: []
          });
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

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

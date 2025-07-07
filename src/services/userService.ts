// import { 
//   doc, 
//   setDoc, 
//   getDoc, 
//   updateDoc, 
//   collection,
//   query,
//   where,
//   getDocs
// } from 'firebase/firestore';
// import { db } from '../firebase';
import type { User } from 'firebase/auth';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  createdAt: Date;
  lastLoginAt: Date;
  // Additional user fields
  phoneNumber?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  preferences?: {
    newsletter: boolean;
    notifications: boolean;
    theme: 'light' | 'dark';
  };
  // Shopping related fields
  wishlist?: string[];
  orderHistory?: string[];
  cartItems?: string[];
}

export class UserService {
  // Simplified version without Firestore - all operations are no-ops
  // User profiles are created from auth data in the AuthContext

  // Create or update user profile
  static async createOrUpdateUser(user: User): Promise<void> {
    // No-op for simplified version
    console.log('UserService: createOrUpdateUser called for', user.email);
  }

  // Get user profile by UID
  static async getUserProfile(uid: string): Promise<UserProfile | null> {
    // No-op for simplified version
    console.log('UserService: getUserProfile called for', uid);
    return null;
  }

  // Update user profile
  static async updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
    // No-op for simplified version
    console.log('UserService: updateUserProfile called for', uid, updates);
  }

  // Update user preferences
  static async updateUserPreferences(uid: string, preferences: Partial<UserProfile['preferences']>): Promise<void> {
    // No-op for simplified version
    console.log('UserService: updateUserPreferences called for', uid, preferences);
  }

  // Add item to wishlist
  static async addToWishlist(uid: string, itemId: string): Promise<void> {
    // No-op for simplified version
    console.log('UserService: addToWishlist called for', uid, itemId);
  }

  // Remove item from wishlist
  static async removeFromWishlist(uid: string, itemId: string): Promise<void> {
    // No-op for simplified version
    console.log('UserService: removeFromWishlist called for', uid, itemId);
  }

  // Get user by email
  static async getUserByEmail(email: string): Promise<UserProfile | null> {
    // No-op for simplified version
    console.log('UserService: getUserByEmail called for', email);
    return null;
  }
} 
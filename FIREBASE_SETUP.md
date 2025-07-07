# Firebase Authentication Setup Guide

This guide will help you set up Firebase Authentication with Google Sign-In for your Vibe Shop application.

## Prerequisites

- A Google account
- Node.js and npm installed
- Basic knowledge of React and TypeScript

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "vibe-shop")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project console, click on "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Click on "Google" in the list of providers
5. Enable Google authentication by toggling the switch
6. Add your authorized domain (localhost for development)
7. Click "Save"

## Step 3: Get Firebase Configuration

1. In your Firebase project console, click on the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to the "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "vibe-shop-web")
6. Copy the Firebase configuration object

## Step 4: Update Firebase Configuration

1. Open `src/firebase.ts` in your project
2. Replace the placeholder configuration with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## Step 5: Configure Authorized Domains

1. In Firebase Console, go to Authentication > Settings
2. Add your domains to the "Authorized domains" list:
   - `localhost` (for development)
   - Your production domain (when deployed)

## Step 6: Test the Application

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`
3. You should be redirected to the login page
4. Click "Continue with Google" to test the authentication

## Features Included

- ✅ Google Sign-In authentication
- ✅ Protected routes (redirects to login if not authenticated)
- ✅ User profile display with logout functionality
- ✅ Beautiful, responsive UI design
- ✅ Error handling for authentication failures
- ✅ Loading states during authentication
- ✅ TypeScript support

## File Structure

```
src/
├── firebase.ts                 # Firebase configuration
├── contexts/
│   ├── AuthContextDef.ts      # Auth context type definitions
│   └── AuthContext.tsx        # Auth context provider
├── hooks/
│   └── useAuth.ts             # Custom hook for auth
├── components/
│   ├── Login.tsx              # Login page component
│   ├── Login.css              # Login page styles
│   ├── UserProfile.tsx        # User profile component
│   ├── UserProfile.css        # User profile styles
│   └── ProtectedRoute.tsx     # Route protection component
└── App.tsx                    # Main app with routing
```

## Security Notes

- Never commit your Firebase API keys to version control
- Use environment variables for production deployments
- Consider implementing additional security measures like email verification
- Regularly review your Firebase project's security rules

## Troubleshooting

### Common Issues:

1. **"Firebase: Error (auth/popup-closed-by-user)"**
   - This is normal when users close the popup without signing in
   - The error is handled gracefully in the UI

2. **"Firebase: Error (auth/unauthorized-domain)"**
   - Make sure your domain is added to authorized domains in Firebase Console
   - For development, ensure `localhost` is in the list

3. **"Firebase: Error (auth/network-request-failed)"**
   - Check your internet connection
   - Verify Firebase project is properly configured

### Getting Help:

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication Guide](https://firebase.google.com/docs/auth)
- [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks)

## Next Steps

After setting up authentication, you might want to:

1. Add more authentication providers (Facebook, Twitter, etc.)
2. Implement user profile management
3. Add role-based access control
4. Set up Firebase Firestore for user data storage
5. Add email verification
6. Implement password reset functionality 
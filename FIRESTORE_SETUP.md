# Firestore Setup Guide

The error 400 to firestore.googleapis.com indicates that Firestore is not properly enabled in your Firebase project. Follow these steps to fix it:

## Step 1: Enable Firestore in Firebase Console

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `bioshop-a164e`
3. In the left sidebar, click on **"Firestore Database"**
4. Click **"Create database"**
5. Choose a starting mode:
   - **Production mode** (recommended for production)
   - **Test mode** (for development - allows all reads/writes)
6. Choose a location for your database (select the closest to your users)
7. Click **"Done"**

## Step 2: Set Up Security Rules

After creating the database, you'll need to set up security rules:

1. In Firestore Database, click on the **"Rules"** tab
2. Replace the default rules with these development-friendly rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read and write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // For development, you can use these more permissive rules:
    // match /{document=**} {
    //   allow read, write: if true;
    // }
  }
}
```

3. Click **"Publish"**

## Step 3: Test the Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Try logging in again with Google
3. Check the browser console - you should no longer see Firestore errors

## Alternative: Disable Firestore Temporarily

If you want to test the app without Firestore for now, you can temporarily disable it:

1. Open `src/firebase.ts`
2. Comment out the Firestore import and initialization:

```typescript
// import { getFirestore } from 'firebase/firestore';

// ... other code ...

// export const db = getFirestore(app);
```

3. The app will work with just authentication, but user profiles won't be saved

## Troubleshooting

### If you still get errors:

1. **Check Firebase Console**: Make sure Firestore is actually created
2. **Check Security Rules**: Make sure they allow authenticated users to read/write
3. **Check Network Tab**: Look for specific error messages in the browser's Network tab
4. **Check Console**: Look for detailed error messages in the browser console

### Common Issues:

- **"Missing or insufficient permissions"**: Security rules are too restrictive
- **"Project not found"**: Wrong project ID in Firebase config
- **"Unauthorized"**: User not authenticated when trying to access Firestore

## Production Considerations

For production, make sure to:

1. Use proper security rules that only allow necessary access
2. Set up proper indexes for your queries
3. Monitor usage and costs
4. Set up backup and recovery procedures

## Need Help?

If you're still having issues:

1. Check the Firebase Console for any error messages
2. Look at the browser console for detailed error information
3. Make sure your Firebase project is properly set up
4. Verify that the project ID in your config matches your Firebase project 
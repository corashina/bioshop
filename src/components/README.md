# Components Organization

This directory contains all React components organized by feature and purpose.

## Directory Structure

### `/auth`
Authentication-related components:
- `AuthDebug.tsx` - Debug component for authentication state
- `ProtectedRoute.tsx` - Route wrapper for protected pages

### `/layout`
Layout and navigation components:
- `Header.tsx` - Main site header
- `Header.css` - Header styles
- `Footer.tsx` - Main site footer
- `Navigation.tsx` - Navigation menu component

### `/products`
Product-related components:
- `FeaturedProducts.tsx` - Featured products display
- `ProductCategories.tsx` - Product categories overview

### `/user`
User profile and dashboard components:
- `UserDashboard.tsx` - User dashboard component
- `UserDashboard.css` - Dashboard styles
- `UserProfile.tsx` - User profile component
- `UserProfile.css` - Profile styles
- `UserProfilePage.tsx` - User profile page
- `UserProfilePage.css` - Profile page styles

### `/ui`
Reusable UI components:
- `LoadingSpinner.tsx` - Loading spinner component
- `LoadingSpinner.css` - Spinner styles
- `Hero.tsx` - Hero section component
- `Newsletter.tsx` - Newsletter signup component

### `/debug`
Debug and testing components:
- `FirebaseTest.tsx` - Firebase connection test
- `SimpleTest.tsx` - Basic routing test

## Import Guidelines

When importing components, use the feature-specific paths:

```tsx
// ✅ Good - Feature-specific imports
import Header from './components/layout/Header';
import LoadingSpinner from './components/ui/LoadingSpinner';
import UserProfile from './components/user/UserProfile';

// ❌ Avoid - Direct component imports
import Header from './components/Header';
```

## Adding New Components

When adding new components:

1. **Determine the feature category** (auth, layout, products, user, ui, debug)
2. **Place the component** in the appropriate subdirectory
3. **Update import statements** in files that use the component
4. **Follow the naming convention** of the existing components
5. **Include CSS files** in the same directory as the component

## CSS Organization

CSS files are co-located with their corresponding components in the same directory for better maintainability and easier refactoring. 
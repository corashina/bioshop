import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

// Mock the AuthProvider to avoid Firebase dependencies in tests
vi.mock('./contexts/AuthContextSimple', () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="auth-provider">{children}</div>
}))

// Mock all the components to simplify testing
vi.mock('./components/auth/ProtectedRoute', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="protected-route">{children}</div>
}))

vi.mock('./features/auth/components/Login', () => ({
  default: () => <div data-testid="login-page">Login Page</div>
}))

vi.mock('./components/user/UserProfilePage', () => ({
  default: () => <div data-testid="user-profile">User Profile</div>
}))

vi.mock('./components/debug/FirebaseTest', () => ({
  default: () => <div data-testid="firebase-test">Firebase Test</div>
}))

// Mock the useAuth hook to avoid AuthProvider dependency
vi.mock('./features/auth/hooks/useAuth', () => ({
  useAuth: () => ({
    currentUser: null,
    userProfile: null,
    loading: false,
    signInWithGoogle: vi.fn(),
    signOut: vi.fn(),
  }),
}))

vi.mock('./components/auth/AuthDebug', () => ({
  default: () => <div data-testid="auth-debug">Auth Debug</div>
}))

vi.mock('./components/debug/SimpleTest', () => ({
  default: () => <div data-testid="simple-test">Simple Test</div>
}))

vi.mock('./components/layout/Header', () => ({
  default: () => <div data-testid="header">Header</div>
}))

vi.mock('./components/layout/Navigation', () => ({
  default: () => <div data-testid="navigation">Navigation</div>
}))

vi.mock('./components/ui/Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>
}))

vi.mock('./components/products/ProductCategories', () => ({
  default: () => <div data-testid="product-categories">Product Categories</div>
}))

vi.mock('./components/products/FeaturedProducts', () => ({
  default: () => <div data-testid="featured-products">Featured Products</div>
}))

vi.mock('./components/ui/Newsletter', () => ({
  default: () => <div data-testid="newsletter">Newsletter</div>
}))

vi.mock('./components/layout/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}))

describe('App', () => {
  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('renders AuthProvider', () => {
    render(<App />)
    expect(screen.getByTestId('auth-provider')).toBeInTheDocument()
  })

  it('renders login page at /login route', () => {
    window.history.pushState({}, '', '/login')
    render(<App />)
    expect(screen.getByTestId('login-page')).toBeInTheDocument()
  })

  it('renders simple test page at /simple route', () => {
    window.history.pushState({}, '', '/simple')
    render(<App />)
    expect(screen.getByTestId('simple-test')).toBeInTheDocument()
  })

  it('renders firebase test page at /test route', () => {
    window.history.pushState({}, '', '/test')
    render(<App />)
    expect(screen.getByTestId('firebase-test')).toBeInTheDocument()
  })

  it('renders auth debug page at /debug route', () => {
    window.history.pushState({}, '', '/debug')
    render(<App />)
    expect(screen.getByTestId('auth-debug')).toBeInTheDocument()
  })
}) 
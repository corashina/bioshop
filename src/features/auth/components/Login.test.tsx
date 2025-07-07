import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Login from './Login'

// Mock the useAuth hook
const mockSignInWithGoogle = vi.fn()
const mockUseAuth = vi.fn(() => ({
  signInWithGoogle: mockSignInWithGoogle,
  loading: false,
}))

vi.mock('../hooks/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}))

// Mock the LoadingSpinner component
vi.mock('../../../components/ui/LoadingSpinner', () => ({
  default: () => <div data-testid="loading-spinner">Loading...</div>,
}))

describe('Login', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseAuth.mockReturnValue({
      signInWithGoogle: mockSignInWithGoogle,
      loading: false,
    })
  })

  it('renders login form', () => {
    render(<Login />)
    
    expect(screen.getByText('Welcome to Vibe Shop')).toBeInTheDocument()
    expect(screen.getByText('Sign in to continue shopping')).toBeInTheDocument()
    expect(screen.getByText('Continue with Google')).toBeInTheDocument()
  })

  it('shows loading spinner when auth is loading', () => {
    mockUseAuth.mockReturnValue({
      signInWithGoogle: mockSignInWithGoogle,
      loading: true,
    })
    
    render(<Login />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('calls signInWithGoogle when Google sign-in button is clicked', async () => {
    const user = userEvent.setup()
    render(<Login />)
    
    const signInButton = screen.getByText('Continue with Google')
    await user.click(signInButton)
    
    expect(mockSignInWithGoogle).toHaveBeenCalledTimes(1)
  })

  it('shows loading state during sign-in process', async () => {
    const user = userEvent.setup()
    mockSignInWithGoogle.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)))
    
    render(<Login />)
    
    const signInButton = screen.getByRole('button', { name: 'Continue with Google' })
    await user.click(signInButton)
    
    expect(screen.getByText('Signing in...')).toBeInTheDocument()
    expect(signInButton).toBeDisabled()
  })

  it('shows error message when sign-in fails', async () => {
    const user = userEvent.setup()
    const errorMessage = 'Failed to sign in with Google. Please try again.'
    mockSignInWithGoogle.mockRejectedValue(new Error('Sign-in failed'))
    
    render(<Login />)
    
    const signInButton = screen.getByText('Continue with Google')
    await user.click(signInButton)
    
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument()
    })
  })

  it('clears error message on successful sign-in', async () => {
    const user = userEvent.setup()
    mockSignInWithGoogle
      .mockRejectedValueOnce(new Error('Sign-in failed'))
      .mockResolvedValueOnce(undefined)
    
    render(<Login />)
    
    const signInButton = screen.getByRole('button', { name: 'Continue with Google' })
    
    // First click fails
    await user.click(signInButton)
    await waitFor(() => {
      expect(screen.getByText('Failed to sign in with Google. Please try again.')).toBeInTheDocument()
    })
    
    // Second click succeeds
    await user.click(signInButton)
    await waitFor(() => {
      expect(screen.queryByText('Failed to sign in with Google. Please try again.')).not.toBeInTheDocument()
    })
  })

  it('renders Google icon in the sign-in button', () => {
    render(<Login />)
    
    const googleIcon = screen.getByTestId('google-icon')
    expect(googleIcon).toBeInTheDocument()
  })

  it('displays terms and privacy policy text', () => {
    render(<Login />)
    
    expect(screen.getByText(/By signing in, you agree to our Terms of Service and Privacy Policy/)).toBeInTheDocument()
  })
}) 
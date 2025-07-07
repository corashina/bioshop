# Testing Guide for Vibe Shop UI

This project uses a modern testing stack with Vitest, React Testing Library, and Jest DOM for comprehensive automated testing.

## Testing Stack

- **Vitest**: Fast unit test runner with native TypeScript support
- **React Testing Library**: Testing utilities for React components
- **Jest DOM**: Custom DOM element matchers for Jest
- **@testing-library/user-event**: Simulate user interactions

## Getting Started

### Running Tests

```bash
# Run tests in watch mode (development)
npm test

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

### Test File Structure

Tests should be placed alongside the components they test with the `.test.tsx` or `.test.ts` extension:

```
src/
├── components/
│   └── ui/
│       ├── LoadingSpinner.tsx
│       └── LoadingSpinner.test.tsx
├── features/
│   └── auth/
│       └── components/
│           ├── Login.tsx
│           └── Login.test.tsx
└── test/
    ├── setup.ts
    ├── test-utils.tsx
    └── test-providers.tsx
```

## Writing Tests

### Component Testing

Here's an example of testing a simple component:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import LoadingSpinner from './LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders loading text', () => {
    render(<LoadingSpinner />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('has the correct CSS classes', () => {
    render(<LoadingSpinner />)
    const container = screen.getByText('Loading...').closest('.loading-container')
    expect(container).toBeInTheDocument()
  })
})
```

### Testing with User Interactions

For components with user interactions:

```tsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Login from './Login'

describe('Login', () => {
  it('calls signInWithGoogle when button is clicked', async () => {
    const user = userEvent.setup()
    const mockSignIn = vi.fn()
    
    render(<Login onSignIn={mockSignIn} />)
    
    const button = screen.getByText('Sign In')
    await user.click(button)
    
    expect(mockSignIn).toHaveBeenCalledTimes(1)
  })
})
```

### Testing with Hooks

When testing components that use hooks, mock the hooks:

```tsx
import { vi } from 'vitest'

// Mock the hook
const mockUseAuth = vi.fn(() => ({
  user: null,
  loading: false,
  signIn: vi.fn(),
}))

vi.mock('../hooks/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}))

describe('Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows loading state', () => {
    mockUseAuth.mockReturnValue({
      user: null,
      loading: true,
      signIn: vi.fn(),
    })
    
    render(<Component />)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})
```

### Testing with Router

For components that use React Router, use the custom render function:

```tsx
import { customRender } from '../../test/test-utils'

describe('Navigation', () => {
  it('renders navigation links', () => {
    customRender(<Navigation />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
  })
})
```

## Testing Utilities

### Custom Render Function

Use `customRender` from `src/test/test-utils.tsx` for components that need providers:

```tsx
import { customRender } from '../test/test-utils'

// This automatically wraps components with BrowserRouter
customRender(<Component />)
```

### Mock Data

Use the mock data from test utilities:

```tsx
import { mockUser, mockProduct } from '../test/test-utils'

// Use in tests
const user = mockUser
const product = mockProduct
```

## Best Practices

### 1. Test Behavior, Not Implementation

```tsx
// ❌ Bad - testing implementation details
expect(component.state.isLoading).toBe(true)

// ✅ Good - testing user-visible behavior
expect(screen.getByText('Loading...')).toBeInTheDocument()
```

### 2. Use Semantic Queries

```tsx
// ❌ Bad - testing by class name
screen.getByClassName('button')

// ✅ Good - testing by accessible role
screen.getByRole('button', { name: 'Submit' })
```

### 3. Test User Interactions

```tsx
// ✅ Test what users actually do
const user = userEvent.setup()
await user.click(screen.getByRole('button'))
await user.type(screen.getByLabelText('Email'), 'test@example.com')
```

### 4. Mock External Dependencies

```tsx
// Mock Firebase, APIs, etc.
vi.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
}))
```

### 5. Test Error States

```tsx
it('shows error message when login fails', async () => {
  mockSignIn.mockRejectedValue(new Error('Invalid credentials'))
  
  const user = userEvent.setup()
  await user.click(screen.getByText('Sign In'))
  
  await waitFor(() => {
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
  })
})
```

## Coverage

Run coverage to see how well your code is tested:

```bash
npm run test:coverage
```

This will generate a coverage report showing:
- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

## Continuous Integration

Add this to your CI pipeline:

```yaml
- name: Run tests
  run: npm run test:run

- name: Run tests with coverage
  run: npm run test:coverage
```

## Troubleshooting

### Common Issues

1. **TypeScript errors in tests**: Make sure `tsconfig.test.json` is properly configured
2. **Mock not working**: Ensure mocks are defined before imports
3. **Async test failures**: Use `waitFor` for asynchronous operations
4. **Router issues**: Use `customRender` for components that need routing

### Debugging Tests

Use the Vitest UI for debugging:

```bash
npm run test:ui
```

This provides an interactive interface to run and debug tests. 
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
    const spinner = screen.getByText('Loading...').closest('.loading-spinner')
    
    expect(container).toBeInTheDocument()
    expect(spinner).toBeInTheDocument()
  })

  it('renders without crashing', () => {
    expect(() => render(<LoadingSpinner />)).not.toThrow()
  })
}) 
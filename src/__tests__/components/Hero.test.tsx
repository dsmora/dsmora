import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/Hero';

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />);
    expect(screen.getByText('David Mora')).toBeDefined();
  });

  it('renders the title', () => {
    render(<Hero />);
    expect(screen.getByText('Frontend Architect')).toBeDefined();
  });

  it('has a call to action button', () => {
    render(<Hero />);
    expect(screen.getByText('Get in Touch')).toBeDefined();
  });
});

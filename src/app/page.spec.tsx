import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './page';

jest.mock('../../hooks/useProducts', () => ({
  useProducts: () => ({
    products: [],
    loading: false,
    selectedCategory: 'all',
    setSelectedCategory: jest.fn()
  })
}));

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    expect(screen.getByText('Nuestros Productos Financieros')).toBeInTheDocument();
  });

  it('renders filter tabs', () => {
    render(<HomePage />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('shows loading state when products are loading', () => {
    jest.mock('../../hooks/useProducts', () => ({
      useProducts: () => ({
        products: [],
        loading: true,
        selectedCategory: 'all',
        setSelectedCategory: jest.fn()
      })
    }));
    
    render(<HomePage />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { ProductCategory } from '@/types/Product';

import FilterTabs from './FilterTabs';

describe('FilterTabs Component', () => {
  const mockOnSelect = jest.fn();
  const selectedCategory: ProductCategory | 'all' = 'all';

  beforeEach(() => {
    render(
      <FilterTabs 
        selectedCategory={selectedCategory} 
        onSelectCategory={mockOnSelect} 
      />
    );
  });

  it('renders all category tabs', () => {
    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Cuentas')).toBeInTheDocument();
    expect(screen.getByText('Tarjetas')).toBeInTheDocument();
    expect(screen.getByText('Inversiones')).toBeInTheDocument();
    expect(screen.getByText('Préstamos')).toBeInTheDocument();
    expect(screen.getByText('Seguros')).toBeInTheDocument();
  });

  it('marks the selected tab as active', () => {
    const allTab = screen.getByText('Todos');
    expect(allTab).toHaveAttribute('aria-selected', 'true');
  });

  it('calls onSelectCategory when a tab is clicked', () => {
    const accountsTab = screen.getByText('Cuentas');
    fireEvent.click(accountsTab);
    expect(mockOnSelect).toHaveBeenCalledWith('cuentas');
  });

  it('has proper accessibility attributes', () => {
    expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Filtrar productos por categoría');
    expect(screen.getAllByRole('tab').length).toBe(6);
  });

  it('updates active tab when selectedCategory changes', () => {
    const { rerender } = render(
      <FilterTabs 
        selectedCategory="cuentas" 
        onSelectCategory={mockOnSelect} 
      />
    );
    expect(screen.getByText('Cuentas')).toHaveAttribute('aria-selected', 'true');
  });
});
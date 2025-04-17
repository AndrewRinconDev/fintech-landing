import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductPage from './page';

jest.mock('../../../utils/__mocks__/productsData', () => ({
  productsMock: [{
    id: 'prod-001',
    name: 'Test Product',
    description: 'Test Description',
    category: 'cuentas',
    // ... other product properties
  }]
}));

describe('Product Detail Page', () => {
  const paramsMock = Promise.resolve({ id: 'prod-001' });

  it('renders product details', () => {
    render(<ProductPage params={paramsMock} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('shows back to catalog link', () => {
    render(<ProductPage params={paramsMock} />);
    expect(screen.getByText('Volver al catálogo')).toBeInTheDocument();
  });
});
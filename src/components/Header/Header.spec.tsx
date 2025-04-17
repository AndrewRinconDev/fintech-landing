import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('renders the logo', () => {
    expect(screen.getByAltText('Fintech Logo')).toBeInTheDocument();
  });

  it('shows mobile menu button on small screens', () => {
    expect(screen.getByLabelText('Menú principal')).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    const button = screen.getByLabelText('Menú principal');
    fireEvent.click(button);
    expect(screen.getByText('Productos')).toBeVisible();
    fireEvent.click(button);
    expect(screen.queryByText('Productos')).not.toBeVisible();
  });

  it('closes mobile menu when a nav item is clicked', () => {
    const button = screen.getByLabelText('Menú principal');
    fireEvent.click(button);
    const productsLink = screen.getByText('Productos');
    fireEvent.click(productsLink);
    expect(screen.queryByText('Productos')).not.toBeVisible();
  });

  it('renders desktop navigation on large screens', () => {
    // Simulate 
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });
    window.dispatchEvent(new Event('resize'));

    expect(screen.getByText('Productos')).toBeInTheDocument();
    expect(screen.getByText('Beneficios')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });
});
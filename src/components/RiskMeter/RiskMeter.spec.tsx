import React from 'react';
import { render, screen } from '@testing-library/react';

import { RiskLevel } from '@/types/Product';

import RiskMeter from './RiskMeter';

describe('RiskMeter Component', () => {
  it('renders low risk meter correctly', () => {
    render(<RiskMeter riskLevel="bajo" />);
    
    expect(screen.getByText('Nivel de riesgo: bajo')).toBeInTheDocument();
    const meter = screen.getByRole('meter');
    expect(meter).toHaveStyle('width: 33%');
    expect(meter).toHaveStyle('background-color: #10b981');
  });

  it('renders medium risk meter correctly', () => {
    render(<RiskMeter riskLevel="medio" />);
    
    const meter = screen.getByRole('meter');
    expect(meter).toHaveStyle('width: 66%');
    expect(meter).toHaveStyle('background-color: #f59e0b');
  });

  it('renders high risk meter correctly', () => {
    render(<RiskMeter riskLevel="alto" />);
    
    const meter = screen.getByRole('meter');
    expect(meter).toHaveStyle('width: 100%');
    expect(meter).toHaveStyle('background-color: #ef4444');
  });

  it('has proper accessibility attributes', () => {
    render(<RiskMeter riskLevel="medio" />);
    
    const meter = screen.getByRole('meter');
    expect(meter).toHaveAttribute('aria-valuenow', '2');
    expect(meter).toHaveAttribute('aria-valuemin', '1');
    expect(meter).toHaveAttribute('aria-valuemax', '3');
  });

  it('shows all risk level labels', () => {
    render(<RiskMeter riskLevel="alto" />);
    
    expect(screen.getByText('Bajo')).toBeInTheDocument();
    expect(screen.getByText('Medio')).toBeInTheDocument();
    expect(screen.getByText('Alto')).toBeInTheDocument();
  });
});
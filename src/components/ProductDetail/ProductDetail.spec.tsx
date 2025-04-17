import React from 'react';
import { render, screen } from '@testing-library/react';

import { productsMock } from '@/utils/__mocks__/productsData';

import ProductDetail from './ProductDetail';

describe('ProductDetail Component', () => {
  const testProduct = productsMock[0];

  it('renders all product details', () => {
    render(<ProductDetail product={testProduct} />);
    
    expect(screen.getByText(testProduct.name)).toBeInTheDocument();
    expect(screen.getByText(testProduct.description)).toBeInTheDocument();
    
    // Verificar beneficios
    testProduct.benefits.forEach(benefit => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
    
    // Verificar características
    testProduct.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('displays recommended badge when product is recommended', () => {
    const recommendedProduct = { ...testProduct, recommended: true };
    render(<ProductDetail product={recommendedProduct} />);
    expect(screen.getByText('Producto Recomendado')).toBeInTheDocument();
  });

  it('renders all product attributes in the grid', () => {
    render(<ProductDetail product={testProduct} />);
    
    if (testProduct.interestRate) {
      expect(screen.getByText(`Tasa de interés: ${testProduct.interestRate}%`)).toBeInTheDocument();
    }
    
    if (testProduct.minimumBalance) {
      expect(screen.getByText(`Saldo mínimo: $${testProduct.minimumBalance}`)).toBeInTheDocument();
    }
  });

  it('displays risk meter when product has risk level', () => {
    render(<ProductDetail product={testProduct} />);
    expect(screen.getByText('Nivel de riesgo: bajo')).toBeInTheDocument();
  });
});
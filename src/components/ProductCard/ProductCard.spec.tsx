import React from 'react';
import { render, screen } from '@testing-library/react';

import { productsMock } from '@/utils/__mocks__/productsData';

import ProductCard from './ProductCard';
import ThemeProviderClient from '@/providers/ThemeProvider';

describe('ProductCard Component', () => {
  const testProduct = productsMock[0];

  it('renders product information correctly', () => {
    render(
      <ThemeProviderClient>
        <ProductCard product={testProduct} />
      </ThemeProviderClient>
    );

    expect(screen.getByText(testProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`${testProduct.interestRate}%`)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Ver detalles/i })).toBeInTheDocument();
  });

  it('shows recommended badge when product is recommended', () => {
    const recommendedProduct = { ...testProduct, recommended: true };
    render(
    <ThemeProviderClient>
      <ProductCard product={recommendedProduct} />
    </ThemeProviderClient>
  );
    expect(screen.getByText('Recomendado')).toBeInTheDocument();
  });

  it('does not show recommended badge when product is not recommended', () => {
    const notRecommendedProduct = { ...testProduct, recommended: false };
    render(
      <ThemeProviderClient>
        <ProductCard product={notRecommendedProduct} />
      </ThemeProviderClient>
    );
    expect(screen.queryByText('Recomendado')).not.toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <ThemeProviderClient>
        <ProductCard product={testProduct} />
      </ThemeProviderClient>
    );
    const detailLink = screen.getByRole('link');
    expect(detailLink).toHaveAttribute('aria-label', `Ver detalles de ${testProduct.name}`);
  });

  it('displays risk meter when product has risk level', () => {
    render(
      <ThemeProviderClient>
        <ProductCard product={testProduct} />
      </ThemeProviderClient>
    );
    expect(screen.getByText('Nivel de riesgo: bajo')).toBeInTheDocument();
  });
});

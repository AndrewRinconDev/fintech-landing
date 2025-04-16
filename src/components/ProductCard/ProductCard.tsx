import React from 'react';
import Link from 'next/link';

import { IFinancialProduct } from '@/types/Product';
import RiskMeter from '../RiskMeter/RiskMeter';

import { CardContainer, CardImage, CardContent, CardTitle, CardBadge, CardFeature } from './ProductCard.styles';

interface IProductCardProps {
  product: IFinancialProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <CardContainer>
      {product.recommended && <CardBadge>Recomendado</CardBadge>}
      <CardImage src={product.imageUrl} alt={product.name} width={300} height={200} />
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        
        {product.interestRate && (
          <CardFeature>
            <span>Tasa de interés:</span> {product.interestRate}%
          </CardFeature>
        )}
        
        {product.riskLevel && (
          <div className="mt-2">
            <RiskMeter riskLevel={product.riskLevel} />
          </div>
        )}
        
        <Link 
          href={`/product/${product.id}`} 
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          aria-label={`Ver detalles de ${product.name}`}
        >
          Ver detalles
        </Link>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;
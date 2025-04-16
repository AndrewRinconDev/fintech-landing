import React from 'react';
import { IFinancialProduct } from '@/types/Product';
import RiskMeter from '../RiskMeter/RiskMeter';
import { 
  DetailContainer,
  DetailHeader,
  DetailImage,
  DetailContent,
  DetailTitle,
  DetailSubtitle,
  DetailSection,
  DetailSectionTitle,
  DetailList,
  DetailListItem,
  DetailBadge,
  DetailGrid,
  DetailGridItem
} from './ProductDetail.styles';

interface ProductDetailProps {
  product: IFinancialProduct;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <DetailContainer>
      <DetailHeader>
        <DetailImage 
          src={product.imageUrl} 
          alt={product.name} 
          width={600} 
          height={300} 
        />
        {product.recommended && (
          <DetailBadge>Producto Recomendado</DetailBadge>
        )}
      </DetailHeader>
      
      <DetailContent>
        <DetailTitle>{product.name}</DetailTitle>
        <DetailSubtitle>{product.description}</DetailSubtitle>
        
        <DetailGrid>
          {product.interestRate && (
            <DetailGridItem>
              <span>Tasa de interés:</span>
              <strong>{product.interestRate}%</strong>
            </DetailGridItem>
          )}
          
          {product.annualFee && (
            <DetailGridItem>
              <span>Cuota anual:</span>
              <strong>${product.annualFee}</strong>
            </DetailGridItem>
          )}
          
          {product.minimumBalance && (
            <DetailGridItem>
              <span>Saldo mínimo:</span>
              <strong>${product.minimumBalance}</strong>
            </DetailGridItem>
          )}
          
          {product.riskLevel && (
            <DetailGridItem>
              <span>Nivel de riesgo:</span>
              <RiskMeter riskLevel={product.riskLevel} />
            </DetailGridItem>
          )}
        </DetailGrid>
        
        <DetailSection>
          <DetailSectionTitle>Beneficios</DetailSectionTitle>
          <DetailList>
            {product.benefits.map((benefit, index) => (
              <DetailListItem key={index}>
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </DetailListItem>
            ))}
          </DetailList>
        </DetailSection>
        
        <DetailSection>
          <DetailSectionTitle>Características principales</DetailSectionTitle>
          <DetailList>
            {product.features.map((feature, index) => (
              <DetailListItem key={index}>
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {feature}
              </DetailListItem>
            ))}
          </DetailList>
        </DetailSection>
      </DetailContent>
    </DetailContainer>
  );
};

export default ProductDetail;
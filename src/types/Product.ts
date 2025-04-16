export type ProductCategory = 
  | 'cuentas' 
  | 'tarjetas' 
  | 'prestamos' 
  | 'inversiones' 
  | 'seguros';

export type RiskLevel = 
  | 'bajo' 
  | 'medio' 
  | 'alto';

export interface IFinancialProduct {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  interestRate?: number;
  annualFee?: number;
  minimumBalance?: number;
  riskLevel?: RiskLevel;
  benefits: string[];
  features: string[];
  monthlyFee?: number;
  imageUrl: string;
  recommended: boolean;
}

export const productCategories: ProductCategory[] = [
  'cuentas',
  'tarjetas',
  'inversiones',
  'prestamos',
  'seguros'
];

export const allProductCategories: (ProductCategory | 'all')[] = [
  'all', 
  ...productCategories
];
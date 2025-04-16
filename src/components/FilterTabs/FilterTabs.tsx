import React from 'react';
import { ProductCategory } from '@/types/Product';
import { TabContainer, TabButton } from './FilterTabs.styles';

interface FilterTabsProps {
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory | 'all') => void;
}

const FilterTabs = ({ 
  selectedCategory, 
  onSelectCategory 
}: FilterTabsProps) => {
  const categories: (ProductCategory | 'all')[] = [
    'all', 
    'cuentas', 
    'tarjetas', 
    'inversiones', 
    'prestamos', 
    'seguros'
  ];

  const getCategoryName = (category: string) => {
    const names: Record<string, string> = {
      all: 'Todos',
      cuentas: 'Cuentas',
      tarjetas: 'Tarjetas',
      inversiones: 'Inversiones',
      prestamos: 'Préstamos',
      seguros: 'Seguros'
    };
    return names[category] || category;
  };

  return (
    <TabContainer role="tablist" aria-label="Filtrar productos por categoría">
      {categories.map((category) => (
        <TabButton
          key={category}
          role="tab"
          aria-selected={selectedCategory === category}
          $isActive={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {getCategoryName(category)}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default FilterTabs;
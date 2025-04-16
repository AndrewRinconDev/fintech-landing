'use client';
import { useState, useEffect } from 'react';

import { IFinancialProduct, ProductCategory } from '@/types/Product';
import { productsMock } from '@/utils/__mocks__/productsData';

export const useProducts = () => {
  const [products, setProducts] = useState<IFinancialProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IFinancialProduct[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const timer = setTimeout(() => {
      setProducts(productsMock);
      setFilteredProducts(productsMock);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  return {
    products: filteredProducts,
    loading,
    selectedCategory,
    setSelectedCategory
  };
};
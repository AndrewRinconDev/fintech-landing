'use client';

import React from 'react';

import ProductCard from '@/components/ProductCard/ProductCard';
import FilterTabs from '@/components/FilterTabs/FilterTabs';
import { useProducts } from '@/hooks/useProducts';
import { ProductCategory } from '@/types/Product';

const HomePage = () => {
  const { products, loading, selectedCategory, setSelectedCategory } = useProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <section id="products" className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Nuestros Productos Financieros</h1>

        <FilterTabs
          selectedCategory={selectedCategory}
          onSelectCategory={(category: ProductCategory | 'all') => setSelectedCategory(category)}
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;

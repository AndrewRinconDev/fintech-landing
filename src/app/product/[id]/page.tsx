import React from 'react';
import { notFound } from 'next/navigation';

import ProductDetail from '@/components/ProductDetail/ProductDetail';
import { productsMock } from '@/utils/__mocks__/productsData';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{ id: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  // read route params
  const { id } = await params
  const product = productsMock.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-[1200px]">
      <div className="mb-6">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 flex items-center"
          aria-label="Volver al catálogo de productos"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al catálogo
        </Link>
      </div>

      <ProductDetail product={product} />
    </main>
  );
};

export default ProductPage;

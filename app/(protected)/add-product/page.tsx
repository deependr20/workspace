'use client';

import { useProducts } from '@/hooks/useProducts';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ProductForm } from '@/components/products/ProductForm';
import { Product } from '@/lib/types';
import { ArrowLeft } from 'lucide-react';

export default function AddProductPage() {
  const { products, addProduct, updateProduct, isLoading } = useProducts();
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = searchParams.get('id');
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (productId && products.length > 0) {
      const foundProduct = products.find(p => p.id === productId);
      setProduct(foundProduct);
    }
    setPageLoading(false);
  }, [productId, products]);

  const handleSubmit = async (data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (product) {
      await updateProduct(product.id, data);
    } else {
      await addProduct(data);
    }
    router.push('/products');
  };

  return (
    <ProtectedRoute allowedRoles={['manager', 'storekeeper']}>
      <div className="min-h-screen bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {!pageLoading && (
            <ProductForm
              product={product}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}

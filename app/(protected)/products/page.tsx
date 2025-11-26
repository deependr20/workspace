'use client';

import { useProducts } from '@/hooks/useProducts';
import { useRouter } from 'next/navigation';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { ProductList } from '@/components/products/ProductList';
import { Plus, RefreshCw } from 'lucide-react';

export default function ProductsPage() {
  const { products, isLoading, fetchProducts } = useProducts();
  const router = useRouter();

  const handleEdit = (product: any) => {
    router.push(`/add-product?id=${product.id}`);
  };

  return (
    <ProtectedRoute allowedRoles={['manager', 'storekeeper']}>
      <div className="min-h-screen bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Products
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Manage and view all commodities in your inventory
              </p>
            </div>
            
            <div className="flex gap-4 mt-6 md:mt-0">
              <button
                onClick={fetchProducts}
                className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                onClick={() => router.push('/add-product')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Product
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <ProductList
            products={products}
            onEdit={handleEdit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
}

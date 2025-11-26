'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BarChart3, Package, TrendingUp, AlertTriangle } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const { products } = useProducts();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalValue: 0,
    lowStockItems: 0,
    totalCategories: 0,
  });

  useEffect(() => {
    if (!isLoading && products.length > 0) {
      const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
      const lowStock = products.filter(p => p.quantity < 100).length;
      const categories = new Set(products.map(p => p.category)).size;

      setStats({
        totalProducts: products.length,
        totalValue,
        lowStockItems: lowStock,
        totalCategories: categories,
      });
    }
  }, [products, isLoading]);

  return (
    <ProtectedRoute allowedRoles={['manager']}>
      <div className="min-h-screen bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Welcome back, {user?.name}! Here's your commodities overview.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Total Products Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                    Total Products
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {stats.totalProducts}
                  </p>
                </div>
                <Package className="w-12 h-12 text-blue-500 opacity-20" />
              </div>
            </div>

            {/* Total Value Card */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                    Total Value
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    ₹{stats.totalValue.toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="w-12 h-12 text-green-500 opacity-20" />
              </div>
            </div>

            {/* Low Stock Items */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                    Low Stock Items
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {stats.lowStockItems}
                  </p>
                </div>
                <AlertTriangle className="w-12 h-12 text-orange-500 opacity-20" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                    Categories
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                    {stats.totalCategories}
                  </p>
                </div>
                <BarChart3 className="w-12 h-12 text-purple-500 opacity-20" />
              </div>
            </div>
          </div>

          {/* Top Products Table */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Top Products by Value
            </h2>
            
            {products.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Product Name
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Category
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Quantity
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Unit Price
                      </th>
                      <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Total Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products
                      .sort((a, b) => b.price * b.quantity - a.price * a.quantity)
                      .slice(0, 5)
                      .map((product) => (
                        <tr
                          key={product.id}
                          className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                        >
                          <td className="px-4 py-3 text-sm text-slate-900 dark:text-white font-medium">
                            {product.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                            {product.category}
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                            {product.quantity} {product.unit}
                          </td>
                          <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                            ₹{product.price}
                          </td>
                          <td className="px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">
                            ₹{(product.price * product.quantity).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-slate-500 dark:text-slate-400 text-center py-8">
                No products available. Start by adding products.
              </p>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

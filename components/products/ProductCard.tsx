'use client';

import { Product } from '@/lib/types';
import { Edit2, Trash2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete?: (id: string) => void;
}

export const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          {product.name}
        </h3>
        
        <div className="space-y-2 mb-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium">Category:</span> {product.category}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium">Quantity:</span> {product.quantity} {product.unit}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium">Price:</span> ₹{product.price}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(product)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </button>
          {onDelete && (
            <button
              onClick={() => onDelete(product.id)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

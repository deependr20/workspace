'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/lib/types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const addProduct = async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      setIsLoading(true);
      const response = await axios.post('/api/products', product);
      setProducts([...products, response.data]);
      return response.data;
    } catch (err) {
      setError('Failed to add product');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (id: string, product: Partial<Product>) => {
    try {
      setIsLoading(true);
      const response = await axios.put(`/api/products/${id}`, product);
      setProducts(products.map(p => p.id === id ? response.data : p));
      return response.data;
    } catch (err) {
      setError('Failed to update product');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading, error, addProduct, updateProduct, fetchProducts };
};

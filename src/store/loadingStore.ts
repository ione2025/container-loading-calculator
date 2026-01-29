import { create } from 'zustand';
import { Product, Container, LoadingCalculation } from '../types';
import { STANDARD_CONTAINERS } from '../utils/containerUtils';

interface LoadingStore {
  container: Container;
  products: Product[];
  setContainer: (container: Container) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  clearProducts: () => void;
  getCalculation: () => LoadingCalculation;
}

export const useLoadingStore = create<LoadingStore>((set, get) => ({
  container: STANDARD_CONTAINERS[0],
  products: [],

  setContainer: (container) => set({ container }),

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),

  updateProduct: (id, updates) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    })),

  clearProducts: () => set({ products: [] }),

  getCalculation: () => {
    const state = get();
    const totalUsedCBM = state.products.reduce(
      (sum, product) => sum + product.cbm * product.quantity,
      0
    );
    const totalWeight = state.products.reduce(
      (sum, product) => sum + product.weight * product.quantity,
      0
    );
    const totalAvailableCBM = state.container.totalCBM - totalUsedCBM;
    const utilizationPercentage = (totalUsedCBM / state.container.totalCBM) * 100;

    return {
      totalUsedCBM,
      totalAvailableCBM,
      totalWeight,
      utilizationPercentage,
    };
  },
}));

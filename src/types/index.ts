export interface Product {
  id: string;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  quantity: number;
  cbm: number;
}

export interface Container {
  type: string;
  length: number;
  width: number;
  height: number;
  maxWeight: number;
  totalCBM: number;
}

export interface LoadingCalculation {
  totalUsedCBM: number;
  totalAvailableCBM: number;
  totalWeight: number;
  utilizationPercentage: number;
}

import { Container } from '../types';

export const STANDARD_CONTAINERS: Container[] = [
  {
    type: '20ft Standard',
    length: 5.898,
    width: 2.352,
    height: 2.393,
    maxWeight: 28000,
    totalCBM: 33.2,
  },
  {
    type: '40ft Standard',
    length: 12.032,
    width: 2.352,
    height: 2.393,
    maxWeight: 28600,
    totalCBM: 67.7,
  },
  {
    type: '40ft High Cube',
    length: 12.032,
    width: 2.352,
    height: 2.698,
    maxWeight: 28600,
    totalCBM: 76.3,
  },
  {
    type: '45ft High Cube',
    length: 13.556,
    width: 2.352,
    height: 2.698,
    maxWeight: 29000,
    totalCBM: 86.0,
  },
];

export const calculateCBM = (length: number, width: number, height: number): number => {
  return (length * width * height) / 1000000;
};

export const calculateMaxQuantity = (
  productLength: number,
  productWidth: number,
  productHeight: number,
  container: Container
): number => {
  const productCBM = calculateCBM(productLength, productWidth, productHeight);
  if (productCBM === 0) return 0;
  
  return Math.floor(container.totalCBM / productCBM);
};

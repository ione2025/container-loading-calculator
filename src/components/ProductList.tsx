import React from 'react';
import { useLoadingStore } from '../store/loadingStore';

const ProductList: React.FC = () => {
  const { products, removeProduct } = useLoadingStore();

  if (products.length === 0) {
    return (
      <div className="card">
        <h2>Products List</h2>
        <div className="empty-state">
          <p>No products added yet. Add your first product above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Products List ({products.length})</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <div className="product-info">
            <h3>{product.name}</h3>
            <div className="product-details">
              <span>
                {product.length} × {product.width} × {product.height} cm
              </span>
              <span>{product.weight} kg</span>
              <span>Qty: {product.quantity}</span>
              <span>CBM: {(product.cbm * product.quantity).toFixed(3)}</span>
            </div>
          </div>
          <button
            className="btn btn-danger btn-small"
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

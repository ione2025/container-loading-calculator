import React, { useState } from 'react';
import { useLoadingStore } from '../store/loadingStore';
import { calculateCBM, calculateMaxQuantity } from '../utils/containerUtils';

const ProductForm: React.FC = () => {
  const { container, addProduct } = useLoadingStore();
  const [formData, setFormData] = useState({
    name: '',
    length: '',
    width: '',
    height: '',
    weight: '',
    quantity: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const length = parseFloat(formData.length);
    const width = parseFloat(formData.width);
    const height = parseFloat(formData.height);
    const weight = parseFloat(formData.weight);
    const quantity = parseInt(formData.quantity);

    if (!formData.name || isNaN(length) || isNaN(width) || isNaN(height) || isNaN(weight) || isNaN(quantity)) {
      alert('Please fill in all fields with valid values');
      return;
    }

    const cbm = calculateCBM(length, width, height);

    addProduct({
      id: Date.now().toString(),
      name: formData.name,
      length,
      width,
      height,
      weight,
      quantity,
      cbm,
    });

    setFormData({
      name: '',
      length: '',
      width: '',
      height: '',
      weight: '',
      quantity: '',
    });
  };

  const handleAutoFill = () => {
    const length = parseFloat(formData.length);
    const width = parseFloat(formData.width);
    const height = parseFloat(formData.height);

    if (isNaN(length) || isNaN(width) || isNaN(height)) {
      alert('Please enter product dimensions first');
      return;
    }

    const maxQty = calculateMaxQuantity(length, width, height, container);
    setFormData({
      ...formData,
      quantity: maxQty.toString(),
    });
  };

  return (
    <div className="card">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g., Box A"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="length">Length (cm):</label>
            <input
              type="number"
              id="length"
              name="length"
              value={formData.length}
              onChange={handleInputChange}
              placeholder="100"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="width">Width (cm):</label>
            <input
              type="number"
              id="width"
              name="width"
              value={formData.width}
              onChange={handleInputChange}
              placeholder="50"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="50"
              step="0.01"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="10"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="0"
              min="1"
            />
          </div>

          <div className="form-group">
            <label>&nbsp;</label>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAutoFill}
            >
              Auto Fill Max
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;

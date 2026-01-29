import React from 'react';
import { useLoadingStore } from '../store/loadingStore';
import { STANDARD_CONTAINERS } from '../utils/containerUtils';

const ContainerSelector: React.FC = () => {
  const { container, setContainer } = useLoadingStore();

  const handleContainerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedContainer = STANDARD_CONTAINERS.find(
      (c) => c.type === e.target.value
    );
    if (selectedContainer) {
      setContainer(selectedContainer);
    }
  };

  return (
    <div className="card">
      <h2>Container Type</h2>
      <div className="form-group">
        <label htmlFor="container-select">Select Container:</label>
        <select
          id="container-select"
          value={container.type}
          onChange={handleContainerChange}
        >
          {STANDARD_CONTAINERS.map((c) => (
            <option key={c.type} value={c.type}>
              {c.type} - {c.totalCBM.toFixed(1)} CBM
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Dimensions: {container.length.toFixed(2)}m × {container.width.toFixed(2)}m × {container.height.toFixed(2)}m</p>
        <p>Max Weight: {container.maxWeight.toLocaleString()} kg</p>
      </div>
    </div>
  );
};

export default ContainerSelector;

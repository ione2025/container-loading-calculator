import { useLoadingStore } from '../store/loadingStore';

const CBMSummary: React.FC = () => {
  const calculation = useLoadingStore((state) => state.getCalculation());
  const container = useLoadingStore((state) => state.container);

  return (
    <div className="card">
      <h2>Loading Summary</h2>
      <div className="summary-grid">
        <div className="summary-item highlight">
          <h3>Used CBM</h3>
          <p>{calculation.totalUsedCBM.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h3>Available CBM</h3>
          <p>{calculation.totalAvailableCBM.toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h3>Total Weight</h3>
          <p>{calculation.totalWeight.toFixed(0)} kg</p>
        </div>
        <div className="summary-item">
          <h3>Utilization</h3>
          <p>{calculation.utilizationPercentage.toFixed(1)}%</p>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${Math.min(calculation.utilizationPercentage, 100)}%`,
          }}
        />
      </div>
      {calculation.utilizationPercentage > 100 && (
        <div style={{ color: '#ff4444', marginTop: '1rem', fontWeight: 'bold' }}>
          ⚠️ Warning: Container is overloaded!
        </div>
      )}
      {calculation.totalWeight > container.maxWeight && (
        <div style={{ color: '#ff4444', marginTop: '0.5rem', fontWeight: 'bold' }}>
          ⚠️ Warning: Weight limit exceeded!
        </div>
      )}
    </div>
  );
};

export default CBMSummary;

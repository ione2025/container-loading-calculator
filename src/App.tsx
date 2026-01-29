import ContainerSelector from './components/ContainerSelector';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import CBMSummary from './components/CBMSummary';
import Container3DView from './components/Container3DView';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Container Loading Calculator</h1>
        <p>Calculate and visualize container loading capacity with real-time CBM calculations</p>
      </header>
      
      <div className="app-content">
        <div className="left-panel">
          <ContainerSelector />
          <CBMSummary />
          <ProductForm />
          <ProductList />
        </div>
        
        <div className="right-panel">
          <Container3DView />
        </div>
      </div>
    </div>
  );
}

export default App;

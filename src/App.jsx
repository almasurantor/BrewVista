import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { BreweryDetail } from './pages/BreweryDetail'; 
import './styles.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/brewery/:id" element={<BreweryDetail />} />
      </Routes>
    </div>
  );
};
export default App;
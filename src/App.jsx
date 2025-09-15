import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SalesPage from './SalesPage';
import Examples from './Examples';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SalesPage />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="*" element={<SalesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Ap
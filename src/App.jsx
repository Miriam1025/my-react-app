import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SalesPage from './SalesPage';
import ChatUI from './chatui.jsx';
import Scheduler from './Scheduler.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav style={{ 
          padding: '1rem', 
          background: '#f8f9fa', 
          borderBottom: '1px solid #ddd',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'flex', 
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link to="/" style={{ 
              textDecoration: 'none', 
              color: '#333', 
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              🔖 Timeless Links
            </Link>
            <Link to="/" style={{ 
              textDecoration: 'none', 
              color: '#666',
              padding: '0.5rem 1rem',
              borderRadius: '5px'
            }}>
              Home
            </Link>
            <Link to="/chat" style={{ 
              textDecoration: 'none', 
              color: '#666',
              padding: '0.5rem 1rem',
              borderRadius: '5px'
            }}>
              AI Chat
            </Link>
            <Link to="/scheduler" style={{ 
              textDecoration: 'none', 
              color: '#666',
              padding: '0.5rem 1rem',
              borderRadius: '5px'
            }}>
              Book Appointment
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<SalesPage />} />
          <Route path="/chat" element={<ChatUI />} />
          <Route path="/scheduler" element={<Scheduler />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// src/App.jsx
import React from 'react';
import SalesPage from './components/SalesPage';
import Examples from './Examples';
import StudentExample from './examples/StudentExample';
import FreelancerExample from './examples/FreelancerExample';
import DesignerExample from './examples/DesignerExample';
import FamilyExample from './examples/FamilyExample';
import RemoteWorkerExample from './examples/RemoteWorkerExample';
import './App.css';

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  if (path === '/examples' || path === '/examples/') return <Examples />;
  if (path === '/examples/student') return <StudentExample />;
  if (path === '/examples/freelancer') return <FreelancerExample />;
  if (path === '/examples/designer') return <DesignerExample />;
  if (path === '/examples/family') return <FamilyExample />;
  if (path === '/examples/remote-worker') return <RemoteWorkerExample />;

  return <SalesPage />;
}

export default App;
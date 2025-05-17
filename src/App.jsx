import Counter from './Counter';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <img 
        src="/logo_white_bg_refined.jpeg" 
        alt="Timeless Links Logo" 
        style={{ width: '150px', marginBottom: '1rem' }} 
      />
      <h1>Welcome to Timeless Links</h1>
      <p>This is your interactive counter UI:</p>
      <Counter />
    </div>
  );
}

export default App;

import Counter from './Counter';
import ChatUI from './chatUI';
import Scheduler from './Scheduler';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <img 
        src="/logo_white_bg_refined.jpeg" 
        alt="Timeless Links Logo" 
        style={{ width: '150px', marginBottom: '1rem' }} 
      />
      <h1>Welcome to Timeless Links</h1>
      <p>This is your interactive AI + scheduling assistant.</p>

      <hr style={{ margin: '2rem 0' }} />
      <h2>🔢 Interactive Counter</h2>
      <Counter />

      <hr style={{ margin: '2rem 0' }} />
      <ChatUI />

      <hr style={{ margin: '2rem 0' }} />
      <Scheduler />
    </div>
  );
}

export default App;

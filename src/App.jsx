import Counter from './Counter';
import ChatUI from './chatUI';
import Scheduler from './Scheduler';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <img 
        src="/logo_white_bg_refined.jpeg" 
        alt="Timeless Links Logo" 
        style={{ 
        width: '150px', 
        marginBottom: '1rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
        }} 
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

            <hr style={{ margin: '2rem 0' }} />

      <h2>💻 Build Link</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto' }}>
        Custom development support for websites, apps, and automation tools. Let’s bring your idea to life — with clear, personal tech help.
      </p>
      <a 
        href="https://buy.stripe.com/test_8x2cN72wT5Wt7Ab3a00Ny00" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button style={{ padding: '1rem 2rem', fontSize: '1rem', marginTop: '1rem' }}>
          Book Build Link
        </button>
      </a>
    </div>
  );
}

export default App;

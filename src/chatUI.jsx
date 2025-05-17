import { useState } from 'react';

function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/.netlify/functions/chatgpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '⚠️ Something went wrong.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>💬 Chat with Timeless Links AI</h2>
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: 8 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '0.5rem' }}>
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
          </div>
        ))}
        {loading && <p>Typing...</p>}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask something..."
          style={{ width: '80%', padding: '0.5rem' }}
        />
        <button onClick={sendMessage} style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatUI;

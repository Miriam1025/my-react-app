import React from 'react';

function SalesPage() {
  const handleFaqClick = (e) => {
    const answer = e.target.nextElementSibling;
    if (answer) {
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: 1.6, color: '#333' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img 
            src="/logo_white_bg_refined.jpeg" 
            alt="Timeless Links Logo" 
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              marginBottom: '30px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }} 
          />
          <h1 style={{ fontSize: '3.5em', fontWeight: 700, marginBottom: '20px', lineHeight: 1.2 }}>
            Create Beautiful Bookmark Pages in Minutes
          </h1>
          <p style={{ fontSize: '1.3em', marginBottom: '40px', opacity: 0.9 }}>
            Organize your favorite websites with stunning, professional designs. No coding required!
          </p>
          <div style={{ fontSize: '2em', fontWeight: 700, margin: '20px 0 10px' }}>$29</div>
          <div style={{ opacity: 0.8, fontSize: '0.9em', marginBottom: '30px' }}>One-time purchase • Instant download</div>
          <a 
            href="https://buy.stripe.com/7sY8wPfd5dsgbNOeIebEA00"
            target="_blank"
            style={{
              display: 'inline-block',
              background: '#ff6b6b',
              color: 'white',
              padding: '20px 40px',
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '1.2em',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)'
            }}
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Examples Link Section */}
      <section style={{ padding: '60px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <a 
            href="/examples"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '1.1em',
              fontWeight: '600',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            👀 See Examples & Themes
          </a>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 600, marginBottom: '20px', color: '#2c3e50' }}>
            Why Choose Our Bookmark Builder?
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#666', marginBottom: '60px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Create your own custom home page with organized & beautiful bookmark pages that work offline
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '15px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: '3em', marginBottom: '20px', display: 'block' }}>🚀</span>
              <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2c3e50' }}>No Coding Required</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Simple form-based builder. Just fill in your links and descriptions - we handle the rest!</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '15px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: '3em', marginBottom: '20px', display: 'block' }}>🎨</span>
              <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2c3e50' }}>4 Professional Themes</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Corporate Blue, Executive Dark, Minimalist White, and Sunset Gradient themes included.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '15px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: '3em', marginBottom: '20px', display: 'block' }}>📱</span>
              <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2c3e50' }}>Mobile Responsive</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Your bookmark pages look perfect on desktop, tablet, and mobile devices.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '15px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: '3em', marginBottom: '20px', display: 'block' }}>🔍</span>
              <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2c3e50' }}>Built-in Search</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Find your bookmarks instantly with the integrated search functionality.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '15px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: '3em', marginBottom: '20px', display: 'block' }}>💾</span>
              <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2c3e50' }}>Works Offline</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>No subscriptions, no accounts. Your bookmark page works anywhere, anytime.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 30px', borderRadius: '15px', background: 'white', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
              <span style={{ fontSize: '3em', marginBottom: '20px', display: 'block' }}>⚡</span>
              <h3 style={{ fontSize: '1.5em', marginBottom: '15px', color: '#2c3e50' }}>Instant Setup</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>Download and start building immediately. Create your page in under 10 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 600, marginBottom: '20px', color: '#2c3e50' }}>
            How It Works
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#666', marginBottom: '60px' }}>
            Get your custom bookmark page in 3 simple steps
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#667eea',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5em',
                fontWeight: 700,
                margin: '0 auto 20px'
              }}>1</div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '15px', color: '#2c3e50' }}>Fill Out Simple Forms</h4>
              <p style={{ color: '#666' }}>Just type your website names and URLs into easy forms - like filling out a survey!</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#667eea',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5em',
                fontWeight: 700,
                margin: '0 auto 20px'
              }}>2</div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '15px', color: '#2c3e50' }}>Click "Create My Page"</h4>
              <p style={{ color: '#666' }}>One click automatically downloads your personalized bookmark page to your computer.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#667eea',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5em',
                fontWeight: 700,
                margin: '0 auto 20px'
              }}>3</div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '15px', color: '#2c3e50' }}>Double-Click to Open</h4>
              <p style={{ color: '#666' }}>Find the downloaded file and double-click it. It opens in your web browser instantly - bookmark it!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 600, marginBottom: '60px', color: '#2c3e50' }}>
            What People Are Saying
          </h2>
          
          <div style={{ background: 'white', padding: '40px', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ fontStyle: 'italic', fontSize: '1.1em', marginBottom: '20px', color: '#555' }}>
              "This saved me hours of trying to organize my bookmarks. The themes are gorgeous and it works perfectly offline!"
            </div>
            <div style={{ fontWeight: 600, color: '#2c3e50' }}>- Sarah K., Marketing Manager</div>
          </div>
          
          <div style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ fontStyle: 'italic', fontSize: '1.1em', marginBottom: '20px', color: '#555' }}>
              "Finally, a bookmark solution that doesn't require a subscription. Set it up once and it just works!"
            </div>
            <div style={{ fontWeight: 600, color: '#2c3e50' }}>- Mike D., Freelance Developer</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa', textAlign: 'center' }} id="purchase">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '60px 40px',
            borderRadius: '20px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#ff6b6b',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.8em',
              fontWeight: '600'
            }}>
              ⭐ LAUNCH SPECIAL
            </div>
            
            <h3 style={{ fontSize: '2em', margin: '40px 0 20px' }}>Complete Package</h3>
            <div style={{ fontSize: '3.5em', fontWeight: 700, marginBottom: '10px' }}>$29</div>
            <div style={{ opacity: 0.9, marginBottom: '40px' }}>One-time purchase, lifetime access</div>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', padding: 0, textAlign: 'left' }}>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ Visual bookmark builder (no coding!)</li>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ 4 professional themes included</li>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ Works like any website - just double-click!</li>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ Mobile responsive designs</li>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ Built-in search functionality</li>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ Works offline - no subscriptions</li>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ Step-by-step video tutorial</li>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ Quick start PDF guide</li>
              <li style={{ padding: '10px 0', fontSize: '1.1em' }}>✓ 30-day money-back guarantee</li>
            </ul>
            
            <button 
              style={{
                display: 'inline-block',
                background: '#ff6b6b',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1.2em',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onClick={() => window.open('https://buy.stripe.com/7sY8wPfd5dsgbNOeIebEA00', '_blank')}
            >
              Buy Now - Instant Download
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5em', fontWeight: 600, marginBottom: '60px', color: '#2c3e50' }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ background: 'white', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            <button 
              style={{ 
                padding: '25px', 
                fontWeight: 600, 
                color: '#2c3e50', 
                cursor: 'pointer', 
                fontSize: '1.1em',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none'
              }}
              onClick={handleFaqClick}
              onKeyDown={(e) => e.key === 'Enter' && handleFaqClick(e)}
            >
              How do I use my bookmark page after I create it?
            </button>
            <div style={{ padding: '0 25px 25px', color: '#666', lineHeight: 1.6, display: 'none' }}>
              Super simple! After you click "Create My Page", a file downloads to your computer (usually in your Downloads folder). Just double-click that file and it opens in your web browser. Then bookmark that page in your browser so you can find it easily anytime!
            </div>
          </div>
          
          <div style={{ background: 'white', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            <button 
              style={{ 
                padding: '25px', 
                fontWeight: 600, 
                color: '#2c3e50', 
                cursor: 'pointer', 
                fontSize: '1.1em',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none'
              }}
              onClick={handleFaqClick}
              onKeyDown={(e) => e.key === 'Enter' && handleFaqClick(e)}
            >
              Do I need to know coding to use this?
            </button>
            <div style={{ padding: '0 25px 25px', color: '#666', lineHeight: 1.6, display: 'none' }}>
              Not at all! The builder uses simple forms - just type in your website names and URLs. No HTML, CSS, or JavaScript knowledge required.
            </div>
          </div>
          
          <div style={{ background: 'white', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
            <button 
              style={{ 
                padding: '25px', 
                fontWeight: 600, 
                color: '#2c3e50', 
                cursor: 'pointer', 
                fontSize: '1.1em',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none'
              }}
              onClick={handleFaqClick}
              onKeyDown={(e) => e.key === 'Enter' && handleFaqClick(e)}
            >
              Will this work on my phone/tablet?
            </button>
            <div style={{ padding: '0 25px 25px', color: '#666', lineHeight: 1.6, display: 'none' }}>
              Yes! All themes are fully responsive and look great on desktop, tablet, and mobile devices.
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        textAlign: 'center', 
        padding: '80px 20px' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Ready to Organize Your Bookmarks?</h2>
          <p style={{ fontSize: '1.2em', marginBottom: '40px', opacity: 0.9 }}>
            Join hundreds of satisfied customers who've simplified their web browsing
          </p>
          <a 
            href="#purchase" 
            style={{
              display: 'inline-block',
              background: '#ff6b6b',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.2em',
              fontWeight: '600',
              transition: 'transform 0.3s ease'
            }}
          >
            Get Started Today - $29
          </a>
        </div>
      </section>
    </div>
  );
}

export default SalesPage;
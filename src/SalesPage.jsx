import React from 'react';

function SalesPage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <img 
            src="/dist/assets/logo_white_bg_refined.jpeg" 
            alt="Timeless Links Logo" 
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              marginBottom: '30px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }} 
          />
          <h1 style={{ fontSize: '3.5em', fontWeight: 'bold', marginBottom: '20px' }}>
            🔖 Create Beautiful Bookmark Pages in Minutes
          </h1>
          <p style={{ fontSize: '1.3em', marginBottom: '40px', opacity: 0.9 }}>
            Stop digging through messy browser bookmarks! Build gorgeous, organized bookmark pages that work like real websites - no coding required!
          </p>
          <div style={{ fontSize: '1.5em', marginBottom: '30px' }}>
            No coding required!
          </div>
          <div style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>
            $29
          </div>
          <div style={{ fontSize: '1.1em', marginBottom: '30px' }}>
            One-time purchase • Instant download
          </div>
          <a 
            href="#purchase" 
            style={{
              background: '#ff6b6b',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.2em',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: '#2c3e50' }}>
            How It Works
          </h2>
          <p style={{ fontSize: '1.2em', marginBottom: '60px', color: '#666' }}>
            Get your custom bookmark page in 3 simple steps
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px' 
          }}>
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
                fontWeight: '700',
                margin: '0 auto 20px'
              }}>1</div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '15px', color: '#2c3e50' }}>
                Fill Out Simple Forms
              </h4>
              <p style={{ color: '#666' }}>
                Just type your website names and URLs into easy forms - like filling out a survey!
              </p>
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
                fontWeight: '700',
                margin: '0 auto 20px'
              }}>2</div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '15px', color: '#2c3e50' }}>
                Click "Create My Page"
              </h4>
              <p style={{ color: '#666' }}>
                One click automatically downloads your personalized bookmark page to your computer.
              </p>
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
                fontWeight: '700',
                margin: '0 auto 20px'
              }}>3</div>
              <h4 style={{ fontSize: '1.3em', marginBottom: '15px', color: '#2c3e50' }}>
                Double-Click to Open
              </h4>
              <p style={{ color: '#666' }}>
                Find the downloaded file and double-click it. It opens in your web browser instantly - bookmark it!
              </p>
            </div>
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
            position: 'relative',
            overflow: 'hidden'
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
            
            <h3 style={{ fontSize: '2em', margin: '40px 0 20px' }}>
              Complete Package
            </h3>
            <div style={{ fontSize: '3.5em', fontWeight: '700', marginBottom: '10px' }}>
              $29
            </div>
            <div style={{ opacity: 0.9, marginBottom: '40px' }}>
              One-time purchase, lifetime access
            </div>
            
            <ul style={{ listStyle: 'none', marginBottom: '40px', textAlign: 'left' }}>
              {[
                'Visual bookmark builder (no coding!)',
                '4 professional themes included',
                'Works like any website - just double-click!',
                'Mobile responsive designs', 
                'Built-in search functionality',
                'Works offline - no subscriptions',
                'Step-by-step video tutorial',
                'Quick start PDF guide',
                '30-day money-back guarantee'
              ].map((feature, index) => (
                <li key={index} style={{ padding: '10px 0', fontSize: '1.1em' }}>
                  <span style={{ color: '#4ade80', fontWeight: '700' }}>✓ </span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <a 
              href="#" 
              style={{
                background: '#ff6b6b',
                color: 'white',
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.2em',
                fontWeight: '600',
                display: 'inline-block',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Buy Now - Instant Download
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ 
        background: '#2c3e50', 
        color: 'white', 
        padding: '60px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5em', marginBottom: '20px' }}>
            Ready to Organize Your Bookmarks?
          </h2>
          <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
            Join hundreds of satisfied customers who've simplified their web browsing
          </p>
          <a 
            href="#purchase" 
            style={{
              background: '#ff6b6b',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.2em',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Get Started Today - $29
          </a>
        </div>
      </section>
    </div>
  );
}

export default SalesPage;